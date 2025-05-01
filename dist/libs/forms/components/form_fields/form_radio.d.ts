import { RadioInterface } from '../../index.ts';
import { Control, FieldValues } from 'react-hook-form';
interface FormRadioSelectInterface extends RadioInterface {
    control?: Control<FieldValues>;
}
export declare const FormRadioSelect: (props: FormRadioSelectInterface) => import("react/jsx-runtime").JSX.Element;
export default FormRadioSelect;
