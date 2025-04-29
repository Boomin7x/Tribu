import { AxiosResponse } from 'axios';
import { TemplateCategory } from '../interfaces/template_category';
import TemplateCategoryService from '../services/template_category_service';

const getCategories = async () => {
  const response = await TemplateCategoryService.getCategories();
  const dataResponse: AxiosResponse<TemplateCategory[], any> = {
    ...response,
    ...{ data: response.data['data'] },
  };
  return dataResponse;
};

const findTemplateCategoryById = async (id: string) => {
  const response = await TemplateCategoryService.findTemplateCategoryById(id);
  const dataResponse: AxiosResponse<TemplateCategory, any> = {
    ...response,
    ...{ data: response.data['data'] },
  };
  return dataResponse;
};

const createTemplateCategory = async (category: TemplateCategory) => {
  const response = await TemplateCategoryService.createTemplateCategory(
    category
  );
  const dataResponse: AxiosResponse<TemplateCategory, any> = {
    ...response,
    ...{ data: response.data['data'] },
  };
  return dataResponse;
};

const updateTemplateCategory = async (category: TemplateCategory) => {
  const response = await TemplateCategoryService.updateTemplateCategory(
    category
  );
  const dataResponse: AxiosResponse<TemplateCategory, any> = {
    ...response,
    ...{ data: response.data['data'] },
  };
  return dataResponse;
};

export const TemplateCategoryRepository = {
  getCategories,
  findTemplateCategoryById,
  createTemplateCategory,
  updateTemplateCategory,
};

export default TemplateCategoryRepository;
