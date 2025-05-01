import { CheckboxInterface } from '../../index.ts';
import { Control, FieldValues } from 'react-hook-form';
interface FormCheckBoxInterface extends CheckboxInterface {
    control?: Control<FieldValues>;
}
export declare const FormCheckBox: (item: FormCheckBoxInterface) => import("react/jsx-runtime").JSX.Element;
export default FormCheckBox;
