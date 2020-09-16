import React from 'react';
import { Link } from 'react-router-dom';
import ScrollToTopOnMount from '../generic/ScrolllToTop';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import ScrollUpButton from 'react-scroll-up-button';

export default function CommercialPage() {
  return (
    <>
      <ScrollToTopOnMount />
      <ScrollUpButton />
      <section>
        <div className='container'>
          <div className='text-center'>
            <h2 className='fw-300 text-center mt-20 mb-40 fs-60'>
              COMMERCIAL SERVICES
            </h2>
          </div>

          <div className='col-12 text-center'>
            <img
              src={require('../assets/RE_assets/AdobeStock_170843598.jpeg')}
              alt='product'
            />
          </div>
          <hr />

          <h2 className='fw-300 mt-20 text-center text-blue'>
            The Business World Never Sleeps.
          </h2>

          <hr />

          <div className='text-center'>
            <p>
              We know how crucial it is to be on time and our reliable elevators
              are here to help. <br />
              <br />
              Thousands of executives around the world trust us to go from
              ground floor to the board room. <br />
              You should too.
            </p>
          </div>

          <div className='row'>
            <div className=' col-4 mt-80 pb'>
              <ul className='list-unstyled list-icons ml-auto mr-auto text-right'>
                <li>
                  <FontAwesomeIcon icon={faCheck} className='text-blue' /> Made
                  To Order
                </li>
                <li>
                  <FontAwesomeIcon icon={faCheck} className='text-blue' />{' '}
                  Premium materials
                </li>
                <li>
                  <FontAwesomeIcon icon={faCheck} className='text-blue' />
                  End-to-end customer service
                </li>
                <li>
                  <FontAwesomeIcon icon={faCheck} className='text-blue' />
                  Concierge service
                </li>
                <li>
                  <FontAwesomeIcon icon={faCheck} className='text-blue' />
                  Proven technologies
                </li>
                <li>
                  <FontAwesomeIcon icon={faCheck} className='text-blue' />
                  On time guarantee
                </li>
              </ul>
            </div>
            <div className='col-8 text-center mt-30'>
              <img src={require('../assets/RE_assets/executives.png')} alt="our executives"></img>

              <p>
                <bold>Our Senior Engineers</bold>
              </p>
            </div>
          </div>

          <hr />

          <div className='mt-60 text-center'>
            <h2 className='text-gray mb-30'>Average CEO Review:</h2>
            <div className='text-blue mb-30'>
              <FontAwesomeIcon icon={faStar} className='fs-30' />
              <FontAwesomeIcon icon={faStar} className='fs-30' />
              <FontAwesomeIcon icon={faStar} className='fs-30' />
              <FontAwesomeIcon icon={faStar} className='fs-30' />
              <FontAwesomeIcon icon={faStar} className='fs-30' />

              <p>
                "Rocket Elevators helps keeping our numerous offices by ensuring
                our employees <br />
                are on time consistently with their superior elevation
                technology." <br /> <br />
                <bold>- Kim Ki Nam, CEO of Samsung</bold>
              </p>
            </div>

            <div className='col-12 mb-60'>
              <img
                src={require('../assets/RE_assets/slider3.jpeg')}
                alt='employees'
                height='600'></img>
            </div>

            <hr />

            <div className='text-center'>
              <h2 className='text-blue mb-30 fw-300'>
                You need your employees there on time, every time
              </h2>
        
              <p className='fs-20 text-blue bold'>Get a quote today!</p>

              <Link to='/quote'>
                <Button size='lg'>
                GET A QUOTE
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
