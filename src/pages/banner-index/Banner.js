import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAward } from '@fortawesome/free-solid-svg-icons/faAward';
import { faHome } from '@fortawesome/free-solid-svg-icons/faHome';
import { faBuilding } from '@fortawesome/free-solid-svg-icons/faBuilding';
import { Button } from 'react-bootstrap';

export default function Banner() {
  return (
    <div id='services' className='container text-black'>
      <div className='row'>
        <div className='container col-lg-4 col-md-4 col-sm-12 col-xs-12 text-center card'>
          <h4>
            <FontAwesomeIcon icon={faAward} className='fa-2x mt-18 mb-1' />
            <br />
            42
          </h4>

          <p>
            AWARDS <br /> AND COUNTING
          </p>
          <a href='#portfolio'>
            <Button variant='outline-primary' size='lg' className='mb-3'>
              ViEW AWARDS
            </Button>
          </a>
        </div>

        <div className='container col-lg-4 col-md-4 col-sm-12 col-xs-12 text-center card'>
          <h4>
            <FontAwesomeIcon icon={faHome} className='fa-2x mt-18 mb-1' />
            <br />
            296
          </h4>
          <p>
            RESIDENTIAL PROJECTS <br /> TO DATE
          </p>
          <Link to='/residential'>
            <Button variant='outline-primary' size='lg' className='mb-3'>
              MORE INFO
            </Button>
          </Link>
        </div>

        <div className='container col-lg-4 col-md-4 col-sm-12 col-xs-12 text-center card'>
          <h4 className='countTo font-raleway' data-speed='1000'>
            <FontAwesomeIcon icon={faBuilding} className='fa-2x mt-18 mb-1' />
            <br />
            666
          </h4>
          <p>
            CORPORATE & COMMERCIAL <br /> PROJECTS TO DATE
          </p>

          <Link to='/commercial'>
            <Button variant='outline-primary' size='lg' className='mb-3'>
              MORE INFO
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
