import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider, createTheme } from '@mui/material';
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import Products from './Components/Products';


const router = createBrowserRouter([
  {
    path:"/",
    element: <App/>
  },
  {
    path:"/products",
    element: <Products />
  }
])

const theme = createTheme({
  palette: {
    primary: {
      main: "#06594f"
    },
    secondary: {
      main: "#6A6861"
    },
  },
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
