import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './views/Login';
import Movies from './views/Movies';
import Profile from './views/Profile';
import Register from './views/Register';
import UpdateProfile from './views/UpdateProfile';
import MovieDetails from './views/MovieDetails';
import './App.css';

function App() {
  return (
    <>
    <Router>
        <Routes>
          {/* <Route exact path="/" element={ <Homepage /> }/> */}
          <Route exact path="/movies" element={ <Movies /> }/>
          <Route exact path="/movies/:id" element={ <MovieDetails /> }/>
          <Route exact path="/profile" element={ <Profile /> }/>
          <Route exact path="/update-profile" element={ <UpdateProfile /> }/>
          <Route path="/register" element={ <Register /> } />
          <Route path="/login" element={ <Login /> } />
        </Routes>
      </Router>
    </>
  );
}

export default App;