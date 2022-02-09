import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navegacion from './components/Navbar';
import Footer from './components/Footer';
import { MovieGrid } from './components/MovieGrid';


function App() {
  return (

    <div>
      <header>
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



  );
}

export default App;
