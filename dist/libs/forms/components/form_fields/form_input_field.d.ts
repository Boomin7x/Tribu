import { Control, FieldValues } from 'react-hook-form';
import { TextInputInterface } from '../../interfaces';
interface FormInputFieldInterface extends TextInputInterface {
    control?: Control<FieldValues> | any;
}
export declare const FormInputField: (props: FormInputFieldInterface) => import("react/jsx-runtime").JSX.Element;
export default FormInputField;
