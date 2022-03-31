import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {AuthProvider} from './contexts/AuthContext'
import Login from './views/Login';
import Movies from './views/Movies';
import Profile from './views/Profile';
import Register from './views/Register';
import MovieDetails from './views/MovieDetails';
import UpdateProfile from './views/UpdateProfile';
import Likes from './views/Likes';
import './App.css';

function App() {
  return (
    <>
    <AuthProvider>
      <Router>
          <Routes>
            <Route exact path="/" element={ <Movies /> }/>
            <Route exact path="/likes" element={ <Likes /> }/>
            <Route exact path="/profile" element={ <Profile /> }/>
            <Route exact path="/movies/:id" element={ <MovieDetails /> }/>
            <Route exact path="/update-profile" element={ <UpdateProfile /> }/>
            <Route path="/register" element={ <Register /> } />
            <Route path="/login" element={ <Login /> } />
          </Routes>
      </Router>
    </AuthProvider>
    </>
  );
}

export default App;