import React from 'react';
import IndexPortfolio from './IndexPortfolio';




export default function PortfolioContainer() {
  return (
    <>
      <h2 className='text-blue text-center fw-300 mb-30 fs-2rem mt-30'>
        Our Recent Achievements & Projects
      </h2>
      <section id='portfolio'>
        <IndexPortfolio />
      </section>
    </>
  );
}
