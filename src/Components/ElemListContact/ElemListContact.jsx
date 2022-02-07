import PropTypes from 'prop-types';
import { Typography, IconButton, Button } from '@mui/material';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import DeleteIcon from '@mui/icons-material/Delete';

export const ElemListContact = ({ name, number, id, func }) => {
  return (
    <>
      <Typography variant="h4" component="h3">
        {name}:
      </Typography>

      <Typography variant="h4" component="h3">
        <IconButton href={`tel:+38${number}`}>
          <LocalPhoneIcon sx={{ color: 'green' }} />
        </IconButton>
        {number}
      </Typography>

      <Button startIcon={<DeleteIcon />} type="button" onClick={() => func(id)}>
        Delete
      </Button>
    </>
  );
};

ElemListContact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  func: PropTypes.func.isRequired,
};
