import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { MAP_QUERY_KEY } from '../../_utils/enums';
import { roadsApi } from '../../_utils/services/roads_service';
import { IGetAllRoadParams } from '../../_utils/types/road_types';

const useGetAllroads = (params: IGetAllRoadParams) => {
  return useQuery({
    queryKey: [MAP_QUERY_KEY.GET_ALL_ROADS, params],
    queryFn: () => roadsApi.getAllroads(params),
  });
};

export default useGetAllroads;
