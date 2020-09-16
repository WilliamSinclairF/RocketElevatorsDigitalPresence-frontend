import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import './CTA.css';

export default function IndexCTA() {
  return (
    <section className='bgImage'>
      <div className='text-center container-fluid'>
        <h1 className='text-white fs-60'>
          Elevated Above The Competition Since 1976
        </h1>
        <Link to='/quote'>
          <Button variant='outline-primary' size='lg' className='m-5'>
            <span className='fs-40 bold text-white'>GET A QUOTE</span>
          </Button>
        </Link>

        <a href='#contact'>
          <Button variant='outline-primary' size='lg' className='m-5'>
            <span className='fs-40 bold text-white'>CONTACT US</span>
          </Button>
        </a>
      </div>
    </section>
  );
}
