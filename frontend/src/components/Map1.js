import React, { useEffect, useState } from 'react';
import Map, { NavigationControl, Marker } from 'react-map-gl';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import { Button } from 'react-bootstrap';
import { MdLocationOn,MdGpsFixed } from 'react-icons/md'; // Import the location icon from react-icons

function Map1({ isForm, Location, setLocation, editCollege }) {
  const handleMapClick = (event) => {
    setLocation(event.lngLat);
  };

  const [initialViewState, setInitialViewState] = useState({
    longitude: 72.5714,
    latitude: 23.0225,
    zoom: 10
  });

  useEffect(() => {
    if (Location && Location.lat && Location.lng) {
      setInitialViewState({
        longitude: Location.lng,
        latitude: Location.lat,
        zoom: 10
      });
    }
  }, [Location]);

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lng: position.coords.longitude,
            lat: position.coords.latitude
          });
        },
        (error) => {
          console.error('Error getting current location:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  };

  return (
    <div className="App" style={isForm ? { width: '100%', height: '190px' } : { width: '100%', height: 'calc(100vh - 77px)' }}>
      <div style={{ backgroundColor: 'black' }}></div>
      {  <Button className='btn-sm ml-5 mb-3' onClick={getCurrentLocation}><MdGpsFixed /> Get Current Location</Button> }

      <div>
        <Map
          mapLib={maplibregl}
          onClick={handleMapClick}
          initialViewState={initialViewState}
          style={{ width: editCollege ? '100%' : '100%', height: editCollege ? '290px' : '190px' }}
          mapStyle="https://api.maptiler.com/maps/streets/style.json?key=0lmLYWUuo5P3H1nIbJqn"
        >
          <NavigationControl position="top-left" />
          {Location && Location.lat && Location.lng && <Marker longitude={Location.lng} latitude={Location.lat} color="black" />}
        </Map>
      </div>
    </div>
  );
}

export default Map1;
