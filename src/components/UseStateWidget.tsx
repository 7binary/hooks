import { useState } from 'react';
import { Button, Typography } from '@material-ui/core';
import Box from './Box';

const computedInitialState = () => {
  // console.log('...computed long time initialState');
  return 0;
};

const UseStateWidget = () => {
  const [counter, setCounter] = useState<number>(() => computedInitialState());
  const [info, setInfo] = useState({
    title: 'TIME',
    time: Date.now(),
  });

  const increment = () => setCounter(prevState => prevState + 1);
  const decrement = () => setCounter(prevState => prevState - 1);

  return (
    <Box>
      <Typography variant="h5">
        useState. Counter: {counter}
      </Typography>

      <Button variant="outlined" onClick={decrement}>-</Button>
      <Button variant="outlined" onClick={increment}>+</Button>
      <Button variant="contained" color="primary" onClick={() => setInfo(prev => {
        return { ...prev, title: 'DateTime' };
      })}>Change title</Button>

      <pre>{JSON.stringify(info, null, 2)}</pre>
    </Box>
  );
};

export default UseStateWidget;
