import { AxiosResponse } from 'axios';
import SurveyTemplateService from '../services/survey_template_service';
import { SurveyTemplate } from '../interfaces/survey_template';

const getTemplates = async () => {
  const response = await SurveyTemplateService.getTemplates();
  const dataResponse: AxiosResponse<SurveyTemplate[], any> = {
    ...response,
    ...{ data: response.data['data'] },
  };
  return dataResponse;
};
const findTemplateById = async (id: string) => {
  return SurveyTemplateService.findTemplateById(id);
};

const createTemplate = async (
  surveys: SurveyTemplate
): Promise<AxiosResponse<SurveyTemplate, any>> => {
  const response = await SurveyTemplateService.createTemplate(surveys);
  const dataResponse: AxiosResponse<SurveyTemplate, any> = {
    ...response,
    ...{ data: response.data['data'] },
  };

  return dataResponse;
};

const updateTemplate = async (
  surveys: SurveyTemplate
): Promise<AxiosResponse<SurveyTemplate, any>> => {
  const response = await SurveyTemplateService.updateTemplate(surveys);
  const dataResponse: AxiosResponse<SurveyTemplate, any> = {
    ...response,
    ...{ data: response.data['data'] },
  };

  return dataResponse;
};

const SurveyTemplateRepository = {
  findTemplateById,
  createTemplate,
  getTemplates,
  updateTemplate,
};

export default SurveyTemplateRepository;
