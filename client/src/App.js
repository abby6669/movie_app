import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Card from './components/Card';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Profile from './components/Profile';


function App() {
  return (

    <>
    <Navbar />
    <div>
      <header>
        <h1>Hola desde Movie App! 🍿</h1>
      </header>
      <body class="body">

        <div>
        

        </div>

        

      </body>

      <footer>
        <Footer />
      </footer>
    </div>
    < Profile />
    
    </>

  );
}

export default App;