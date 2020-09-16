import React from 'react';
import { Link } from 'react-router-dom';
import ScrollToTopOnMount from '../generic/ScrolllToTop';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import ScrollUpButton from 'react-scroll-up-button';

export default function ResidentialPage() {
  return (
    <>
      <ScrollToTopOnMount />
      <ScrollUpButton />
      <section className='w-100p'>
        <div className='container'>
          <h2 className='fw-300 text-center mt-20 mb-40 fs-60'>
            RESIDENTIAL SERVICES
          </h2>

          <div className='col-12 mb-30 text-center'>
            <img
              className='box-shadow '
              src={require('../assets/RE_assets/construction.jpg')}
              alt='product'
            />
          </div>
          <hr />

          <h3 className='fw-300 mt-20'>
            Take Your Residential Project To New Heights
          </h3>

          <p className='fs-20 text-center text-blue'>
            Our team of experts will tailor the project to your needs.
            <br />
            Whether you are a new builder or an experienced one, you are in good
            hands.
          </p>

          <hr />

          <div className='row'>
            <div className='col-4'>
              <ul className='list-unstyled list-icons'>
                <li>
                  <FontAwesomeIcon
                    icon={faCheck}
                    className='fa fa-check text-blue'
                  />{' '}
                  Expert staff
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faCheck}
                    className='fa fa-check text-blue'
                  />
                  End-to-end customer service
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faCheck}
                    className='fa fa-check text-blue'
                  />
                  Concierge service
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faCheck}
                    className='fa fa-check text-blue'
                  />
                  Proven technologies
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faCheck}
                    className='fa fa-check text-blue'
                  />
                  On time guarantee
                </li>
              </ul>
              <div className='text-center'>
                <Link to='/quote'>
                  <Button className='btn btn-primary hover-shadow box-shadow'>
                    GET A QUOTE
                  </Button>
                </Link>
              </div>

              <div className='mt-60 text-center'>
                <p>Average Satisfaction Rating:</p>
                <div className='text-blue'>
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                </div>
                <div className='text-right mb-30 mt-30'>
                  <p>
                    <em>
                      "Rocket Elevators are on top of their game with their
                      industry leading innovations, customer service and
                      expertise.""
                    </em>
                  </p>
                  <img
                    src={require('../assets/RE_assets/Etoday.png')}
                    alt='elevator today'
                    width='250'
                  />
                </div>
              </div>
            </div>
            <div className='col-8'>
              <img
                className='box-shadow '
                src={require('../assets/RE_assets/bestdesign.jpeg')}
                alt='product'
              />
            </div>
          </div>
        </div>

        <hr />

        <div class='row text-center mt-60'>
          <div class='col-12'>
            <img
              class='box-shadow '
              src={require('../assets/RE_assets/AdobeStock_72034307.jpeg')}
              alt='product'
            />
            <p className='mt-10'>
              <bold>A Recent Project</bold>
            </p>
          </div>
        </div>

        <hr />

        <div className='col-12 text-center mt-30 mb-60'>
          <img
            src={require('../assets/RE_assets/R2.png')}
            alt='logo'
            height='150'></img>
        </div>

        <div class='col-12  mt-30 text-center'>
          <h6 class='fw-300 mt-20 mb-60'>
            We do all the heavy lifting so you don't have to
          </h6>

          <p class='text-center'>
            <bold>
              Our team can take your project from an idea to reality in record
              time. <br />
              Our cummulative experience is unsurpassed in the industry. <br />{' '}
              From small apartment buildings to high-rises, our talented staff
              will handle everything for you.
            </bold>
          </p>

          <hr />

          <div class='text-center p-10 mt-20 mb-20'>
            <div>
              <h1 className='text-blue fw-300 fs-60'>
                Elevate Your Project Now!
              </h1>

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
