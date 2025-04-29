import { SurveyTemplate } from '../data/interfaces/survey_template';
import SurveyTemplateRepository from '../data/repositories/survey_template_repository';

const getTemplates = async () => {
  return SurveyTemplateRepository.getTemplates();
};

const findTemplateById = async (id: string) => {
  return SurveyTemplateRepository.findTemplateById(id);
};

const createTemplate = async (template: SurveyTemplate, categoryId: string) => {
  return SurveyTemplateRepository.createTemplate(template, categoryId);
};

const updateTemplate = async (template: SurveyTemplate) => {
  return SurveyTemplateRepository.updateTemplate(template);
};

export const SurveyTemplateController = {
  getTemplates,
  createTemplate,
  findTemplateById,
  updateTemplate,
};

export default SurveyTemplateController;
