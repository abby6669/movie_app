import {Carousel} from 'react-bootstrap/'
 import Portada from './Images/Portada.png'
 import SegundaPortada from './Images/SegundaPortada.png'
 import TerceraPortada from './Images/TerceraPortada.png'
 import Venom from './Images/Venom.jpg'
 
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
