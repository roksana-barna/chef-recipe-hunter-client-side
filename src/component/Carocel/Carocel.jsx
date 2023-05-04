import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import img1 from "../../assets/Tempura,_sashimi,_pickles,_ris_og_misosuppe_(6289116752).jpg"
import img2 from "../../assets/Sukiya_Jakarta_Niku_Ramen_Gyudon_Combo_1.jpg"
import img3 from "../../assets/800px-Osechi_001.jpg"


const Carocel = () => {

    return (
        <Container>
            <h1 className='text-danger text-center'>Japanese  Traditional cuisine</h1>
            <p className=' text-center'>apanese cuisine encompasses the regional and traditional foods of Japan</p>
             <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
            
        </Container>
    );
};

export default Carocel;