import React from 'react';
import { Link } from 'react-router-dom'
import portfoliophotos from './portfoliophotos';

/* popout the browser and maximize to see more rows! -> */
function NewPortfolio() {
  
  return (
    <div className='container-fluid'>
      <ul className='row clients list-inline'>
        {portfoliophotos.map((photo) => (
          <li key={photo.src + 'src'} className='col-md-2 col-sm-2 col-6'>
            <Link to={photo.to}>
              <img
                className='img-fluid'
                src={photo.src}
                alt={photo.title}></img>
            </Link>

            <Link to={photo.to}>
              <p className='fs-19 text-center text-blue fw-300'>
                {photo.title}
              </p>
              <p className={'text-center text-gray mt-0'}>{photo.category}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );

  
}

export default NewPortfolio;
