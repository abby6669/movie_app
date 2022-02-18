import axios from 'axios';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import {useAuth} from '../contexts/AuthContext'

function MovieCard(props) {
    const { id, image } = props;
    const { currentUser, token } = useAuth();

    function handleLike() {
            const headers = {'Authorization': `Bearer ${token}`}
            const URL_API_LIKES = 'http://localhost:8080/api/v1/likes'
            return axios.post(URL_API_LIKES, {itemId: id, userId: '123'}, {headers})
            .then(response => console.log(response.data))
            .catch(error => error.message);  
    }

    return (
        <Card className="movie-card d-inline-block">
            <Link to={`/movies/${id}`}>
                <Card.Img src={`https://image.tmdb.org/t/p/original/${image}`}/>
            </Link>
            <Card.Body>
                <Button variant="outline-primary" onClick={handleLike}>Like</Button>
            </Card.Body>
        </Card>
    )
}

export default MovieCard