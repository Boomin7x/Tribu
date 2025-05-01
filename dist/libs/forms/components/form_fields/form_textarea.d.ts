import { Control, FieldValues } from 'react-hook-form';
import { TextAreaInterface } from '../../index.ts';
interface FormTextAreaInterface extends TextAreaInterface {
    control?: Control<FieldValues> | any;
}
export declare const FormTextArea: (props: FormTextAreaInterface) => import("react/jsx-runtime").JSX.Element;
export default FormTextArea;
