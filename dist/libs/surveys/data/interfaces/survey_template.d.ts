import { FormBloc, MetaData } from './bloc';
export interface SurveyTemplate {
    _id?: string;
    name: string;
    description: string;
    isTemplate: boolean;
    metaData: MetaData;
    blocs: FormBloc[];
}
