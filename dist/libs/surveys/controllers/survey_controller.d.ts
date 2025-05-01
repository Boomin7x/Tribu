import { Survey } from '../data/interfaces/create_survey';
export declare const SurveyController: {
    getSurvey: () => Promise<import('axios').AxiosResponse<Survey[], any>>;
    deleteSurvey: (id: string) => Promise<import('axios').AxiosResponse<any, any>>;
    createSurvey: (survey: Survey) => Promise<import('axios').AxiosResponse<Survey, any>>;
    findSurveyById: (id: string) => Promise<import('axios').AxiosResponse<Survey, any>>;
    updateSurvey: (id: string, survey: Survey) => Promise<import('axios').AxiosResponse<Survey, any>>;
};
export default SurveyController;
