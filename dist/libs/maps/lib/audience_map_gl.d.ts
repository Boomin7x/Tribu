import { FC } from 'react';
import { GeocodeResponse } from '../hooks/use_geocode';
interface AudienceGLMapProps extends React.HTMLAttributes<HTMLDivElement> {
    onLocationUpdate: (location?: GeocodeResponse) => void;
}
export declare const AudienceGLMap: FC<AudienceGLMapProps>;
export default AudienceGLMap;
