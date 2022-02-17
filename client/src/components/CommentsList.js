// import { useState, useEffect } from 'react';
import CommentCard from './CommentCard';

function CommentsList() {
//   const [ currentCommentsList, setCurrentCommentsList ] = useState([]);

//   async function fetchComments() {
//     const data = await .posts.orderBy('createdAt', 'desc').get()
//     data.docs.forEach(doc => {
//       const commentElement = { id: doc.id, ...doc.data() };
//       setCurrentCommentList(prevState => [...prevState, commentElement]);
//     })
//   }

//   useEffect(() => {
//     fetchComments();
//     // eslint-disable-next-line
//   }, []);

  return (
    <div style={{ marginBottom: '10em' }}>
      <h3 className="display-5 my-5 ms-5">Comentarios:</h3>
      {
        // currentCommentsList.map(comment => (
          <CommentCard id={'001'} title={'Hola'} />
        // ))
      }
    </div>
  )
}

// const { id, title, content, createdAt } = props;

export default CommentsList

// key={ comment.id } id={ comment.id } title={ comment.title } content={ comment.content } category={ comment.category } createdAt={ comment.createdAt }
