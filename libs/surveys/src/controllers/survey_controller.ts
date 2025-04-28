import SurveyRepository from '../data/repositories/survey_repository';
import { CreateSurvey } from '../survery_builder/data/interfaces/create_survey';
import { UpdateSurvey } from '../survery_builder/data/interfaces/update_survey';

const getSurvey = async () => {
  return SurveyRepository.getSurveys();
};

const getSurveysTemplates = async () => {
  return SurveyRepository.getSurveyTemplates();
};

const findSurveyById = async (id: string) => {
  return SurveyRepository.findSurveyById(id);
};

const createSurvey = async (survey: CreateSurvey) => {
  return SurveyRepository.createSurvey(survey);
};

const updateSurvey = async (id: string, survey: UpdateSurvey) => {
  return SurveyRepository.updateSurvey(id, survey);
};

const deleteSurvey = async (id: string) => {
  return SurveyRepository.deleteSurvey(id);
};

export const SurveyController = {
  getSurvey,
  deleteSurvey,
  createSurvey,
  findSurveyById,
  updateSurvey,
  getSurveysTemplates,
};

export default SurveyController;
