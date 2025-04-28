import SurveyRepository from '../data/repositories/survey_repository';
import { CreateSurvey } from '../survery_builder/data/interfaces/survey';

const getSurvey = async () => {
  return SurveyRepository.getSurveys();
};

const findSurveyGroupById = async (id: string) => {
  return SurveyRepository.findSurveyGroupById(id);
};

const createSurvey = async (Survey: CreateSurvey) => {
  return SurveyRepository.createSurvey(Survey);
};

const updateSurvey = async (id: string, Survey: CreateSurvey) => {
  return SurveyRepository.updateSurvey(id, Survey);
};

export const SurveyController = {
  getSurvey,
  createSurvey,
  findSurveyGroupById,
  updateSurvey,
};

export default SurveyController;
