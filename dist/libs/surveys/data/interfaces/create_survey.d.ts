import { Audiences, FormBloc, MetaData } from './bloc';
export interface Survey {
    _id?: string;
    audienceIds?: string[];
    name: string;
    description: string;
    status: string;
    form: Form;
    audience?: Audiences;
}
export interface Form {
    _id?: string;
    name: string;
    description: string;
    isTemplate: boolean;
    metaData: MetaData;
    blocs: FormBloc[];
}
