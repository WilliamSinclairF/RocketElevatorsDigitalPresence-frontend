import Carousel from 'react-multi-carousel';
import React from 'react';
import 'react-multi-carousel/lib/styles.css';
import content from './content';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const style = {
  backgroundSize: 'center',
borderRadius: 30}

const EmployeeSlides = content.map((employee) => (
  <div className='mr-10 ml-10 pr-20 pl-20 text-center mt-30'>
    <div className='container'>
      <div>
        <img
          className='img-fluid h-500 box-shadow'
          src={employee.image}
          alt={employee.title}></img>
      </div>
      <p className="fw-300">{employee.description}</p>
      <p className='text-blue'>{employee.title}</p>
    </div>
  </div>
));

export default function NewsCarousel() {
  return (


    <Carousel
      swipeable={true}
      draggable={true}
      showDots={true}
      responsive={responsive}
      ssr={true}
      infinite={true}
      autoPlaySpeed={20}
      keyBoardControl={true}
      customTransition='all .5'
      transitionDuration={500}
      containerclassName='carousel-container'
      removeArrowOnDeviceType={['tablet', 'mobile']}
      dotListclassName='custom-dot-list-style'
      itemclassName='carousel-item-padding-40-px'>
      {EmployeeSlides}
    </Carousel>
  );
}
