import React, { useState } from 'react';
import Map, { NavigationControl, Marker } from 'react-map-gl';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import { Button } from 'react-bootstrap';
// import './App.css';

function Map1({isForm,Location,setLocation}) {
  
  // const [location, setLocation] = useState(null);

  const handleMapClick = (event) => {
    
    // const { lngLat } = ;
    setLocation(event.lngLat);
      
  };

  return (
<div className="App" style={isForm ? { width: '100%',height:"190px" } : { width: '100%', height: 'calc(100vh - 77px)' }}>
        <div style={{backgroundColor:"black"}}>
        </div>
        {!isForm ? <Button>Save Location</Button> : null}

      <div>
        <Map
          mapLib={maplibregl}
          onClick={handleMapClick}
          initialViewState={{
            longitude: 72.5714,
            latitude: 23.0225,
            zoom: 10
          }}
          style={{ width: '100%', height: '190px' }}
          mapStyle="https://api.maptiler.com/maps/streets/style.json?key=0lmLYWUuo5P3H1nIbJqn">
          <NavigationControl position="top-left" />
          {Location && <Marker longitude={Location.lng} latitude={Location.lat} color='black'/>}
        </Map>
      </div>
    </div>
  );
}

export default Map1;
