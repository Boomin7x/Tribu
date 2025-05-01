import { TextDateInterface } from '../../index.ts';
import { Control, FieldValues } from 'react-hook-form';
interface FormDateFieldInterface extends TextDateInterface {
    control?: Control<FieldValues>;
}
export declare const FormDateField: (props: FormDateFieldInterface) => import("react/jsx-runtime").JSX.Element;
export default FormDateField;
