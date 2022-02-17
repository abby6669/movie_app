import { Form, Button } from 'react-bootstrap';

function CommentCard(props) {
//   const { id, title, content, createdAt } = props;

  return (
      <>      
        <Form className="ms-5 w-50">
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Título</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Contenido</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <Button>Enviar comentario</Button>
        </Form>
    </>
  )
}

export default CommentCard