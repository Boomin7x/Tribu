import { useState } from 'react';
import { Coordinates } from '../interfaces/coordinates';
import { GeoJSON } from '../interfaces/geo_json';
export interface GeocodeResponse {
  coordinates: Coordinates;
  text: string;
  place_name: string;
}

const useGeocode = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [geoData, setGeoData] = useState<GeocodeResponse | undefined>(
    undefined
  );
  const [error, setError] = useState<string | null>(null);

  const geocode = async (address: string) => {
    const env = import.meta.env;

    const apiKey = env.VITE_MAP_BOX_KEY; // Replace with your Mapbox API Key
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
      address
    )}.json?access_token=${apiKey}`;

    try {
      setLoading(true);
      const response = await fetch(url);
      const data: GeoJSON = await response.json();

      if (data.features && data.features.length > 0) {
        const { center, place_name, text } = data.features[0]; // 'center' contains the [longitude, latitude] array
        setGeoData({
          coordinates: { latitude: center[1], longitude: center[0] },
          place_name,
          text,
        });
        setError(null);
      } else {
        setError('Geocoding failed. Please try another address.');
      }
      return geoData;
    } catch (err) {
      setError('Error fetching geolocation data.');
    } finally {
      setLoading(false);
    }
  };

  return { geoData, error, geocode, loading };
};

export default useGeocode;
