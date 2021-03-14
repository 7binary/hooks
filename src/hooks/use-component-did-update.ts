import { useEffect, useRef } from 'react';

export const useComponentDidUpdate = (effect: Function, dependencies = []) => {
  const loaded = useRef(false);

  useEffect(() => {
    if (!loaded.current) {
      loaded.current = true;
      return;
    }
    effect();
  }, dependencies);

  return loaded.current;
};
