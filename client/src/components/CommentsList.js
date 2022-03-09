// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Card } from 'react-bootstrap';
// import { useAuth } from '../contexts/AuthContext';

// function CommentsList(props) {
//   const [ currentCommentsList, setCurrentCommentsList ] = useState([]);
//   const { currentUser } = useAuth();

//   const fetchComments = () => {
//     const URL_API = `http://localhost:8080/api/v1/comments/${currentUser.id}`; 
//     console.log('' + URL_API)
//     axios
//     .get(URL_API)
//     .then(response => setCurrentCommentsList(response.data.comments))
//     .catch(error => console.log(error));
//   }

//   useEffect(() => {
//     fetchComments();
//   }, []);

//   return (
//     <div style={{ marginBottom: '10em' }}>
//       <h3 className="display-5 my-5 ms-5">Comentarios:</h3>
//       {
//         currentCommentsList.map(comment => (
//           <Card key={ comment.id } id={ comment.id }>
//             <Card.Body>
//               <Card.Title title={ comment.title } />
//               <Card.Text content={ comment.content } />
//             </Card.Body>
//           </Card>
//         ))
//       }
//     </div>
//   )
// }

// // const { id, title, content, createdAt } = props;
// // key={ comment.id } id={ comment.id } title={ comment.title } content={ comment.content } category={ comment.category } createdAt={ comment.createdAt }
// export default CommentsList