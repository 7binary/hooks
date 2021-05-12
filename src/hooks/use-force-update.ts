import { useCallback, useState } from 'react';

export const useForceUpdate = (): () => void => {
  const [, updateState] = useState<any>();
  return useCallback(() => updateState({}), []);
};
