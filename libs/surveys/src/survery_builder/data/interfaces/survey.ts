export interface CreateSurvey {
  name: string;
  description: string;
  status: string;
  audienceIds: string[];
  form: Form;
}

export interface Form {
  name: string;
  description: string;
  isTemplate: boolean;
  metaData: MetaData;
  blocs: Bloc[];
}

export interface Bloc {
  key: string;
  metaData: MetaData;
  questions: Question[];
}

export interface MetaData {
  key: string;
  index: number;
}

export interface Question {
  key: string;
  name: string;
  description: string;
  type: string;
  metaData: MetaData;
  branch: MetaData;
}
