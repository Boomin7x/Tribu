import { useQuery } from '@tanstack/react-query';
import { MAP_QUERY_KEY } from '../../_utils/enums';
import { visibilityApi } from '../../_utils/services/visibility_service';
import { IGetVisibilityScoreParams } from '../../_utils/types/visibility_types';

export const useGetVisibility = (params: IGetVisibilityScoreParams) => {
  return useQuery({
    queryKey: [MAP_QUERY_KEY.GET_VISIBLE_SCORE, params],
    queryFn: () => visibilityApi.getVisibleScore(params),
  });
};
