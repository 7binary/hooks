import { useEffect, useRef, useState } from 'react';
import {
  Typography,
  TextField,
  Button,
  IconButton,
  FormControl,
  FormGroup,
  Input,
} from '@material-ui/core';
import { CenterFocusWeak } from '@material-ui/icons';

import Box from './Box';

const UseRefWidget = () => {
  const renderCount = useRef(1);
  const inputRef = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState('');
  const prev = useRef('');

  useEffect(() => {
    renderCount.current++;
    console.log(inputRef.current?.value);
  });
  useEffect(() => {
    prev.current = value;
  }, [value]);
  const focusInput = () => inputRef.current?.focus();

  return (
    <Box>
      <Typography variant="h5">
        useRef. rendered times: {renderCount.current}. Prev value: {prev.current}
      </Typography>
      <form className="" noValidate autoComplete="off">
        <FormGroup row>
          {/* text input/area */}
          <TextField
            label="Any text"
            inputRef={inputRef}
            value={value}
            onChange={e => setValue(e.target.value)}
            variant="outlined"
            size="small"
            autoFocus
          />
          {/* iconed button*/}
          {/*<IconButton*/}
          {/*  color="secondary"*/}
          {/*  aria-label="delete"*/}
          {/*><Delete/></IconButton>*/}
          {/* common button */}
          <Button
            variant="outlined"
            color="secondary"
            onClick={focusInput}
          >Focus input</Button>
        </FormGroup>

        <FormControl>
          <FormGroup row>
            {/* text input/area */}
            <Input
              value={value}
              onChange={e => setValue(e.target.value)}
            />
            {/* iconed button*/}
            <IconButton
              size="medium"
              color="secondary"
              aria-label="delete"
              onClick={focusInput}
            ><CenterFocusWeak/></IconButton>
          </FormGroup>
        </FormControl>
      </form>
    </Box>
  );
};

export default UseRefWidget;
