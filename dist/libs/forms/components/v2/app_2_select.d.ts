import { Control, FieldValues, Path } from 'react-hook-form';
interface SelectFieldProps<T extends FieldValues> {
    name: Path<T>;
    control: Control<T>;
    label?: string;
    options: string[];
    onChange?: (value: string | number) => void;
    rules?: any;
    [rest: string]: any;
}
export declare const SelectField: <T extends FieldValues>({ name, control, label, options, rules, onChange, ...rest }: SelectFieldProps<T>) => import("react/jsx-runtime").JSX.Element;
export default SelectField;
