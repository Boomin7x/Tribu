import { AllFormInterfacesType } from '@tribu/forms';

export interface CreateSurvey {
  name: string;
  _id?: string;
  description: string;
  status: string;
  audienceIds: string[];
  form: Form;
}

export interface Form {
  name: string;
  description: string;
  _id?: string;
  isTemplate: boolean;
  metaData: MetaData;
  blocs: FormBloc[];
}

export interface FormBloc {
  key: string;
  metaData: MetaData;
  questions: FormQuestion[];
}

export interface MetaData {
  key: string;
  index: number;
}

export interface FormQuestion {
  key: string;
  name: string;
  description: string;
  type: string;
  metaData: AllFormInterfacesType;
  branch: MetaData;
}
