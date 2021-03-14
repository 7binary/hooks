import { useEffect } from 'react';

export default function useLogger(value: any) {
  useEffect(() => {
    console.log('Value changed:', value);
  }, [value]);
}
