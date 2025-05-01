import { Survey } from '../../../data/interfaces/create_survey';
interface SurveyInfoState {
    surveyInfo?: Survey;
}
export declare const SurveySlice: import('@reduxjs/toolkit').Slice<SurveyInfoState, {
    setSurveyInfo: (state: import('immer').WritableDraft<SurveyInfoState>, action: {
        payload: any;
        type: string;
    }) => void;
}, "survey", "survey", import('@reduxjs/toolkit').SliceSelectors<SurveyInfoState>>;
export declare const setSurveyInfo: import('@reduxjs/toolkit').ActionCreatorWithPayload<any, "survey/setSurveyInfo">;
declare const _default: import('redux').Reducer<SurveyInfoState>;
export default _default;
