import { useState, Fragment, useEffect } from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import genreService from '../../services/GenreService';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from "@mui/material/IconButton";
import MenuIcon from '@mui/icons-material/Menu';
import Divider from '@mui/material/Divider';


type Anchor = 'top' | 'left' | 'bottom' | 'right';
const anchor = 'left';


export default function SideMenu() {
  const [data, setData] = useState();

  useEffect(() => {
    const request = async () => {
      const data = await genreService.getData();
      setData(data.genres);
    };
    request();
  }, []);

  const [state, setState] = useState({
    left: false
  });

  const list = (anchor: Anchor) => (
    <Box
        sx={{minWidth: 220}}
    > 
      <List>
        {data.map((text, index) => (
          <ListItem button key={text.name}>
            {console.log(text.name)}
            <ListItemText primary={text.name} />
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