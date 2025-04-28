import { AllFormInterfacesType } from '@tribu/forms';

export interface SurveyInfo {
  _id: string;
  name: string;
  description: string;
  token: string;
  status: string;
  form: Form;
  audiences: SurveyDetails[];
  createdAt: Date;
  __v: number;
}

export interface SurveyDetails {
  _id: string;
  name: string;
  description: string;
  blocs: string[];
  createdAt: Date;
  __v: number;
}

export interface Form {
  _id: string;
  name: string;
  description: string;
  isTemplate: boolean;
  blocs: Bloc[];
  metaData: MetaData;
  createdAt: Date;
  __v: number;
}

export interface Bloc {
  _id: string;
  key: string;
  metaData: MetaData;
  questions: Question[];
  createdAt: Date;
  __v: number;
}

export interface MetaData {
  key: string;
  index: number;
}

export interface Question {
  _id: string;
  key: string;
  name: string;
  description: string;
  type: string;
  metaData: AllFormInterfacesType;
  branch: MetaData;
  createdAt: Date;
  __v: number;
}
