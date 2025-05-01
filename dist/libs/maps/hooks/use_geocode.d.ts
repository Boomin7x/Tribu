import { Coordinates } from '../interfaces/coordinates';
export interface GeocodeResponse {
    coordinates: Coordinates;
    text: string;
    place_name: string;
}
declare const useGeocode: () => {
    geoData: GeocodeResponse | undefined;
    error: string | null;
    geocode: (address: string) => Promise<GeocodeResponse | undefined>;
    loading: boolean;
};
export default useGeocode;
