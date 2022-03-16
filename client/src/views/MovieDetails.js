import { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import MovieInfo from '../components/MovieInfo'
import Footer from '../components/Footer';
import PostComment from '../components/PostComment'
import CommentsList from '../components/CommentsList'
import { useParams } from 'react-router-dom';

function IndividualMovie() {
  const [ currentCommentsList, setCurrentCommentsList ] = useState([]);
  const [loading, setLoading] = useState(false)
  const {id} = useParams();

  const fetchComments = () => {
    setLoading(true)
    const URL_API = `http://localhost:8080/api/v1/comments/${id}`;
    console.log('' + URL_API)
    axios
    .get(URL_API)
    .then(response => setCurrentCommentsList(response.data.comments))
    .then(() => setLoading(false))
    .catch(error => console.log(error));
  };

  return (
    <>
    <Navbar />
    <MovieInfo />
    <CommentsList fetchComments={fetchComments} comments={currentCommentsList} loading={loading}/>
    <PostComment fetchComments={fetchComments}/>
    <Footer />
    </>
  );
}

export default IndividualMovie;
