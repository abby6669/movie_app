import { Form, Button } from 'react-bootstrap';

function CommentCard(props) {

  return (
      <> 
        <h3 className="display-5 my-5 ms-5">Deja tu comentario:</h3>     
        <Form className="ms-5 w-50">
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <Button>Enviar comentario</Button>
        </Form>
    </>
  )
}

export default CommentCard