import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker';

// eslint-disable-next-line
const Map = (props: any) => {
  const getMapOptions = (maps: any) => {
    return {
      disableDefaultUI: true,
      mapTypeControl: true,
      streetViewControl: true,
      styles: [
        {
          featureType: 'poi',
          elementType: 'labels',
          stylers: [{ visibility: 'on' }],
        },
      ],
    };
  };
// eslint-disable-next-line
  const [center, setCenter] = useState({ lat: 45.45942, lng: -73.56727 });
  // eslint-disable-next-line
  const [zoom, setZoom] = useState(15);

  return (
    <div style={{ height: '50%', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyCneuv4_A4WuHUJl5jTQAuR4Wn13xZw96k' }}
        defaultCenter={center}
        defaultZoom={zoom}
        options={getMapOptions}>
        <Marker lat={45.45942} lng={-73.56727} name='Rocket Elevators' color='blue' />
      </GoogleMapReact>
    </div>
  );
};

export default Map;
