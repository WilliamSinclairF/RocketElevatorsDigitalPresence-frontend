import React from 'react';
import IndexPortfolio from './IndexPortfolio';




export default function PortfolioContainer() {
  return (
    <>
      <div className='container pt-30'>
        <h2 className='text-blue text-center fw-300 mb-30 fs-32 mt-30'>
          Our Recent Achievements & Projects
        </h2>
      </div>
      <section id='portfolio' className="pt-30">
        <IndexPortfolio />
      </section>
    </>
  );
}
