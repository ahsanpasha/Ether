import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';


function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState({});

  const handleMenuOpen = (event, menu) => {
    setAnchorEl(event.currentTarget);
    setOpenDropdown((prev) => ({ ...prev, [menu]: !prev[menu] }));
  };

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      keepMounted
      open={Boolean(anchorEl)}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Option 1</MenuItem>
      <MenuItem onClick={handleMenuClose}>Option 2</MenuItem>
    </Menu>
  );

  return (
    <div className='divvv'>
      <AppBar position="static">

        <Toolbar disableGutters className='toolbarstyle'>
          <div>
            <img src="/Images/Ether.svg" alt="Logo" />
          </div>

          <div className='btndivs'>
            <Button
              onClick={(e) => handleMenuOpen(e, 'build')}
              sx={{ color: 'white', padding: '0px' }}
            >
              Build
            </Button>
            <Button
              onClick={(e) => handleMenuOpen(e, 'community')}
              sx={{ color: 'white', padding: '0px' }}
            >
              Community
            </Button>
            <Button
              onClick={(e) => handleMenuOpen(e, 'resources')}
              sx={{ color: 'white', padding: '0px' }}
            >
              Resources
            </Button>
            <Button
              onClick={(e) => handleMenuOpen(e, 'product')}
              sx={{ color: 'white', padding: '0px' }}
            >
              Product
            </Button>
          </div>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent: 'flex-end' }}>
            <IconButton
              size="large"
              aria-label="open drawer"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleDrawerToggle}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>


        {renderMenu}

        <Drawer
          anchor="left"
          open={drawerOpen}
          onClose={handleDrawerToggle}
        >
          <Box sx={{ padding: 2, textAlign: 'center' }}>
            <img src="/Images/Ether.svg" alt="Drawer Logo" style={{ width: '50%', marginBottom: '16px' }} />
          </Box>
          <List sx={{ width: 250 }}>
            <ListItem button onClick={() => setOpenDropdown({ build: !openDropdown.build })}>
              <ListItemText primary="Build" />
              {openDropdown.build ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={openDropdown.build} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button sx={{ pl: 4 }}>
                  <ListItemText primary="Option 1" />
                </ListItem>
                <ListItem button sx={{ pl: 4 }}>
                  <ListItemText primary="Option 2" />
                </ListItem>
              </List>
            </Collapse>

            <ListItem button onClick={() => setOpenDropdown({ community: !openDropdown.community })}>
              <ListItemText primary="Community" />
              {openDropdown.community ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={openDropdown.community} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button sx={{ pl: 4 }}>
                  <ListItemText primary="Option 1" />
                </ListItem>
                <ListItem button sx={{ pl: 4 }}>
                  <ListItemText primary="Option 2" />
                </ListItem>
              </List>
            </Collapse>

            <ListItem button onClick={() => setOpenDropdown({ resources: !openDropdown.resources })}>
              <ListItemText primary="Resources" />
              {openDropdown.resources ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={openDropdown.resources} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button sx={{ pl: 4 }}>
                  <ListItemText primary="Option 1" />
                </ListItem>
                <ListItem button sx={{ pl: 4 }}>
                  <ListItemText primary="Option 2" />
                </ListItem>
              </List>
            </Collapse>

            <ListItem button onClick={() => setOpenDropdown({ product: !openDropdown.product })}>
              <ListItemText primary="Product" />
              {openDropdown.product ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={openDropdown.product} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button sx={{ pl: 4 }}>
                  <ListItemText primary="Option 1" />
                </ListItem>
                <ListItem button sx={{ pl: 4 }}>
                  <ListItemText primary="Option 2" />
                </ListItem>
              </List>
            </Collapse>
          </List>
        </Drawer>
      </AppBar> </div>
  );
}

export default Navbar;
