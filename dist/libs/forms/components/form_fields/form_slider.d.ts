import { SliderInterface } from '../../index.ts';
import { Control, FieldValues } from 'react-hook-form';
interface FormSliderType extends SliderInterface {
    control?: Control<FieldValues>;
}
export declare const FormSlider: (props: FormSliderType) => import("react/jsx-runtime").JSX.Element;
export default FormSlider;
