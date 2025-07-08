import { useMutation } from '@tanstack/react-query';
import { MAP_QUERY_KEY } from '../../_utils/enums';
import { visibilityApi } from '../../_utils/services/visibility_service';

export const useSetRecommendZone = () => {
  return useMutation({
    mutationKey: [MAP_QUERY_KEY.SET_RECOMMEND_ZONE],
    mutationFn: visibilityApi.setRecommendZone,
  });
};
