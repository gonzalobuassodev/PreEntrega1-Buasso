import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
export const MenuList = ({ menu }) => {
  return (
    <MenuItem>
      <Typography variant='h6'>{menu}</Typography>
    </MenuItem>
  );
};
