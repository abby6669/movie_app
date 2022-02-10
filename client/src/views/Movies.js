import { useState, useEffect } from 'react';
import axios from 'axios';
import { Spinner } from 'react-bootstrap';
import Navbar from '../components/Navbar';
import MovieCard from '../components/MovieCard';
import Footer from '../components/Footer';

function Movies(props) {
    const [movies, setMovies] = useState([])
        // Mandando llamar API
    const getMovies = () => {
        const URL_TMDB = 'https://api.themoviedb.org/3/movie/popular?api_key=27f10e1b2dd849a693903a39e07d8024&language=en-US&page=1';
        axios
        .get(URL_TMDB)
        .then(response => setMovies(response.data.results))
        .catch(error => console.log(error));
    };
    
    useEffect(() => getMovies(), []);

    if (movies.length === 0) {
        return <h2>Cargando peliculas...</h2>;
    }
    
    return (
    <>
        <Navbar />  
        <h2> Se encontraron {movies.length} peliculas </h2>
        <div className="movies-container">
            {movies.map(movie => {
                return (
                    <div className="display-flex">
                    <MovieCard 
                        image={ movie.poster_path} 
                    />
                    </div>
                );
            })}
        </div>
        <Footer />
    </>
    );
}

  
//     const renderMovies = () => {
//       if (movies.length === 0) {
//           return <div style= {{ margin: '1rem' }} >
//           <Spinner animation="border" variant="primary" role="status" /> 
//           <h4>Loading movies...</h4>
//           </div>
//       } 
//       return (
//           <>
//           <Navbar />
//           <div className="movies-container">
//               {movies.map(movie => {
//                   return (
//                       <div className="display-flex">
//                       <MovieCard 
//                           image={ movie.image} 
//                       />
//                       </div>
//                   );
//               })}
//           </div>
//           <Footer />
//           </>
//       );
//     } 
    
//   return (
//     <>
//     {
//         renderMovies()
//     }
//     </>
//     )
// }

export default Movies;