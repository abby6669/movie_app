import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Login from './views/Login';
import Movies from './views/Movies';
import Profile from './views/Profile';
import Register from './views/Register';
import UpdateProfile from './views/UpdateProfile';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <>
    <Movies />

    {/* <Router>
        <Routes>
          <Route exact path="/" component={ Movies }/>
          <Route exact path="/profile" component={ Profile }/>
          <Route exact path="/update-profile" component={ UpdateProfile }/>
          <Route path="/register" component={ Register } />
          <Route path="/login" component={ Login } />
        </Routes>
      </Router> */}
    </>
  );
}

export default App;