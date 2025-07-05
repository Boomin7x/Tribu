import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { MAP_QUERY_KEY } from '../../_utils/enums';
import { roadsApi } from '../../_utils/services/roads_service';
import { IGetJunctionParams } from '../../_utils/types/road_types';

const useGetJunctions = (params: IGetJunctionParams) => {
  return useQuery({
    queryKey: [MAP_QUERY_KEY.GET_JUNCTIONS, params],
    queryFn: () => roadsApi.getJunctions(params),
  });
};

export default useGetJunctions;
