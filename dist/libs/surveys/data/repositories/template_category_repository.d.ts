import { AxiosResponse } from 'axios';
import { TemplateCategory } from '../interfaces/template_category';
export declare const TemplateCategoryRepository: {
    getCategories: () => Promise<AxiosResponse<TemplateCategory[], any>>;
    findTemplateCategoryById: (id: string) => Promise<AxiosResponse<TemplateCategory, any>>;
    createTemplateCategory: (category: TemplateCategory) => Promise<AxiosResponse<TemplateCategory, any>>;
    updateTemplateCategory: (category: TemplateCategory) => Promise<AxiosResponse<TemplateCategory, any>>;
};
export default TemplateCategoryRepository;
