import { Control, FieldValues } from 'react-hook-form';
import { RadioInterface } from '../../interfaces';
interface FormSelectInterface extends RadioInterface {
    control?: Control<FieldValues> | any;
}
export declare const FormSelect: (props: FormSelectInterface) => import("react/jsx-runtime").JSX.Element;
export default FormSelect;
