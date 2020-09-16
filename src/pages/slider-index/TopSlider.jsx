import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-animated-slider';
import Button from 'react-bootstrap/Button';
import content from './content';
import 'react-animated-slider/build/horizontal.css';
import './slide-animations.css';
import './styles.css';


const TopSlider = () => (
  <Slider className='slider-wrapper' duration={7000} autoplay={3000}>
    {content.map((photo, index) => (
      <div
        key={index}
        className='slider-content'
        style={{
          background: `url('${photo.image}') no-repeat center center`,
        }}>
        <div className='inner'>
          <h1>{photo.title}</h1>
          <p style={{ fontSize: 20 }}>{photo.description}</p>
          <Link to='/quote'>
            <Button style={{ margin: 15 }} size='lg' variant='primary'>
              {photo.button}
            </Button>
          </Link>
          {photo.id !== 's1' && (
            <Link to={photo.button2link}>
              <Button style={{ margin: 15 }} size='lg' variant='secondary'>
                {photo.button2}
              </Button>
            </Link>
          )}
        </div>
      </div>
    ))}
  </Slider>
);

export default TopSlider;
