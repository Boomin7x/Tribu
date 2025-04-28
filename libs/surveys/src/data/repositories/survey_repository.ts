import { AxiosResponse } from 'axios';
import { CreateSurvey } from '../../survery_builder/data/interfaces/create_survey';
import SurveyService from '../services/survey_service';
import { UpdateSurvey } from '../../survery_builder/data/interfaces/update_survey';
import { SurveyInfo } from '../../survery_builder/data/interfaces/survey';

const getSurveys = async () => {
  const response = await SurveyService.getSurveys();
  const dataResponse: AxiosResponse<SurveyInfo[], any> = {
    ...response,
    ...{ data: response.data['data'] },
  };
  return dataResponse;
};

const findSurveyById = async (id: string) => {
  const response = await SurveyService.findSurveyById(id);
  const dataResponse: AxiosResponse<SurveyInfo, any> = {
    ...response,
    ...{ data: response.data['data'] },
  };
  return dataResponse;
};

const createSurvey = async (
  Survey: CreateSurvey
): Promise<AxiosResponse<CreateSurvey, any>> => {
  const response = await SurveyService.createSurvey(Survey);
  const dataResponse: AxiosResponse<CreateSurvey, any> = {
    ...response,
    ...{ data: response.data['data'] },
  };

  return dataResponse;
};

const updateSurvey = async (
  id: string,
  Survey: UpdateSurvey
): Promise<AxiosResponse<CreateSurvey, any>> => {
  const response = await SurveyService.updateSurvey(id, Survey);
  const dataResponse: AxiosResponse<CreateSurvey, any> = {
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
  const dataResponse: AxiosResponse<CreateSurvey[], any> = {
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
