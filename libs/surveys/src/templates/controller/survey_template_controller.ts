import { CreateSurveyTemplate } from '../data/interfaces/survey_template';
import SurveyTemplateRepository from '../data/repositories/survey_template_repository';

const getTemplates = async () => {
  return SurveyTemplateRepository.getTemplates();
};

const findTemplateById = async (id: string) => {
  return SurveyTemplateRepository.findTemplateById(id);
};

const createTemplate = async (audience: CreateSurveyTemplate) => {
  return SurveyTemplateRepository.createTemplate(audience);
};

export const SurveyTemplateController = {
  getTemplates,
  createTemplate,
  findTemplateById,
};

export default SurveyTemplateController;
