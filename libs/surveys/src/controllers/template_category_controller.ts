import { TemplateCategory } from '../data/interfaces/template_category';
import TemplateCategoryRepository from '../data/repositories/template_category_repository';

const getCategories = async () => {
  return TemplateCategoryRepository.getCategories();
};

const findTemplateCategoryById = async (id: string) => {
  return TemplateCategoryRepository.findTemplateCategoryById(id);
};

const createTemplateCategory = async (category: TemplateCategory) => {
  return TemplateCategoryRepository.createTemplateCategory(category);
};

const updateTemplateCategory = async (category: TemplateCategory) => {
  return TemplateCategoryRepository.updateTemplateCategory(category);
};

export const TemplateCategoryController = {
  getCategories,
  findTemplateCategoryById,
  createTemplateCategory,
  updateTemplateCategory,
};

export default TemplateCategoryController;
