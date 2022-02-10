import { Card, Button } from 'react-bootstrap';

function Cards(props) {
    const { image } = props;

    return (
        <Card className="movie-card">
            <Card.Img src={`https://image.tmdb.org/t/p/original/${image}`}/>
            <Card.Body>
                <Button variant="outline-primary">Like</Button>
            </Card.Body>
        </Card>
    )
}

export default Cards