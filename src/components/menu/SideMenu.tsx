import { useState, Fragment } from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from "@mui/material/IconButton";
import MenuIcon from '@mui/icons-material/Menu';
import Divider from '@mui/material/Divider'

type Anchor = 'top' | 'left' | 'bottom' | 'right';
const anchor = 'left';
const menuItems = [
  'Action',
  'Crime',
  'Drama',
  'Comedy',
  'Horror',
  'Sci-Fi',
  'Fantasy',
  'War Drama'];

export default function SideMenu() {


  const [state, setState] = useState({
    left: false
  });

  const list = (anchor: Anchor) => (
    <Box
        sx={{minWidth: 220}}
    > 
      <List>
        {menuItems.map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
        <Fragment key={anchor}>
          <IconButton onClick={() => setState({ ...state, left: true })}><MenuIcon style={{color: "#c9cacc"}}/></IconButton>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={() => setState({ ...state, left: false })}
            onOpen={() => setState({ ...state, left: true })}
          >
            

            <Divider/>
            {list(anchor)}
          </SwipeableDrawer>
        </Fragment>
  );
}