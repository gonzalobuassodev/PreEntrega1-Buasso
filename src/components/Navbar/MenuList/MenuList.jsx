import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

export const MenuList = ({ menu }) => {
  // console.log(menu.name);
  return (
    <MenuItem>
      <Typography variant='h6'>
        <Link to={menu.path}>{menu.name} </Link>
      </Typography>
    </MenuItem>
  );
};
