import { useEffect, useState } from 'react';
import copy from 'copy-to-clipboard';

export default function useClipboardHook(resetInterval?: number) {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = (text: string) => {
    if (typeof text === 'number' || typeof text === 'string') {
      copy(text.toString());
      setIsCopied(true);
    } else {
      setIsCopied(false);
      console.error(`Cannot copy ${typeof text} to clipboard, must be a string or number`);
    }
  };

  useEffect(() => {
    let timeout: any;
    if (isCopied && resetInterval) {
      timeout = setTimeout(() => setIsCopied(false), resetInterval);
    }
    return () => {
      timeout && clearTimeout(timeout);
    };
  }, [isCopied, resetInterval]);

  return { isCopied, handleCopy };
}
