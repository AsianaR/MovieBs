import { useState, Fragment } from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from "@mui/material/IconButton";
import MenuIcon from '@mui/icons-material/Menu';
import styled from '@emotion/styled'

type Anchor = 'top' | 'left' | 'bottom' | 'right';
const anchor = 'left';
const menuItems = ['All mail', 'Trash', 'Spam'];

export default function SideMenu() {

  const StyledSideMenu = styled.div`
    
  `;


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
    <StyledSideMenu>
        <Fragment key={anchor}>
          <IconButton onClick={() => setState({ ...state, left: true })}><MenuIcon style={{color: "#c9cacc"}}/></IconButton>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={() => setState({ ...state, left: false })}
            onOpen={() => setState({ ...state, left: true })}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </Fragment>
    </StyledSideMenu>
  );
}