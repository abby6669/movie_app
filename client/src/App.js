import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Profile from './components/Profile';
import Carousel from './components/Carousel';

function App() {
  return (

    <>
    <Navbar />
    <Carousel />
    {/* <div>
      <header>
        <h1>Hola desde Movie App! 🍿</h1>
      </header>
    </div>   */}
    <Footer />
    {/* <Profile /> */}
    </>
  );
}

export default App;