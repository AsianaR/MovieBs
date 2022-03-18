import styled from "@emotion/styled";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import SideMenu from "./SideMenu";

const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 0;
  margin-left: auto;

  input{
    margin-right: 14px;
    color: #c9cacc;
    text-align: right;

  }
`;

export default function SearchAppBar() {
  return (
    <Box sx={{ flexGrow: 1,     
      position: "fixed",
      zIndex: 99,
      width:"100%",
      top: 0}}>
      <AppBar position="static">
        <Toolbar>
          <SideMenu />
          <SearchWrapper>
            <InputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
            <SearchIcon />
          </SearchWrapper>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
