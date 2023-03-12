import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import barstool from '../images/barstool.png'
import smorgasbord from '../images/smorgasbord.png'
import weather from '../images/weather.png'
import workday from '../images/workday.png'
import quiz from '../images/quiz.png'

import { useRef } from "react";
import {
    useScroll,
    useTransform,
  } from "framer-motion";

function useParallax(value, distance) {
    return useTransform(value, [0, 1], [-distance, distance]);
  }


function IndividualIntervalsExample() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);
  return (
    <div className='parallax-effect' ref={ref}>

    <Carousel id='portfolio'>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src= {barstool}
          alt="First slide"
        />
        <h1> the barstool</h1>
        {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src= {smorgasbord}
          alt="Second slide"
        />
        {/* <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src= {weather}
          alt="Third slide"
        />
        {/* <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src= {workday}
          alt="Third slide"
        />
        {/* <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src= {quiz}
          alt="Third slide"
        />
        {/* <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> */}
      </Carousel.Item>
      
    </Carousel>
    </div>
  );
}

export default IndividualIntervalsExample;