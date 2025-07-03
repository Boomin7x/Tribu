/* eslint-disable @nx/enforce-module-boundaries */
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { AppLoader } from '@tribu/ui';
import { AppConfig, useDebounce } from '@tribu/utils';
import useGeocode from '../../../../../../libs/maps/src/hooks/use_geocode';
import useGeolocation from '../../../../../../libs/maps/src/hooks/use_location';
import React, { useEffect, useState } from 'react';
import Map, { MapProvider, useMap } from 'react-map-gl/mapbox';
import { CiSearch } from 'react-icons/ci';
import { AppInput } from '@tribu/forms';
import { Icon } from '@iconify/react';

const LITargetsPage = () => {
  const mapBoxKey = AppConfig.VITE_MAP_BOX_KEY;
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const { location, setLocation } = useGeolocation(false);
  const [address, setAddress] = useState('douala');
  const { loading, geoData, error, geocode } = useGeocode();
  const [debouncedAddress] = useDebounce(address, 500);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(e.target.value);
    console.log('Address changed:', e.target.value);
  };

  useEffect(() => {
    if (debouncedAddress) {
      geocode(debouncedAddress);
    }
  }, [debouncedAddress]);

  useEffect(() => {
    if (geoData) {
      setLocation(geoData?.coordinates);
      //   props.onLocationUpdate(geoData);
    }
  }, [geoData]);

  return (
    <div className="w-full h-full ">
      <AppInput
        type="text"
        id=""
        onChange={handleChange}
        placeholder="Enter location"
        style={{
          background: 'white',
          width: '40%',
          position: 'absolute',
          top: '10px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 10,
          borderRadius: 'none',
        }}
        startAdornment={
          <Icon icon="ph:map-pin-light" className="mr-2 size-5" />
        }
      />
      <MapProvider>
        <div className="w-full  relative h-full">
          <Map
            onLoad={(e) => {
              e.type === 'load' && setIsLoaded(true);
              console.log(e);
            }}
            mapboxAccessToken={mapBoxKey}
            initialViewState={{
              longitude: geoData?.coordinates.longitude,
              latitude: geoData?.coordinates.latitude,
              zoom: 6,
            }}
            style={{
              position: 'absolute',
              inset: 0,
            }}
            mapStyle="mapbox://styles/mapbox/streets-v9"
          >
            <MapUpdater coordinates={geoData?.coordinates} />
          </Map>

          {!isLoaded || loading ? (
            <AppLoader className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
          ) : null}
        </div>
      </MapProvider>
    </div>
  );
};

const MapUpdater = ({ coordinates }: { coordinates: any }) => {
  const { current: map } = useMap();

  useEffect(() => {
    if (map && coordinates) {
      map.flyTo({
        center: [coordinates.longitude, coordinates.latitude],
        zoom: 8,
        essential: true,
      });
    }
  }, [map, coordinates]);

  return null;
};

export default React.memo(LITargetsPage);
