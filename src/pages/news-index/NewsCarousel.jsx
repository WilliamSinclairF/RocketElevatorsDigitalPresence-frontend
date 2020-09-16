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
    <div class='col-12'>
      <div class='mt-5'></div>
      <div className='pb-60'>
        <p class='mt-5'>
          <a href={article.href} target='_blank'
            rel="noopener noreferrer"
          >
            {article.title}
          </a>
        </p>
        <br />

        <ul class='blog-post-info list-inline p-30'>
          <li>{article.date}</li>
          <li>
            <a
              className='mr-3'
              href='https://elevatortoday.com/'
              target='_blank'
              rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGlobe} />
              <span> ELEVATOR TODAY</span>
            </a>
          </li>
          <div>
            <br />
            <a
              href={article.href}
              target='_blank'
              rel="noopener noreferrer"
              class='btn btn-reveal btn-default b-0 btn-shadow-1'>
              <span class='text-blue'>
                
                Read Article
              </span>
            </a>
          </div>
        </ul>
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
    containerClass='carousel-container'
    removeArrowOnDeviceType={['tablet', 'mobile']}
    dotListClass='custom-dot-list-style'
    itemClass='carousel-item-padding-40-px'>
    {newsArticles}
  </Carousel>
);
}
