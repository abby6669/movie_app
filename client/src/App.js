import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Card from './components/Card';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { MovieGrid } from './components/MovieGrid';

function App() {
  return (

    <>
    <Navbar />
    <div>
      <header>
        <h1>Hola desde Movie App! 🍿</h1>
      </header>
    </div>
    <Card/>
    <MovieGrid />
    <Login/>
    <Footer />
    </>

  );
}

export default App;