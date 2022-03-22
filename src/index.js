import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import "normalize.css";


const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#4484CE',
    },
    secondary: {
      main: '#F9CF00',
    },
    text: {
      primary: '#ffffff',
      secondary: '#ffffff',
      disabled: '#D9D9D9',
    },
    error: {
      main: '#f19f4d',
    },
    background: {
      paper: '#4484CE',
    },
    divider: '#ffffff',
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
