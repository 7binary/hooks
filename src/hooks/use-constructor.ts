import { useRef } from 'react';

export const useConstructor = (callBack: () => void): void => {
  const hasBeenCalled = useRef(false);
  if (hasBeenCalled.current) return;
  callBack();
  hasBeenCalled.current = true;
};
