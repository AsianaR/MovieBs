import { useState, Fragment, useEffect } from "react";
import useMovieService from "../../services/MovieService";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Divider from "@mui/material/Divider";

const anchor = "left";

export default function SideMenu() {
  const { loading, error, getGenres } = useMovieService();
  const [data, setData] = useState();

  useEffect(() => {
    getGenres().then((value) => setData(value));
  }, []);

  const [state, setState] = useState({
    left: false,
  });

  const list = (anchor) => (
    <Box
        sx={{minWidth: 220}}
    > 
      <List>
        {data?.genres.map(text => (
          <ListItem button key={text?.name}>
            <ListItemText primary={text?.name} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Fragment key={anchor}>
      <IconButton onClick={() => setState({ ...state, left: true })}>
        <MenuIcon style={{ color: "#c9cacc" }} />
      </IconButton>
      <SwipeableDrawer
        anchor={anchor}
        open={state[anchor]}
        onClose={() => setState({ ...state, left: false })}
        onOpen={() => setState({ ...state, left: true })}
      >
        <Divider />
        {list(anchor)}
      </SwipeableDrawer>
    </Fragment>
  );
}
