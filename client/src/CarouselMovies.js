import React from "react";
import Carousel from "react-elastic-carousel";
import {Card, Button} from 'react-bootstrap'
import "./CarouselStyles.css";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

function CarouselMovies() {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Carousel Películas</h1>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
      <div className="Itemcontainer">
        <Carousel breakPoints={breakPoints}>
          <div className="movie">
            <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src="holder.js/100px180" />
                  <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example
                  </Card.Text>
                  <Button variant="primary">Like</Button>
                  <Button variant="primary">Dislike</Button>
                </Card.Body>
            </Card>

      </div>
          <div className="movie">Pelicula 2</div>
          <div className="movie">Pelicula 3</div>
          <div className="movie">Pelicula 4</div>
          <div className="movie">Pelicula 5</div>
          <div className="movie">Pelicula 6</div>
          <div className="movie">Pelicula 7</div>
          <div className="movie">Pelicula 8</div>
        </Carousel>
      </div>
    </>
  );
}
export default CarouselMovies
