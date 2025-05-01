import { AxiosResponse } from 'axios';
import { Survey } from '../interfaces/create_survey';
declare const SurveyRepository: {
    findSurveyById: (id: string) => Promise<AxiosResponse<Survey, any>>;
    createSurvey: (Survey: Survey) => Promise<AxiosResponse<Survey, any>>;
    deleteSurvey: (id: string) => Promise<AxiosResponse<any, any>>;
    updateSurvey: (id: string, Survey: Survey) => Promise<AxiosResponse<Survey, any>>;
    getSurveys: () => Promise<AxiosResponse<Survey[], any>>;
    getSurveyTemplates: () => Promise<AxiosResponse<Survey[], any>>;
};
export default SurveyRepository;
