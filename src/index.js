import React from "react";
import ReactDOM from 'react-dom';

// ** Import Providers
import MaterialThemeProvider from "./config/theme";
import MuiSnackbarProvider from "./config/snackbar";
import NotificationProvider from "./config/notification";
import Web3Provider from "./config/web3";
import App from "./App"
import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <MuiSnackbarProvider>
      <NotificationProvider>
        <Web3Provider>
          <MaterialThemeProvider>
            <App />
          </MaterialThemeProvider>
        </Web3Provider>
      </NotificationProvider>
    </MuiSnackbarProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
