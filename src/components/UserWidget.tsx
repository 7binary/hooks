import { useUserContext } from '../context/user-context';
import Box from './Box';
import { Button, Typography } from '@material-ui/core';

const UserWidget: React.FC = () => {
  const { name, setName } = useUserContext();

  return (
    <Box>
      <Typography variant="h5">
        User: {name}
      </Typography>
      <Button onClick={() => setName('Dave')}>Change</Button>
    </Box>
  );
};

export default UserWidget;
