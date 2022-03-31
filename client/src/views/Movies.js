import { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import axios from 'axios';
import { Spinner } from 'react-bootstrap';
import Navegacion from '../components/Navbar';
import CarouselHeader from '../components/CarouselHeader'
import MovieCard from '../components/MovieCard';
import Footer from '../components/Footer';
import { Pagination } from 'react-bootstrap';

function Movies(props) {
    const [movies, setMovies] = useState([])
    const [pageNumber, setPageNumber] = useState(1)
    const [loading, setLoading] = useState(false)

    const handlePageNumber = (number) =>{
        setPageNumber(number)
        getMovies()
    } 

    const paginationItems = [];
    for (let number = 1; number <= 5; number++) {
        paginationItems.push(
          <Pagination.Item key={number} active={number === pageNumber} onClick={() => handlePageNumber(number)}>
            {number}
          </Pagination.Item>,
        );
    }

    // Mandando llamar API
    const getMovies = () => {
        setLoading(true)
        setTimeout(() => {
            const URL_TMDB = `https://api.themoviedb.org/3/movie/popular?api_key=27f10e1b2dd849a693903a39e07d8024&language=en-US&page=${pageNumber}`;
            axios
            .get(URL_TMDB)
            .then(response => setMovies(response.data.results))
            .then(() => setLoading(false))
            .catch(error => console.log(error));
        }, 500)
    };
    
    useEffect(() => getMovies(), []);

    if (loading) {
        return (
            <>
                <Navegacion />  
                <CarouselHeader />               
                    <div className="d-flex justify-content-center p-5">
                        <Spinner className="m-5" animation="border" variant="primary" role="status" size="lg" />
                    </div>
                    <div className="movies-pagination d-flex justify-content-center">
                        <Pagination>{paginationItems}</Pagination>
                    </div>
                <Footer />
            </>
        );
    }
    console.log(movies)
    return (
        <>
        <Navegacion />
        <CarouselHeader />
            <h2> Se encontraron {movies.length} peliculas </h2>
            <div className="movies-container">
                {movies && movies.map(movie => (
                    movie && <MovieCard
                        key={movie.id} 
                        id={movie.id}
                        image={ movie.poster_path} 
                        title={ movie.title }
                    />
                ))}
            </div>
            <div className="movies-pagination d-flex justify-content-center">
                <Pagination>{paginationItems}</Pagination>
            </div>
        <Footer />
        </> 
    );
}

export default Movies;