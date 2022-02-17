import { Button, Card } from 'react-bootstrap';

function CommentCard(props) {
//   const { id, title, content, createdAt } = props;

  return (
      <>      
        <Card className="w-25 mt-2 mb-10">
        <Card.Body>
            <Card.Title className="d-flex justify-content-between align-items-center">{ 'title' } </Card.Title>
            <Card.Text>{ 'content' }</Card.Text>
            {/* <Button className="w-100" size="sm">Editar comentario</Button> */}
        </Card.Body>
        <Card.Footer className="text-muted small">{ 'createdAt' }</Card.Footer>
        </Card>
    </>
  )
}

export default CommentCard