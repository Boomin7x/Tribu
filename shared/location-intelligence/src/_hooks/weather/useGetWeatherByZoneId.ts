import { useQuery } from '@tanstack/react-query';
import { MAP_QUERY_KEY } from '../../_utils/enums';
import { weatherApi } from '../../_utils/services/weather_service';

export const useGetWeatherByZoneId = (zoneId: string) => {
  return useQuery({
    queryKey: [MAP_QUERY_KEY.GET_WEATHER_BY_ZONE_ID, zoneId],
    queryFn: () => weatherApi.getWeatherByZoneId(zoneId),
  });
};
