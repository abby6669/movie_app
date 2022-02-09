import { Card, Button } from 'react-bootstrap';

function Cards(props) {

    return (
        <Card style={{ width: '18rem', height: '4rem', margin: '2rem' }}>
            <Card.Img variant="top" src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/spiderman-poster-design-template-e9971a8ecf28f85ec6fa7f15730dbce5_screen.jpg?ts=1636993459" />
            <Card.Body>
                <Button variant="primary" style= {{ marginRight: '.5rem' }}>Like</Button>
                <Button variant="danger">Dislike</Button>
            </Card.Body>
        </Card>
    )
}

export default Cards