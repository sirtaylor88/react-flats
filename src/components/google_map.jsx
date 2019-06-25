import React from 'react';
import GoogleMapReact from 'google-map-react';

const Marker = () => <div className="marker" />;

const GoogleMap = ({ center, zoom }) => {
  return (
    <div className="map-container">
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyC_EacsjLb3DeZ0_NVqTrTuDhy8ISQN77s' }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        <Marker
          lat={center.lat}
          lng={center.lng}
        />
      </GoogleMapReact>
    </div>
  );
};

export default GoogleMap;
