import SurveyRepository from '../data/repositories/survey_repository';
import { Survey } from '../data/interfaces/create_survey';

const getSurvey = async () => {
  return SurveyRepository.getSurveys();
};

const findSurveyById = async (id: string) => {
  return SurveyRepository.findSurveyById(id);
};

const createSurvey = async (survey: Survey) => {
  return SurveyRepository.createSurvey(survey);
};

const updateSurvey = async (id: string, survey: Survey) => {
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
};

export default SurveyController;
