import { http } from '@tribu/utils';
import { CreateAudience } from '../interfaces/create_audience';

const getAudiences = async () => {
  return await http.run({
    url: 'api/tribu/v1/audience',
    method: 'GET',
  });
};
const findAudienceGroupById = async (id: string) => {
  return await http.run({
    url: `api/tribu/v1/audience/${id}`,
    method: 'GET',
  });
};

const createAudience = async (audience: CreateAudience) => {
  return await http.run({
    url: 'api/tribu/v1/audience',
    method: 'POST',
    body: audience,
  });
};

const updateAudience = async (id: string, audience: CreateAudience) => {
  return await http.run({
    url: `api/tribu/v1/audience/${id}`,
    method: 'PUT',
    body: audience,
  });
};

const deleteAudience = async (id: string, audience: CreateAudience) => {
  return await http.run({
    url: `api/tribu/v1/audience/${id}`,
    method: 'DELETE',
  });
};

const addPost = async (data: any) => {
  return await http.run({
    url: 'https://jsonplaceholder.typicode.com/posts',
    method: 'POST',
    body: data,
  });
};
const AudienceService = {
  findAudienceGroupById,
  createAudience,
  addPost,
  getAudiences,
  updateAudience,
  deleteAudience,
};

export default AudienceService;
