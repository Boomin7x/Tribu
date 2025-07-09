import { createSlice } from '@reduxjs/toolkit';
import { Survey } from '@tribu/surveys';
// import { Survey } from '../../../data/interfaces/create_survey';
interface SurveyInfoState {
  surveyInfo?: Survey;
}
const initialState: SurveyInfoState = {};
export const SurveySlice = createSlice({
  name: 'survey',
  initialState,
  reducers: {
    setSurveyInfo: (state, action) => {
      state.surveyInfo = action.payload;
    },
  },
});

export const { setSurveyInfo } = SurveySlice.actions;
export default SurveySlice.reducer;
