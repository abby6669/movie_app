import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Login from './components/Login';
import Navegacion from './components/Navbar';
import Footer from './components/Footer';
import { MovieGrid } from './components/MovieGrid';

function App() {
  return (

    <>
    <div>
      <header>
        <h1>Hola desde Movie App! 🍿</h1>
        <Navegacion />
        <br></br>
        <div>
          <h1>Movies</h1>
          <MovieGrid />
        </div>
        <br></br>
      </header>

      <footer>

        <Footer />
        
      </footer>
    </div>
    <Login/>
    </>

  );
}

export default App;