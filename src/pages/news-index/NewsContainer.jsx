import React from 'react'
import NewsCarousel from './NewsCarousel';
import './newsbackground.css'

export default function NewsContainer() {
  return (
    <section>
      <div className='container text-center'>
        <div>
          <h2 className='text-blue fw-300'>News From The Elevator Space</h2>
        </div>
        <NewsCarousel />
      </div>
    </section>
  );
}