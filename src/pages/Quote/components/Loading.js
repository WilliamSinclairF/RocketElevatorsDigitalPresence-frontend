import React from 'react';
import MoonLoader from 'react-spinners/MoonLoader';

const style = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
};

export default function Loading() {
  return (
    <div className='col-lg-4 col-md-4 col-sm-12 col-xs-12 justify-content-center'>
      <h3 className='text-blue'>Your Quote:</h3>
      <div style={style}>
        <MoonLoader size={100} color={'blue'} />
      </div>
    </div>
  );
}
