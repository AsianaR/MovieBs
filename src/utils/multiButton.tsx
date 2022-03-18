import IconButton from "@mui/material/Button";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';


const MultiButton = () => {
<<<<<<< HEAD
=======
    const ButtonWrapper = styled.div`
    justify-content: space-evenly;
    display: flex;
    margin-top: 10px;
    width: 100%;
      
    `;
    return(
>>>>>>> d281692a3805c33534003e0d6fcd5e2264f542d8

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