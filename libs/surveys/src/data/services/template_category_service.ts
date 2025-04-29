import { http } from '@tribu/utils';
import { TemplateCategory } from '../interfaces/template_category';

const getCategories = async () => {
  return await http.run({
    url: 'api/tribu/v1/form/category/template',
    method: 'GET',
  });
};

const findTemplateCategoryById = async (id: string) => {
  return await http.run({
    url: `api/tribu/v1/form/category/template/${id}`,
    method: 'GET',
  });
};

const createTemplateCategory = async (survey: TemplateCategory) => {
  return await http.run({
    url: 'api/tribu/v1/form/category/template',
    method: 'POST',
    body: survey,
  });
};

const updateTemplateCategory = async (survey: TemplateCategory) => {
  return await http.run({
    url: `api/tribu/v1/form/category/template/${survey._id}`,
    method: 'PUT',
    body: survey,
  });
};

const deleteTemplateCategory = async (id: string) => {
  return await http.run({
    url: `api/tribu/v1/form/category/template/${id}`,
    method: 'DELETE',
  });
};

const TemplateCategoryService = {
  getCategories,
  findTemplateCategoryById,
  createTemplateCategory,
  updateTemplateCategory,
  deleteTemplateCategory,
};

export default TemplateCategoryService;
