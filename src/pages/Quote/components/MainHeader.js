import React from 'react';

export default function MainHeader(props) {
  return (
    <>
      <div className='container' id='headercontainer'>
        <div className='col-12-lg col-12-md col-6-sm col-6-xs text-center'>
          <img
            src={require('../../../assets/RE_assets/RE_logo.png')}
            alt='company logo'
            height='100'></img>

          <div className='text-center col-12 fw-300 mt-60'>
            <span className='text-blue text-center fs-50'>
              Ready to elevate{' '}
            </span>
            <span className='text-red text-center fs-50'>
              your next project?
            </span>
          </div>
        </div>

        <br />

        <br />
        <h4 className='text-gray fw-300 text-center'>
          Let's create your quote.
        </h4>
        <br />
      </div>
    </>
  );
}
