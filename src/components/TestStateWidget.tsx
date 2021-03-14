import { useState } from 'react';
import { Button } from '@material-ui/core';
import Box from './Box';

const TestStateWidget = () => {
  const [counter, setCounter] = useState<number>(0);

  const rand = () => {
    console.log('Called...');
    setCounter(Math.random());
    setCounter(Math.random());
    setCounter(Math.random());
    setCounter(Math.random()); // only 1 time rerender

    // React batches state updates that occur in event handlers and lifecycle methods.
    // React will wait for event handling to finish before re-rendering.

    // To be clear, this only works in React-controlled synthetic event handlers and lifecycle methods.
    // State updates are not batched in AJAX and setTimeout event handlers, for example.
  }

  return (
    <Box>
      <Button variant="contained" color="primary" onClick={rand}>Change {counter}</Button>
    </Box>
  );
};

export default TestStateWidget;
