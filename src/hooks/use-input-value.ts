import { useState } from 'react';

export default function useInputValue(defaultValue = '') {
  const [value, setValue] = useState<string>(defaultValue);
  const clear = () => setValue('');

  return {
    bind: {
      value,
      onChange: (event: React.ChangeEvent<any>) => setValue(event.target.value),
    },
    value,
    clear,
  };
}

// USAGE: <input {...input} />
