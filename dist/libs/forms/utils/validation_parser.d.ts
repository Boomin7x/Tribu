import { AllFormInterfacesType } from '../types/all_form_types';
import * as yup from 'yup';
export declare const generateValidationSchema: (fields: AllFormInterfacesType[]) => yup.ObjectSchema<{}, yup.AnyObject, {}, "">;
export default generateValidationSchema;
