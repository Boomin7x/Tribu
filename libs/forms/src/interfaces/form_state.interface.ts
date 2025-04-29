import { AllFormInterfacesType } from '../types/all_form_types';
import { TextInputInterface } from './input.interface';

export interface FormSection {
  id: string;
  index: number;
  formItems: AllFormInterfacesType[];
}

export interface AppFormState {
  selectedField: TextInputInterface | null;
  formTitle: string;
  formDescription: string;
  isPreview?: boolean;
  isTemplate?: boolean;
  activeSection: number;
  sections: FormSection[];
  audienceIds: string[];
}
