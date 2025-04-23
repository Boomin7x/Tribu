import { FC, useEffect, useState } from 'react';
import { AppInput } from '@tribu/forms';
import { useDebounce } from '@tribu/utils';
import { AppLoader } from '@tribu/ui';
import Map, { MapProvider, useMap } from 'react-map-gl/mapbox';
import useGeolocation from '../hooks/use_location';
import useGeocode, { GeocodeResponse } from '../hooks/use_geocode';
import { CiSearch } from 'react-icons/ci';
import { AppConfig } from '@tribu/utils';
interface AudienceGLMapProps extends React.HTMLAttributes<HTMLDivElement> {
  onLocationUpdate: (location?: GeocodeResponse) => void;
}

export const AudienceGLMap: FC<AudienceGLMapProps> = (props) => {
  const env = AppConfig.VITE_MAP_BOX_KEY;
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const { location, setLocation } = useGeolocation(false);
  const [address, setAddress] = useState('');
  const { loading, geoData, error, geocode } = useGeocode();
  const debouncedAddress = useDebounce(address, 500);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(e.target.value);
  };

  useEffect(() => {
    if (debouncedAddress) {
      geocode(debouncedAddress);
    }
  }, [debouncedAddress]);

  useEffect(() => {
    if (geoData) {
      setLocation(geoData?.coordinates);
      props.onLocationUpdate(geoData);
    }
  }, [geoData]);

  return (
    <div {...props}>
      <AppInput
        type="text"
        id=""
        onChange={handleChange}
        placeholder="Search city"
        startAdornment={<CiSearch size={30} className="mr-2" />}
      />
      <MapProvider>
        <div className="w-full mt-2 relative h-[40vh]">
          <Map
            onLoad={(e) => {
              e.type === 'load' && setIsLoaded(true);
              console.log(e);
            }}
            mapboxAccessToken={env.VITE_MAP_BOX_KEY}
            initialViewState={{
              longitude: geoData?.coordinates.longitude,
              latitude: geoData?.coordinates.latitude,
              zoom: 6,
            }}
            style={{
              width: '100%',
              height: '40vh',
              borderRadius: '0.2rem',
              position: 'absolute',
              top: 0,
              left: 0,
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
export default AudienceGLMap;
