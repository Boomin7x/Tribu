import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { buildingsApi } from '../../_utils/services/buildings_services';
import { MAP_QUERY_KEY } from '../../_utils/enums';

const useGetBuildingCategories = () => {
  return useQuery({
    queryKey: [MAP_QUERY_KEY.GET_BUILDING_CATEGORIES],
    queryFn: () => buildingsApi.getBuildingCategories(),
  });
};

export default useGetBuildingCategories;
