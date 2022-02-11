import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import Login from './views/Login';
// import Movies from './views/Movies';
// import Profile from './views/Profile';
// import Register from './views/Register';
// import UpdateProfile from './views/UpdateProfile';import 'bootstrap/dist/css/bootstrap.min.css'
// import { BrowserRouter, Routes, Route } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// ReactDOM.render(
//   <BrowserRouter>
//     <Routes>
//           <Route exact path="/" component={ Movies }/>
//           <Route exact path="/profile" component={ Profile }/>
//           <Route exact path="/update-profile" component={ UpdateProfile }/>
//           <Route path="/register" component={ Register } />
//           <Route path="/login" component={ Login } />
//     </Routes>
//   </BrowserRouter>,
//   document.getElementById('root')
// );