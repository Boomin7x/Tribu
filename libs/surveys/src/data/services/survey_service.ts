import { http } from '@tribu/utils';
import { CreateSurvey } from '../../survery_builder/data/interfaces/survey';

const getSurveys = async () => {
  return await http.run({
    url: 'api/tribu/v1/survey',
    method: 'GET',
  });
};
const findSurveyGroupById = async (id: string) => {
  return await http.run({
    url: `api/tribu/v1/survey/${id}`,
    method: 'GET',
  });
};

const createSurvey = async (survey: CreateSurvey) => {
  return await http.run({
    url: 'api/tribu/v1/survey',
    method: 'POST',
    body: survey,
  });
};

const updateSurvey = async (id: string, survey: CreateSurvey) => {
  return await http.run({
    url: `api/tribu/v1/survey/${id}`,
    method: 'PUT',
    body: survey,
  });
};

const deleteSurvey = async (id: string, survey: CreateSurvey) => {
  return await http.run({
    url: `api/tribu/v1/survey/${id}`,
    method: 'DELETE',
  });
};

const SurveyService = {
  findSurveyGroupById,
  createSurvey,
  getSurveys,
  updateSurvey,
  deleteSurvey,
};

export default SurveyService;
