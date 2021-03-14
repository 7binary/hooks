import { useCallback, useEffect, useState, memo } from 'react';
import { Button, Typography } from '@material-ui/core';
import Box from './Box';

const ItemsList: React.FC<{getItems: (from?: number) => string[]}> = memo(({ getItems }) => {
  const [items, setItems] = useState<string[]>([]);

  useEffect(() => {
    setItems(getItems(42));
  }, [getItems]);

  return (
    <ul>
      {items.map(item => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
});

const UseCallbackWidget = () => {
  const [number, setNumber] = useState<number>(15);
  const [colored, setColored] = useState(true);
  const styles = {
    color: colored ? 'maroon' : 'black',
  };

  const increment = () => setNumber(prevState => prevState + 1);

  const generateFromApi = useCallback((from: number = 1) => {
    console.log('...called generateFromApi');
    return new Array(number).fill('').map((_, index) => `Элемент № ${from + index}`);
  }, [number]);

  return (
    <Box>
      <Typography variant="h5" style={styles}>
        useCallback. Number: {number}
      </Typography>
      <Button variant="outlined" onClick={increment}>+</Button>
      <Button onClick={() => setColored(prev => !prev)}>{colored ? 'true' : 'false'}</Button>
      <ItemsList getItems={generateFromApi}/>
    </Box>
  );
};

export default UseCallbackWidget;
