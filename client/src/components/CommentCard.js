// import axios from 'axios';
// import { Form, Button } from 'react-bootstrap';
// import { Link, useNavigate } from 'react-router-dom'
// import {useAuth} from '../contexts/AuthContext'

// function CommentCard(props) {
//   const { currentUser, token } = useAuth();
//   const navigate = useNavigate();

//     function handleComment() {
//           const headers = {'Authorization': `Bearer ${token}`}
//           const URL_API_COMMENTS = 'http://localhost:8080/api/v1/comments'
//           const newCommentBody = {
//               itemId: id, 
//               userId: currentUser.id,
//               content: content
//           }
//           console.log(newCommentBody)
//           return axios.post(URL_API_COMMENTS, newCommentBody, {headers})
//           .then(() => navigate('/comments'))
//           .catch(error => error.message);  
//   }

//   return (
//       <> 
//         <h3 className="display-5 my-5 ms-5">Deja tu comentario:</h3>     
//         <Form className="ms-5 w-50 mb-5">
//           <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
//             <Form.Control as="textarea" rows={3} />
//           </Form.Group>
//           <Button onClick={handleLike}>Enviar comentario</Button>
//         </Form>
//     </>
//   )
// }

// export default CommentCard