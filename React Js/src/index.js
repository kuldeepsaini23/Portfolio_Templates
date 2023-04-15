import React from 'react';
import ReactDOM from 'react-dom';
import {Toaster} from "react-hot-toast";
import App from './App';
import './index.css';


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
    <Toaster/>
  </React.StrictMode>
);