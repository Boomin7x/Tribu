import { useQuery } from '@tanstack/react-query';
import { MAP_QUERY_KEY } from '../../_utils/enums';
import { roadsApi } from '../../_utils/services/roads_service';
import { ICategoryroadsParams } from '../../_utils/types/road_types';

export const useGetCategoryRoads = (params: ICategoryroadsParams) => {
  return useQuery({
    queryKey: [MAP_QUERY_KEY.GET_CATEGORY_ROADS],
    queryFn: () => roadsApi.getCategoryrRoads(params),
  });
};
