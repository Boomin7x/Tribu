import { SurveyTemplate } from './survey_template';
export interface TemplateCategory {
    _id?: string;
    name: string;
    description: string;
    forms?: SurveyTemplate[];
}
