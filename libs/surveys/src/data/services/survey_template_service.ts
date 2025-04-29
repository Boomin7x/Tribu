import { http } from '@tribu/utils';
import { SurveyTemplate } from '../interfaces/survey_template';

const getTemplates = async () => {
  return await http.run({
    url: 'api/tribu/v1/form/template',
    method: 'GET',
  });
};
const findTemplateById = async (id: string) => {
  return await http.run({
    url: `api/tribu/v1/form/template/${id}`,
    method: 'GET',
  });
};

const createTemplate = async (survey: SurveyTemplate) => {
  return await http.run({
    url: 'api/tribu/v1/form/template',
    method: 'POST',
    body: survey,
  });
};

const updateTemplate = async (survey: SurveyTemplate) => {
  return await http.run({
    url: `api/tribu/v1/form/template/${survey._id}`,
    method: 'PUT',
    body: survey,
  });
};

const deleteTemplate = async (id: string) => {
  return await http.run({
    url: `api/tribu/v1/form/template/${id}`,
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
