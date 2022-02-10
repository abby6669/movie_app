import '../App.css';
import ReactCardSlide from './ReactCardSlide'
import { useState, useEffect } from "react";
import axios from "axios";

function Carousel() {
    const [peliculas, setPeliculas] = useState([]);
    function randomNumber () {
        return (Math.floor(Math.random() * (400 - 1)) + 1);
    }
    console.log(randomNumber());
    useEffect(() => {
      axios
        .get(`https://api.themoviedb.org/3/movie/${randomNumber()}?api_key=9db0ffe9e24b0809deeeec190b241c4e`)
        .then((res) => {
          setPeliculas(res.data);
        })
    }, []);
    console.log(peliculas)

    const sliderClick = (slider)=>{
        alert("Sabías que...?");
    }

    const slides = [
        {image:`https://image.tmdb.org/t/p/w500/${peliculas.poster_path}`,title:`${peliculas.title}` ,description:"Popularidad" + `${peliculas.popularity}` + "Fecha:"+ `${peliculas.release_date}`,clickEvent:sliderClick},
        {image:`https://image.tmdb.org/t/p/w500/${peliculas.poster_path}`,title:`${peliculas.title}` ,description:"Popularidad" + `${peliculas.popularity}`,clickEvent:sliderClick},
        {image:`https://image.tmdb.org/t/p/w500/${peliculas.poster_path}`,title:`${peliculas.title}` ,description:"Popularidad" + `${peliculas.popularity}`,clickEvent:sliderClick},
        {image:`https://image.tmdb.org/t/p/w500/${peliculas.poster_path}`,title:`${peliculas.title}` ,description:"Popularidad" + `${peliculas.popularity}`,clickEvent:sliderClick},
        {image:`https://image.tmdb.org/t/p/w500/${peliculas.poster_path}`,title:`${peliculas.title}` ,description:"Popularidad" + `${peliculas.popularity}`,clickEvent:sliderClick},
        {image:`https://image.tmdb.org/t/p/w500/${peliculas.poster_path}`,title:`${peliculas.title}` ,description:"Popularidad" + `${peliculas.popularity}`,clickEvent:sliderClick},
        {image:`https://image.tmdb.org/t/p/w500/${peliculas.poster_path}`,title:`${peliculas.title}` ,description:"Popularidad" + `${peliculas.popularity}`,clickEvent:sliderClick},
        {image:`https://image.tmdb.org/t/p/w500/${peliculas.poster_path}`,title:`${peliculas.title}` ,description:"Popularidad" + `${peliculas.popularity}`,clickEvent:sliderClick},
    ]

    return (
        <div id="body">
        <ReactCardSlide slides={slides}/>
        </div>
    );
}

export default Carousel;