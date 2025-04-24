import { http } from '@tribu/utils';
import { CreateSurveyTemplate } from '../interfaces/survey_template';

const getTemplates = async () => {
  return await http.run({
    url: 'api/tribu/v1/survey',
    method: 'GET',
  });
};
const findTemplateById = async (id: string) => {
  return await http.run({
    url: `api/tribu/v1/survey/${id}`,
    method: 'GET',
  });
};

const createTemplate = async (survey: CreateSurveyTemplate) => {
  return await http.run({
    url: 'api/tribu/v1/survey',
    method: 'POST',
    body: survey,
  });
};

const updateTemplate = async (id: string, survey: CreateSurveyTemplate) => {
  return await http.run({
    url: `api/tribu/v1/survey/${id}`,
    method: 'PUT',
    body: survey,
  });
};

const deleteTemplate = async (id: string, survey: CreateSurveyTemplate) => {
  return await http.run({
    url: `api/tribu/v1/survey/${id}`,
    method: 'DELETE',
  });
};

const SurveyTemplateService = {
  findTemplateById,
  createTemplate,
  getTemplates,
  updateTemplate,
  deleteTemplate,
};

export default SurveyTemplateService;
