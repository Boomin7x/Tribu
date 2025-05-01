import { TextInputInterface } from '../../interfaces';
interface FormInputFieldInterface extends TextInputInterface {
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
}
export declare const CustomTextField: ({ id, name, label, type, value, onChange, onBlur, }: FormInputFieldInterface) => import("react/jsx-runtime").JSX.Element;
export {};
