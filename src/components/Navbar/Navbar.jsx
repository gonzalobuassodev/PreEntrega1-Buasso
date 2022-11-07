import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Cartwidget from './Cartwidget/Cartwidget';
import { MenuList } from './MenuList/MenuList';

const menuList = ['Inicio', 'Productos', 'Contactenos'];

function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='menu'
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' component='div'>
            Photos
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexGrow: 1,
              justifyContent: 'center',
              gap: 2,
            }}
          >
            {menuList.map((menu) => (
              <MenuList menu={menu} />
            ))}
          </Box>

          <div>
            <Cartwidget />
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
