
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import { Global, css } from '@emotion/react'

ReactDOM.render(
  <React.StrictMode>
    <Global
      styles={css`
        *{
          margin: 0;
          padding: 0; 
        }

        body{
          background-color: #363525;
        }
        }
      `}/>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
