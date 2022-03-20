import { Link } from "react-router-dom";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

const NotFound = () => {
  return (
    <Container sx={{textAlign:"center", mt: "60px"}}>
      <Link to="/movies">
        <Button variant="contained" sx={{width: "300px", height: "120px", fontSize: "35px"}}>GO BACK</Button>
      </Link>
    </Container>
  );
};

export default NotFound;
