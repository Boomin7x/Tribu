import { useQuery } from '@tanstack/react-query';
import { MAP_QUERY_KEY } from '../../_utils/enums';
import { weatherApi } from '../../_utils/services/weather_service';
import { IGetCurrentWeatherByCoordsParams } from '../../_utils/types/weather_types';

export const useGetCurrentWeatherByCoords = (
  params: IGetCurrentWeatherByCoordsParams
) => {
  return useQuery({
    queryKey: [MAP_QUERY_KEY.GET_CURRENT_WEATHER_BY_COORDS, params],
    queryFn: () => weatherApi.getCurrentWeatherByCoords(params),
  });
};
