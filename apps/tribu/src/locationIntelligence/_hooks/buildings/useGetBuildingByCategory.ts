import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { MAP_QUERY_KEY } from '../../_utils/enums';
import { buildingsApi } from '../../_utils/services/buildings_services';
import { IGetBuildingByCategoryParams } from '../../_utils/types/building_types';

const useGetBuildingByCategory = (params: IGetBuildingByCategoryParams) => {
  return useQuery({
    queryKey: [MAP_QUERY_KEY.GET_BUILDING_BY_CATEGORY, params],
    queryFn: () => buildingsApi.getBuildingbyCategory(params),
  });
};

export default useGetBuildingByCategory;
