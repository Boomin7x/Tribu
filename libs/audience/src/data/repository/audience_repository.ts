import AudienceService from '../services/audience_service';
import { CreateAudience } from '../interfaces/create_audience';
import { AxiosResponse } from 'axios';

const getAudiences = async () => {
  const response = await AudienceService.getAudiences();
  const dataResponse: AxiosResponse<CreateAudience[], any> = {
    ...response,
    ...{ data: response.data['data'] },
  };
  return dataResponse;
};
const findAudienceGroupById = async (id: string) => {
  const response = await AudienceService.findAudienceGroupById(id);
  const dataResponse: AxiosResponse<CreateAudience, any> = {
    ...response,
    ...{ data: response.data['data'] },
  };
  return dataResponse;
};

const createAudience = async (
  audience: CreateAudience
): Promise<AxiosResponse<CreateAudience, any>> => {
  const response = await AudienceService.createAudience(audience);
  const dataResponse: AxiosResponse<CreateAudience, any> = {
    ...response,
    ...{ data: response.data['data'] },
  };

  return dataResponse;
};

const updateAudience = async (
  id: string,
  audience: CreateAudience
): Promise<AxiosResponse<CreateAudience, any>> => {
  const response = await AudienceService.updateAudience(id, audience);
  const dataResponse: AxiosResponse<CreateAudience, any> = {
    ...response,
    ...{ data: response.data['data'] },
  };

  return dataResponse;
};

const AudienceRepository = {
  findAudienceGroupById,
  createAudience,
  updateAudience,
  getAudiences,
};

export default AudienceRepository;
