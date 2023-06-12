import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router} from 'react-router-dom';
import {InforProvider} from './components/Context'
import {InforConSumer} from './components/Context'
import {AuthContextProvider} from "./context/Authcontext"
import dotenv from 'dotenv';


dotenv.config();

ReactDOM.render(

    
  <React.StrictMode>

<InforProvider>
    

    <Router>
      <AuthContextProvider>
      <App />
      </AuthContextProvider>
    
    </Router>
</InforProvider>
   
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
