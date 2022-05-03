import React from 'react';
import ReactDOM, {createRoot} from 'react-dom/client';
import App from './components/App.jsx';

// const express = require('express');
// const app = express();
//
// app.use(express.static('public'));
//
// const PORT = process.env.PORT || 3000;
//
// app.listen(PORT, function() {
//   console.log("Server running on " + PORT )
// })

const root = createRoot(document.getElementById('root'))
root.render(<App />);
