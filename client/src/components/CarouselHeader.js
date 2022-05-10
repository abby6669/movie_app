import {Carousel} from 'react-bootstrap'
 import Portada from './images/Portada.png'
 import SegundaPortada from './images/SegundaPortada.png'
 import TerceraPortada from './images/TerceraPortada.png'
 
function CarouselHeader() {
  return (
    <div className="ContainerCarouselHeader">
    <Carousel className='mb-0'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Portada}
          alt="First slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={SegundaPortada}
          alt="Imagen de carrusel"
        />

        <Carousel.Caption>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={TerceraPortada}
          alt="Third slide"
        />

      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default CarouselHeader
