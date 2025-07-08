export * from './lib/map-config';
export * from './config/map-config';
import mapClient from './config/map-config'; // Imports mapClient as DEFAULT
export default mapClient; // Re-exports mapClient as DEFAULT from this index.ts
