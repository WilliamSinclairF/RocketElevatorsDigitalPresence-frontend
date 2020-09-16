import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import './CTA.css';

export default function IndexCTA() {
  return (
    <section className='bgImage'>
      <div className="container">
        <div className="col-12 text-center">
          <h2 className='text-white'>
          Elevated Above The Competition Since 1976
        </h2>
        </div>
   
   
        <div className="d-flex justify-content-center">
          <Link to='/quote'>
            <div className='mt-4 ml-5 mr-5'>
              <Button variant='primary' size='lg'>
            GET A QUOTE
              </Button>
            </div>

          </Link>

          <div className='mt-4 ml-5 mr-5'>
            <a href='#contact'>
              <Button variant='secondary' size='lg'>
               CONTACT US
              </Button>
            </a>
          </div>
          </div>

        </div>
    </section>
  );
}
