import IconButton from "@mui/material/Button";
import styled from "@emotion/styled";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';


const MultiButton = () => {
    const ButtonWrapper = styled.div`
    justify-content: space-evenly;
    display: flex;
    margin-top: 10px;
    width: 100%;
      
    `;
    return(

  <ButtonWrapper>
    <IconButton>
      <FavoriteBorderIcon style={{fontSize : "3.5vw"}}/>
    </IconButton>
    <IconButton>
      <PlayArrowIcon style={{fontSize : "5vw"}}/>
    </IconButton>
  </ButtonWrapper>
    );
};

export default MultiButton;
