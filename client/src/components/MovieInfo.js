import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import axios from 'axios';

function Movie() {
    const [ currentMovie, setCurrentMovie ] = useState({});
    const { id } = useParams()

    async function fetchMovieDetails() {
        const URL_TMDB = `https://api.themoviedb.org/3/movie/${id}?api_key=27f10e1b2dd849a693903a39e07d8024&language=es`;
        const response = await axios.get(URL_TMDB)
        setCurrentMovie(response.data)
    }

    useEffect(() => {
        fetchMovieDetails();
    }, []);

    const { poster_path, original_title } = currentMovie;

    return (
        currentMovie &&
        <Card className="w-75 mx-auto mt-5" style={{ marginBottom: '10em' }}>
            <Link to={`/movies/${id}`}>
                <Card.Img src={`https://image.tmdb.org/t/p/original/${poster_path}`}/>
            </Link>
            <Card.Body>
                <Card.Title className="display-5 d-flex justify-content-between align-items-center">{ original_title }</Card.Title>
            </Card.Body>
        </Card>
        
    );
}

export default Movie;