import { http } from '@tribu/utils';
import { Survey } from '../interfaces/create_survey';

const getSurveys = async () => {
  return await http.run({
    url: 'api/tribu/v1/survey',
    method: 'GET',
  });
};

const getSurveysTemplates = async () => {
  return await http.run({
    url: 'api/tribu/v1/form/template',
    method: 'GET',
  });
};
const findSurveyById = async (id: string) => {
  return await http.run({
    url: `api/tribu/v1/survey/${id}`,
    method: 'GET',
  });
};

const Survey = async (survey: Survey) => {
  if (survey.form.isTemplate) {
    return await saveSurveyTemplate(survey);
  }
  return await http.run({
    url: 'api/tribu/v1/survey',
    method: 'POST',
    body: survey,
  });
};

const saveSurveyTemplate = async (survey: Survey) => {
  return await http.run({
    url: 'api/tribu/v1/form/template',
    method: 'POST',
    body: survey,
  });
};

const updateSurvey = async (id: string, survey: Survey) => {
  return await http.run({
    url: `api/tribu/v1/survey/${id}`,
    method: 'PUT',
    body: survey,
  });
};

const deleteSurvey = async (id: string) => {
  return await http.run({
    url: `api/tribu/v1/survey/${id}`,
    method: 'DELETE',
  });
};

const SurveyService = {
  findSurveyById,
  Survey,
  getSurveys,
  updateSurvey,
  deleteSurvey,
  saveSurveyTemplate,
  getSurveysTemplates,
};

export default SurveyService;
