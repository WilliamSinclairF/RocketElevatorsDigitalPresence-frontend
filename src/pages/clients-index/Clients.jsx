import React from 'react'
import clientdata from './clientdata.js'

export default function Clients() {
  return (
    <section id='clients'>
      <div className='container'>
        <h2 className='text-blue text-md-center w-100p pb-45 fw-300'>
          Companies Powered By Rocket Elevators
        </h2>
        <ul className='row clients-dotted list-inline'>
          {clientdata.map((client) => 
            
            <li key={client.src+1}className='col-md-2 col-sm-2 col-6'>
                     <img
                       className='img-fluid'
                       src={client.src}
                       alt='client'
                     />
                  </li>
          )
          }
        </ul>
        <h1 className='text-md-center w-100p fw-300'>And Many More...</h1>
      </div>
    </section>
  );
}