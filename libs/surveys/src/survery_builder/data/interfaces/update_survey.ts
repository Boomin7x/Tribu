import { Form } from './create_survey';

export interface UpdateSurvey {
  name?: string;
  _id?: string;
  description?: string;
  status?: string;
  audienceIds?: string[];
  form?: Form;
}
