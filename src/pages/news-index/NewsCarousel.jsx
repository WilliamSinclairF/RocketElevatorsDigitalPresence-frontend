import Carousel from 'react-multi-carousel';
import React from 'react'
import 'react-multi-carousel/lib/styles.css';
import newsdata from './newsdata'
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};



  const newsArticles = newsdata.map((article) => (
    <div className='card mr-10 ml-10 pr-20 pl-20 box-shadow'>
      <div className='pb-60'>
        <div className='mt-30'>
          <img
            className='img'
            
            height='350'
            src={article.src}
            alt={article.title}></img>
        </div>

        <p className='mt-5 fs-25'>
          <a href={article.href} target='_blank' rel='noopener noreferrer'>
            {article.title}
          </a>
        </p>
        <br />

    
          <p>{article.date}</p>
      
            <a
              className='mr-3'
              href='https://elevatortoday.com/'
              target='_blank'
              rel='noopener noreferrer'>
              <FontAwesomeIcon icon={faGlobe} />
              <span> ELEVATOR TODAY</span>
            </a>
     
          <div>
            <br />
            <div className="mb-30">
              <a
                href={article.href}
                target='_blank'
                rel='noopener noreferrer'
                className='btn btn-reveal btn-default b-0 btn-shadow-1'>
                <span className='text-blue fs-20'>Read Article</span>
              </a>
            </div>
          </div>
   
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
    {newsArticles}
  </Carousel>
);
}
