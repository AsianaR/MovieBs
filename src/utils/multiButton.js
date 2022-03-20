import Box from "@mui/system/Box";
import IconButton from "@mui/material/Button";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { textAlign } from "@mui/system";


const MultiButton = () => {

    return(
<Box sx={{textAlign: "center"}}>
    <IconButton>
      <FavoriteBorderIcon style={{fontSize : "2rem"}}/>
    </IconButton>
    <IconButton>
      <PlayArrowIcon style={{fontSize : "2.5rem"}}/>
    </IconButton>
</Box>
    );
};

export default MultiButton;