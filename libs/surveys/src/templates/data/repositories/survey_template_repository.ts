import { AxiosResponse } from 'axios';
import SurveyTemplateService from '../services/survey_template_service';
import { CreateSurveyTemplate } from '../interfaces/survey_template';

const getTemplates = async () => {
  const response = await SurveyTemplateService.getTemplates();
  const dataResponse: AxiosResponse<CreateSurveyTemplate[], any> = {
    ...response,
    ...{ data: response.data['data'] },
  };
  return dataResponse;
};
const findTemplateById = async (id: string) => {
  return SurveyTemplateService.findTemplateById(id);
};

const createTemplate = async (
  surveys: CreateSurveyTemplate
): Promise<AxiosResponse<CreateSurveyTemplate, any>> => {
  const response = await SurveyTemplateService.createTemplate(surveys);
  const dataResponse: AxiosResponse<CreateSurveyTemplate, any> = {
    ...response,
    ...{ data: response.data['data'] },
  };

  return dataResponse;
};

const SurveyTemplateRepository = {
  findTemplateById,
  createTemplate,
  getTemplates,
};

export default SurveyTemplateRepository;
