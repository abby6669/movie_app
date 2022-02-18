import axios from 'axios';
import { Card, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom'
import {useAuth} from '../contexts/AuthContext'

function MovieCard(props) {
    const { id, image, title } = props;
    const { currentUser, token } = useAuth();
    const navigate = useNavigate();

    function handleLike() {
            const headers = {'Authorization': `Bearer ${token}`}
            const URL_API_LIKES = 'http://localhost:8080/api/v1/likes'
            const newLikeBody = {
                itemId: id, 
                userId: currentUser.id,
                poster_path: image,
                title: title
            }
            console.log(newLikeBody)
            return axios.post(URL_API_LIKES, newLikeBody, {headers})
            .then(() => navigate('/likes'))
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