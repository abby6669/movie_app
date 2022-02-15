import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function MovieCard(props) {
    const { image } = props;

    return (
        <Card className="movie-card">
            <Card.Img src={`https://image.tmdb.org/t/p/original/${image}`}/>
            <Card.Body>
                <Button variant="outline-primary">Like</Button>
                <Link style={{ fontSize: "14px" }} to="/individual-movie">Detalles</Link>
            </Card.Body>
        </Card>
    )
}

export default MovieCard