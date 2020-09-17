import React from 'react'
import NewsCarousel from './NewsCarousel';
import './newsbackground.css'

export default function NewsContainer() {
  return (
    <section id='news' className="news mt-60">
      <div>
        <h2 className='text-white text-center'>News From The Elevator Space</h2>
      </div>
      <div className='container-fluid text-center'>
        <NewsCarousel />
      </div>
    </section>
  );
}