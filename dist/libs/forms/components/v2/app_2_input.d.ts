import { Control, FieldValues, Path } from 'react-hook-form';
interface InputFieldProps<T extends FieldValues> {
    name: Path<T>;
    control: Control<T>;
    label?: string;
    type?: string;
    rules?: any;
    [rest: string]: any;
    onChange?: (value: string | number) => void;
}
export declare const InputField: <T extends FieldValues>({ name, control, label, type, rules, onChange, ...rest }: InputFieldProps<T>) => import("react/jsx-runtime").JSX.Element;
export default InputField;
