import { TemplateCategory } from '../data/interfaces/template_category';
export declare const TemplateCategoryController: {
    getCategories: () => Promise<import('axios').AxiosResponse<TemplateCategory[], any>>;
    findTemplateCategoryById: (id: string) => Promise<import('axios').AxiosResponse<TemplateCategory, any>>;
    createTemplateCategory: (category: TemplateCategory) => Promise<import('axios').AxiosResponse<TemplateCategory, any>>;
    updateTemplateCategory: (category: TemplateCategory) => Promise<import('axios').AxiosResponse<TemplateCategory, any>>;
};
export default TemplateCategoryController;
