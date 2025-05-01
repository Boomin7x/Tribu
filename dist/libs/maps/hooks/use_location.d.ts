import { Coordinates } from '../interfaces/coordinates';
export interface GeolocationError extends Error {
    message: string;
}
export declare const useGeolocation: (watch?: boolean) => {
    location: Coordinates | null;
    error: string | null;
    setLocation: import('react').Dispatch<import('react').SetStateAction<Coordinates | null>>;
};
export default useGeolocation;
