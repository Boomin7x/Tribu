import { AxiosResponse } from 'axios';
import SurveyService from '../services/survey_service';
import { Survey } from '../interfaces/create_survey';

const getSurveys = async () => {
  const response = await SurveyService.getSurveys();
  const dataResponse: AxiosResponse<Survey[], any> = {
    ...response,
    ...{ data: response.data['data'] },
  };
  return dataResponse;
};

const findSurveyById = async (id: string) => {
  const response = await SurveyService.findSurveyById(id);
  const dataResponse: AxiosResponse<Survey, any> = {
    ...response,
    ...{ data: response.data['data'] },
  };
  return dataResponse;
};

const createSurvey = async (
  Survey: Survey
): Promise<AxiosResponse<Survey, any>> => {
  const response = await SurveyService.Survey(Survey);
  const dataResponse: AxiosResponse<Survey, any> = {
    ...response,
    ...{ data: response.data['data'] },
  };

  return dataResponse;
};

const updateSurvey = async (
  id: string,
  Survey: Survey
): Promise<AxiosResponse<Survey, any>> => {
  const response = await SurveyService.updateSurvey(id, Survey);
  const dataResponse: AxiosResponse<Survey, any> = {
    ...response,
    ...{ data: response.data['data'] },
  };

  return dataResponse;
};

const deleteSurvey = async (id: string): Promise<AxiosResponse<any, any>> => {
  const response = await SurveyService.deleteSurvey(id);
  return response;
};

const getSurveyTemplates = async () => {
  const response = await SurveyService.getSurveysTemplates();
  const dataResponse: AxiosResponse<Survey[], any> = {
    ...response,
    ...{ data: response.data['data'] },
  };
  return dataResponse;
};

const SurveyRepository = {
  findSurveyById,
  createSurvey,
  deleteSurvey,
  updateSurvey,
  getSurveys,
  getSurveyTemplates,
};

export default SurveyRepository;
