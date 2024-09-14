import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


// // Cohere API Configuration

// const cohere = require("cohere-ai")
// const express = require("express")
// const cors = require("cors")
// require("dotenv").config()


// // Not sure if this is supposed to go here but still
// const app = express()

// app.use(cors())
// app.use(express.json())


// // initialize API key

// cohere.init(process.env.API_KEY)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// app.listen(8000)


