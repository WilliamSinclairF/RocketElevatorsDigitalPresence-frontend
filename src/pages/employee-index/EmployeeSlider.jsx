import React from 'react';
import Slider from 'react-animated-slider';
import content from './content';
import 'react-animated-slider/build/horizontal.css';
import './employeestyle.css';




const EmployeeSlider = () => (
  <div className='container'>
    <div className='text-center employeecarholder'>
      <div className='text-center m-60'>
        <h2 className='text-blue fw-300'>Our Employees Make Us Great</h2>
      </div>

      <Slider className='slider-wrapper employee-slider' duration={3000}>
        {content.map((photo, index) => (
          <div
            key={index}
            className='slider-content employee-slider-content'
            style={{
              background: `url('${photo.image}')`,
            }}>
            <div className='inner employee-slider-inner'>
              <h1 className='fs-40 fw-300'>{photo.title}</h1>
              <p style={{ fontSize: 18 }} className='fw-300'>
                {photo.description}
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  </div>
);

export default EmployeeSlider;
