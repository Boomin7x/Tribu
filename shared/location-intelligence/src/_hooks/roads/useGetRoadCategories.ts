import { useQuery } from '@tanstack/react-query';
import { MAP_QUERY_KEY } from '../../_utils/enums';
import { roadsApi } from '../../_utils/services/roads_service';

export const useGetRoadCategories = () => {
  return useQuery({
    queryKey: [MAP_QUERY_KEY.GET_ROAD_CATEGORIES],
    queryFn: () => roadsApi.getroadCategories(),
  });
};
