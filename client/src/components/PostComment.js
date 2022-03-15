import axios from 'axios';
import { useRef, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'


function CommentCard(props) {
  const { currentUser, token } = useAuth();
  const [loading, setLoading] = useState(false)
  const commentRef = useRef();
  const { id } = useParams();
  const navigate = useNavigate();

  function handleComment(e) {
    e.preventDefault();

    const headers = {'Authorization': `Bearer ${token}`}
    const URL_COMMENT = 'http://localhost:8080/api/v1/comments'
    const newCommentBody = {
        itemId: id,
        userId: currentUser.id,
        content: commentRef.current.value
    }
    console.log(newCommentBody)
    return axios
    .post(URL_COMMENT, newCommentBody, {headers})
    .then(() => setLoading(false))
    .then(navigate(`/movies/${id}`+1-1))
    .catch(error => error.message);
}

  return (
      <>
        <h3 className="display-5 my-5 ms-5">Deja tu comentario:</h3>
        <Form className="ms-5 w-50 mb-5" onSubmit={handleComment}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Control ref={commentRef} as="textarea" rows={3} />
          </Form.Group>
          <Button type="submit"  disabled={loading}>Enviar comentario</Button>
        </Form>
    </>
  )
}

export default CommentCard
