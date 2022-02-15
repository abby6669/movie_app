import MovieCard from './MovieCard';
// import {Card} from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { Spinner } from 'react-bootstrap';
import { Pagination } from 'react-bootstrap';
import axios from 'axios';

function Movie() {

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
        }, 3000)
    };
    
    useEffect(() => getMovies(), []);

    if (loading) {
        return (
            <>
                <div className="d-flex justify-content-center p-5">
                    <Spinner className="m-5" animation="border" variant="primary" role="status" size="lg" />
                </div>
            </>
        );
    }

    return (
        <>
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
        </> 
    );
}

export default Movie;