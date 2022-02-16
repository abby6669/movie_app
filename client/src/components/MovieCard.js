import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function MovieCard(props) {
    const { id, poster_path, original_title } = props;

    return (
        <Card className="movie-card">
            <Link to={`/movies/${id}`}>
                <Card.Img src={`https://image.tmdb.org/t/p/original/${poster_path}`}/>
            </Link>
            <Card.Body className="d-flex flex-wrap" >
                <h3 className="text-center w-100">{original_title}</h3>
                <Button className="w-50" variant="outline-primary">Like</Button>
                <Button className="w-50" as={Link} to={`/movies/${id}`} variant="outline-primary">Detalles</Button>
            </Card.Body>
        </Card>
    )
}

export default MovieCard