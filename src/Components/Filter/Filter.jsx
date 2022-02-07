import { filterContact } from '../../redux/filter/action';
import { useDispatch } from 'react-redux';
import { TextField } from '@mui/material';
import { Box } from '@mui/system';

export const Filter = () => {
  const dispatch = useDispatch();
  return (
    <Box sx={{ m: '5', textAlign: 'center', width: '480' }}>
      <TextField
        variant="outlined"
        label="Find contacts by name"
        type="text"
        sx={{ marginTop: '10px', width: '300px' }}
        onChange={e => dispatch(filterContact(e.target.value))}
        fullWidth
      />
    </Box>
  );
};
