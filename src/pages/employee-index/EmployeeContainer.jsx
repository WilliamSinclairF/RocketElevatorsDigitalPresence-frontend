import React from 'react'
import EmployeeSlider from './EmployeeSlider';
import './newsbackground.css'

export default function EmployeeContainer() {
  return (
    <section id='employees' className='mt-60'>
      <div className='container text-center'>
        <EmployeeSlider />
      </div>
    </section>
  );
}