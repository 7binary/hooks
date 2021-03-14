import { useEffect, useState } from 'react';
import { ButtonGroup, Button, Typography } from '@material-ui/core';
import Box from './Box';

const UseEffectWidget = () => {
  const [type, setType] = useState<string>('users');
  const [data, setData] = useState([]);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    console.log('ComponentDidMount');
    const handler = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handler);
    return () => window.removeEventListener('mousemove', handler);
  }, []);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then(response => response.json())
      .then(json => setData(json));
    return () => console.log(`--> clean type`);
  }, [type]);

  return (
    <Box>
      <Typography variant="h5">
        useEffect. Type: {type}
      </Typography>
      <ButtonGroup>
        <Button variant="outlined" color="secondary"
          onClick={() => setType('users')}>Users</Button>
        <Button variant="outlined" color="secondary"
          onClick={() => setType('comments')}>Comments</Button>
        <Button variant="outlined" color="secondary"
          onClick={() => setType('albums')}>Albums</Button>
      </ButtonGroup>

      <pre>{JSON.stringify(pos, null, 2)}</pre>
      {/*<pre>{JSON.stringify(data, null, 2)}</pre>*/}
    </Box>
  );
};

export default UseEffectWidget;
