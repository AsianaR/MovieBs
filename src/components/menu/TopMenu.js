import SideMenu from "./SideMenu";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import SearchIcon from "@mui/icons-material/Search";
import useMovieService from "../../services/MovieService";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import { useEffect, useState } from "react";
import MoviesList from "../MoviesList";
import { Link, useNavigate } from "react-router-dom";

const SearchWrapper = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled(IconButton)(({ theme }) => ({
  color: "#fff",
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledAutocomplete = styled(Autocomplete)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-root": {
    padding: theme.spacing(0, 1, 0, 1),
    // vertical padding + font sizLe from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "20ch",
      "&:focus": {
        width: "30ch",
      },
    },
  },
}));

export default function SearchAppBar() {
  const { loading, error, Search } = useMovieService();
  const [inputValue, setInputValue] = useState("A");
  const [data, setData] = useState([]);
  let navigate = useNavigate();

  const handleEnterClick = (e) => {
    if(e.code === "Enter"){
      navigate(`/find/${inputValue}`); 
      (navigate(0));
    } 
  };

  useEffect(() => {
    Search(inputValue).then((results) => setData(results));
  }, [inputValue]);

  return (
    <>
      <Box
        sx={{ flexGrow: 1, position: "fixed", width: "100%", zIndex: "999" }}
      >
        <AppBar position="static">
          <Toolbar>
            <SideMenu />
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            ></Typography>
            <SearchWrapper>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>

              <StyledAutocomplete
              
                freeSolo
                onKeyDown={e =>  handleEnterClick(e)}
                onInputChange={(e) => setInputValue(e.target.value)}
                id="free-solo-2-demo"
                disableClearable
                options={data?.map((option) => option.title)}
                renderInput={(params) => (
                  <TextField
                    color="secondary"
                    {...params}
                    InputProps={{
                      ...params.InputProps,
                      type: "search",
                    }}
                  />
                )}
              />
            </SearchWrapper>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}
