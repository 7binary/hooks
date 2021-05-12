import Box from './Box';
import { FormGroup, IconButton, TextField } from '@material-ui/core';
import { Clear } from '@material-ui/icons';
import { useInputValue, useLogger } from '../hooks';

const UseInputWidget: React.FC = () => {
  const input = useInputValue('');

  useLogger(input.value);

  return (
    <Box>
      <FormGroup row>
        <TextField variant="outlined" size="small" {...input.bind}/>
        <IconButton onClick={input.clear}>
          <Clear/>
        </IconButton>
      </FormGroup>
    </Box>
  );
};

export default UseInputWidget;
