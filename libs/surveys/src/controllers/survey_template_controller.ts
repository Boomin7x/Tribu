import { SurveyTemplate } from '../data/interfaces/survey_template';
import SurveyTemplateRepository from '../data/repositories/survey_template_repository';

const getTemplates = async () => {
  return SurveyTemplateRepository.getTemplates();
};

const findTemplateById = async (id: string) => {
  return SurveyTemplateRepository.findTemplateById(id);
};

const createTemplate = async (audience: SurveyTemplate) => {
  return SurveyTemplateRepository.createTemplate(audience);
};

const updateTemplate = async (audience: SurveyTemplate) => {
  return SurveyTemplateRepository.updateTemplate(audience);
};

export const SurveyTemplateController = {
  getTemplates,
  createTemplate,
  findTemplateById,
  updateTemplate,
};

export default SurveyTemplateController;
