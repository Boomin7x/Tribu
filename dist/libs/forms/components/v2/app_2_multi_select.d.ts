import { Control, FieldValues, Path } from 'react-hook-form';
interface MultiSelectFieldProps<T extends FieldValues> {
    name: Path<T>;
    control: Control<T>;
    label?: string;
    options: string[];
    onChange?: (value: (string | number)[]) => void;
    rules?: any;
    [rest: string]: any;
}
export declare const MultiSelectField: <T extends FieldValues>({ name, control, label, options, rules, onChange, ...rest }: MultiSelectFieldProps<T>) => import("react/jsx-runtime").JSX.Element;
export default MultiSelectField;
