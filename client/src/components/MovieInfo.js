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
        console.log(response.data)
        setCurrentMovie(response.data)
    }

    // eslint-disable-next-line
    useEffect(() => fetchMovieDetails(), []);

    const { backdrop_path, original_title, overview, release_date, tagline } = currentMovie;

    return (
        currentMovie &&
        <Card className="w-75 mx-auto mb-5 border-0">
            <Link to={`/movies/${id}`}>
                <Card.Img alt="Movie poster" src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}/>
            </Link>
            <Card.Body>
                <Card.Title className="display-5">{ original_title }</Card.Title>
                <Card.Title className="lead fst-italic">{ tagline }</Card.Title>
                <Card.Text className="mx-auto mt-4"> Año de Lanzamiento: { release_date }</Card.Text>
                <Card.Text className="mx-auto mt-4"> Reseña: { overview }</Card.Text>
            </Card.Body>
        </Card>
        
    );
}

export default Movie;