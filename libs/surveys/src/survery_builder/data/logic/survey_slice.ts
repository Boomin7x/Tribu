import { createSlice } from '@reduxjs/toolkit';
import { SurveyInfo } from '../interfaces/survey';

interface SurveyInfoState {
  surveyInfo?: SurveyInfo;
}
const initialState: SurveyInfoState = {};
export const Survey = createSlice({
  name: 'survey',
  initialState,
  reducers: {
    setSurveyInfo: (state, action) => {
      state.surveyInfo = action.payload;
    },
  },
});

export const { setSurveyInfo } = Survey.actions;
export default Survey.reducer;
