import { Control, FieldValues } from 'react-hook-form';
import { CheckboxInterface } from '../../interfaces';
interface FormMultiSelectInterface extends CheckboxInterface {
    control?: Control<FieldValues>;
}
export declare const FormMultiSelect: (props: FormMultiSelectInterface) => import("react/jsx-runtime").JSX.Element;
export default FormMultiSelect;
