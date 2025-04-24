import { AllFormInterfacesType } from '@tribu/forms';

export interface CreateAudience {
  _id?: string;
  name: string;
  description: string;
  isTemplate: boolean;
  metaData: CreateAudienceMetaData;
  blocs: Bloc[];
}

export interface Bloc {
  key: string;
  fields: Question[];
}

export interface BlocMetaData {
  title: string;
}

export interface Question {
  metaData: AllFormInterfacesType;
  key: string;
  name: string;
  description: string;
  type: string;
}

export interface CreateAudienceMetaData {}
