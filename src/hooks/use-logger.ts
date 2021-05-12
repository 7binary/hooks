import { useEffect } from 'react';

export const useLogger = (value: any) => {
  useEffect(() => {
    console.log('Value changed:', value);
  }, [value]);
};
