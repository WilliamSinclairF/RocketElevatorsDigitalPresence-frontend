import React, {useEffect} from 'react';

import TopSlider from './slider-index/TopSlider';
import Banner from './banner-index/Banner';
import IndexCTA from './cta-index/IndexCTA';
import PortfolioContainer from './portfolio-index/PortfolioContainer'
import EmployeeSlider from './employee-index/EmployeeSlider';
import Clients from './clients-index/Clients'
import NewsContainer from './news-index/NewsContainer'
import ScrollUpButton from 'react-scroll-up-button';





function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}


export default function IndexPage() {
  return (
    <>
      <ScrollToTopOnMount />
      <ScrollUpButton />
      <div className='mb-30 fullwidthbanner-container roundedcorners'>
        <TopSlider />
      </div>
      <Banner />

      <IndexCTA />
      <PortfolioContainer />
      <section id='employees' className=''>
        <h2 className='text-blue text-center fw-300'>
          Proud Rocket Elevators Astronauts
        </h2>
        <EmployeeSlider />
      </section>
      <NewsContainer />
      <Clients />
    </>
  );
}
