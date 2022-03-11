import { Card } from 'react-bootstrap';

function CommentCard(props) {
  const {userId, content, createdAt } = props;

  return (
    <Card className="w-75 mx-auto mt-5">
      <Card.Body>
        <Card.Text>{ userId }</Card.Text>
        <Card.Text>{ content }</Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted small">{ createdAt }</Card.Footer>
    </Card>
  )
}

export default CommentCard