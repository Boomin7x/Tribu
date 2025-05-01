import { FieldErrors, FieldValues } from 'react-hook-form';
import { ErrorMessage } from '../types/error.types';
declare const generateFormName: (label: string, id: string, name?: string) => string;
declare const getErrorMessage: (errors: FieldErrors<FieldValues>, label: string, id: string, name?: string) => ErrorMessage | null;
declare const styleFormFields: (props: any) => {};
declare const roundUpToMidnight: (date: Date) => Date;
export { generateFormName, getErrorMessage, styleFormFields, roundUpToMidnight, };
