import React from 'react';
import ReactDOM from 'react-dom';
import './styles/About.css';
import './styles/Navbar.css';
import './styles/Login.css';
import './styles/Home.css';
import './styles/Signup.css';
import './styles/Donation.css';
import './styles/Clock.css';
import './styles/Footer.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
