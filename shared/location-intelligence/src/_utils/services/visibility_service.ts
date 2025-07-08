// import mapClient from '../../../config/mapClient.config';
// eslint-disable-next-line @nx/enforce-module-boundaries
// import mapClient from '../../../../../apps/tribu/src/config/mapClient.config';
import mapClient from '@tribu/map-config';

import {
  IGetVisibilityScoreParams,
  ISetVisibilityPayload,
} from '../types/visibility_types';

export const visibilityApi = {
  getVisibleScore: async ({
    lat,
    lon,
    buffer_radius,
  }: IGetVisibilityScoreParams) => {
    const params = {
      ...(lat && { lat }),
      ...(lon && { lon }),
      ...(buffer_radius && { buffer_radius }),
    };
    const result = await mapClient('/visibility', {
      params,
    });
    return result?.data;
  },
  setRecommendZone: async (data: ISetVisibilityPayload) => {
    const result = await mapClient.post('/zones/recommend', data);
    return result?.data;
  },
};
