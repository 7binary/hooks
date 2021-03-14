import { useState, useMemo, useEffect } from 'react';
import { Button, Typography } from '@material-ui/core';
import Box from './Box';

const compute = (number: number) => {
  let i = 0;
  while (i < 1000000000) i++;
  console.log('...compute');
  return number * 2;
};

const UseMemoWidget = () => {
  const [number, setNumber] = useState<number>(777);
  const [colored, setColored] = useState(true);
  const computed = useMemo(() => compute(number), [number]);
  const styles = useMemo(() => ({
    color: colored ? 'maroon' : 'black',
  }), [colored]);

  useEffect(() => console.log('style changes'), [styles]);

  const increment = () => setNumber(prevState => prevState + 1);
  const decrement = () => setNumber(prevState => prevState - 1);

  return (
    <Box>
      <Typography variant="h5" style={styles}>
        useMemo. Number: {number}. Computed: {computed}
      </Typography>
      <Button variant="outlined" onClick={decrement}>-</Button>
      <Button variant="outlined" onClick={increment}>+</Button>
      <Button onClick={() => setColored(prev => !prev)}>{colored ? 'true' : 'false'}</Button>
    </Box>
  );
};

export default UseMemoWidget;
