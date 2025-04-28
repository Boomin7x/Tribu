import { AllFormInterfacesType } from '@tribu/forms';

export interface CreateSurveyTemplate {
  name: string;
  description: string;
  status: string;
  audienceIds: string[];
  form: FormTemplate;
  isTemplate: boolean;
}

export interface FormTemplate {
  name: string;
  description: string;
  metaData: TemplateMetaData;
  blocs: FormBloc[];
}

export interface FormBloc {
  key: string;
  metaData: TemplateMetaData;
  questions: FormQuestion[];
}

export interface TemplateMetaData {
  key: string;
  index: number;
}

export interface FormQuestion {
  key: string;
  name: string;
  description: string;
  type: string;
  metaData: AllFormInterfacesType;
  branch: TemplateMetaData;
}
