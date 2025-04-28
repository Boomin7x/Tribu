import { AxiosResponse } from 'axios';
import { CreateSurvey } from '../../survery_builder/data/interfaces/survey';
import SurveyService from '../services/survey_service';

const getSurveys = async () => {
  const response = await SurveyService.getSurveys();
  const dataResponse: AxiosResponse<CreateSurvey[], any> = {
    ...response,
    ...{ data: response.data['data'] },
  };
  return dataResponse;
};
const findSurveyGroupById = async (id: string) => {
  const response = await SurveyService.findSurveyGroupById(id);
  const dataResponse: AxiosResponse<CreateSurvey, any> = {
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
  Survey: CreateSurvey
): Promise<AxiosResponse<CreateSurvey, any>> => {
  const response = await SurveyService.updateSurvey(id, Survey);
  const dataResponse: AxiosResponse<CreateSurvey, any> = {
    ...response,
    ...{ data: response.data['data'] },
  };

  return dataResponse;
};

const SurveyRepository = {
  findSurveyGroupById,
  createSurvey,
  updateSurvey,
  getSurveys,
};

export default SurveyRepository;
