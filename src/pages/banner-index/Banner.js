import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAward } from '@fortawesome/free-solid-svg-icons/faAward';
import { faHome } from '@fortawesome/free-solid-svg-icons/faHome';
import { faBuilding } from '@fortawesome/free-solid-svg-icons/faBuilding';
import { Button } from 'react-bootstrap';

export default function Banner() {
  return (
    <div id='services' className='container-fluid text-black'>
      <div className='d-flex justify-content-center'>
        <div className='col-lg-4 col-md-4 col-sm-12 col-xs-12 text-center card'>
          <h2>
            <FontAwesomeIcon icon={faAward} className='fa-2x mt-18 mb-1' />
            <br />
            42
          </h2>

          <p>
            AWARDS <br /> AND COUNTING
          </p>
          <a href='#portfolio'>
            <Button variant='outline-primary' size='lg' className='m-5'>
              ViEW AWARDS
            </Button>
          </a>
        </div>

        <div className='col-lg-4 col-md-4 col-sm-12 col-xs-12 text-center card'>
          <h2>
            <FontAwesomeIcon icon={faHome} className='fa-2x mt-18 mb-1' />
            <br />
            296
          </h2>
          <p>
            RESIDENTIAL PROJECTS <br /> TO DATE
          </p>
          <Link to='/residential'>
            <Button variant='outline-primary' size='lg' className='m-5'>
              MORE INFO
            </Button>
          </Link>
        </div>

        <div className='col-lg-4 col-md-4 col-sm-12 col-xs-12 text-center card'>
          <h2 className='countTo font-raleway' data-speed='1000'>
            <FontAwesomeIcon icon={faBuilding} className='fa-2x mt-18 mb-1' />
            <br />
            666
          </h2>
          <p>
            CORPORATE & COMMERCIAL <br /> PROJECTS TO DATE
          </p>

          <Link to='/commercial'>
            <Button variant='outline-primary' size='lg' className='m-5'>
              MORE INFO
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
