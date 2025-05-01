import { Control, FieldValues } from 'react-hook-form';
import { TextAreaInterface } from '../../index.ts';
interface FormTextAreaInterface extends TextAreaInterface {
    control?: Control<FieldValues>;
}
export declare const FormParagraph: (props: FormTextAreaInterface) => import("react/jsx-runtime").JSX.Element;
export default FormParagraph;
