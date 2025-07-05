import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { weatherApi } from '../../_utils/services/weather_service';
import { MAP_QUERY_KEY } from '../../_utils/enums';
import { IGetCurrentWeatherByCoordsParams } from '../../_utils/types/weather_types';

const useGetCurrentWeatherByCoords = (
  params: IGetCurrentWeatherByCoordsParams
) => {
  return useQuery({
    queryKey: [MAP_QUERY_KEY.GET_CURRENT_WEATHER_BY_COORDS, params],
    queryFn: () => weatherApi.getCurrentWeatherByCoords(params),
  });
};

export default useGetCurrentWeatherByCoords;
