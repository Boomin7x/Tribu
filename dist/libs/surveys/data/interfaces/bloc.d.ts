import { AllFormInterfacesType } from '../../../../forms/src/index.ts';
export interface FormBloc {
    _id?: string;
    key: string;
    metaData: MetaData;
    questions: FormQuestion[];
    createdAt?: Date;
    __v?: number;
}
export interface MetaData {
    key: string;
    index: number;
}
export interface FormQuestion {
    _id?: string;
    key: string;
    name: string;
    description: string;
    type: string;
    metaData: AllFormInterfacesType;
    branch: MetaData;
    createdAt?: Date;
    __v?: number;
}
export interface Audiences {
    _id: string;
    name: string;
    description: string;
    blocs: string[];
    createdAt: Date;
    __v: number;
}
