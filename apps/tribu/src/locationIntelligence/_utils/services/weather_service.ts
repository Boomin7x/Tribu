import mapClient from '../../../config/mapClient.config';
import { IGetCurrentWeatherByCoordsParams } from '../types/weather_types';

export const weatherApi = {
  getCurrentWeatherByCoords: async ({
    lat,
    lon,
    buffer_radius,
  }: IGetCurrentWeatherByCoordsParams) => {
    const params = {
      ...(lat && { lat }),
      ...(lon && { lon }),
      ...(buffer_radius && { buffer_radius }),
    };
    const result = await mapClient.get('/weather', {
      params,
    });
    return result?.data;
  },
  getWeatherByZoneId: async (zone_id: string) => {
    const result = await mapClient.get('/weather/' + zone_id);
    return result?.data;
  },
};
