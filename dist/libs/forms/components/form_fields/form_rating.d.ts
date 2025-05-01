import { RatingInterface } from '../../index.ts';
import { Control, FieldValues } from 'react-hook-form';
interface FormRatingType extends RatingInterface {
    control?: Control<FieldValues>;
}
export declare const FormRating: (props: FormRatingType) => import("react/jsx-runtime").JSX.Element;
export default FormRating;
