import { useQuery } from '@tanstack/react-query';
import { MAP_QUERY_KEY } from '../../_utils/enums';
import { buildingsApi } from '../../_utils/services/buildings_services';
import { IGetAllBuildingsParams } from '../../_utils/types/building_types';

export const useGetAllBuildings = (params: IGetAllBuildingsParams) => {
  return useQuery({
    queryKey: [MAP_QUERY_KEY.GET_ALL_BUILDINGS, params],
    queryFn: () => buildingsApi.getAllBuildings(params),
  });
};
