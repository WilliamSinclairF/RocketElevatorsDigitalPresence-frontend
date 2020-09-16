import React from 'react';

export default function MainHeader(props) {
  return (
    <>
      <div id='foreground'></div>

      <div className='container-fluid' id='headercontainer'>
        <div className='col-12-lg col-12-md col-6-sm col-6-xs text-center'>
          <img
            src={require('../../../assets/RE_assets/RE_logo.png')}
            alt='company logo'
            height='300'></img>

          <div className='text-center col-12 fw-300 mt-60 fs-60'>
            <span className='text-blue text-center'>
              Ready to elevate{' '}
              <span className='text-red text-center'>your next project?</span>
            </span>
          </div>
        </div>

        <br />

        <br />
        <h3 className='text-gray fw-300 text-center'>
          Let's create your quote.
        </h3>
        <br />
        <div id='midground'></div>
      </div>
    </>
  );
}
