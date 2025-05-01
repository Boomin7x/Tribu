import { NumberInputInterface } from '../../index.ts';
import { Control, FieldValues } from 'react-hook-form';
interface NumberInputInterfaceInterface extends NumberInputInterface {
    control?: Control<FieldValues>;
}
export declare const FormNumberField: (props: NumberInputInterfaceInterface) => import("react/jsx-runtime").JSX.Element;
export default FormNumberField;
