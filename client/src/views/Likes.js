import { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import axios from 'axios';
import { Spinner } from 'react-bootstrap';
import Navegacion from '../components/Navbar';
import CarouselHeader from '../components/CarouselHeader'
import MovieCard from '../components/MovieCard';
import Footer from '../components/Footer';

function Likes(props) {
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(false)
    const { currentUser } = useAuth();

    // Mandando llamar API
    const getMovies = () => {
        setLoading(true)
        setTimeout(() => {
            const URL_TMDB = `http://localhost:8080/api/v1/likes/${currentUser.id}`;
            console.log('' + URL_TMDB)
            axios
            .get(URL_TMDB)
            .then(response => setMovies(response.data.likes))
            .then(() => setLoading(false))
            .catch(error => console.log(error));
        }, 3000)
    };

    useEffect(() => getMovies(), []);

    if (loading) {
        return (
            <>
                <Navegacion />
                    <div className="d-flex justify-content-center p-5">
                        <Spinner className="m-5" animation="border" variant="primary" role="status" size="lg" />
                    </div>
                <Footer />
            </>
        );
    }
    console.log(movies)
    console.log(currentUser)
    return (
        <>
        <Navegacion />

            <h2> Se encontraron {movies.length} peliculas </h2>
            <div className="movies-container">
                {movies && movies.map(movie => (
                    movie && <MovieCard
                        key={movie.id}
                        id={movie.itemId}
                        image={ movie.poster_path}
                        title={ movie.title }
                    />
                ))}
            </div>
        <Footer />
        </>
    );
}

export default Likes;
