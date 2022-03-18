import IconButton from "@mui/material/Button";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';


const MultiButton = () => {

    return(
<>
    <IconButton>
      <FavoriteBorderIcon style={{fontSize : "3.5vw"}}/>
    </IconButton>
    <IconButton>
      <PlayArrowIcon style={{fontSize : "5vw"}}/>
    </IconButton>
</>
    );
};

export default MultiButton;