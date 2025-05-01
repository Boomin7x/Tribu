import { RankingInterface } from '../../index.ts';
import { Control, FieldValues } from 'react-hook-form';
interface FormInputFieldInterface extends RankingInterface {
    control?: Control<FieldValues>;
}
export declare const FormRankingField: (props: FormInputFieldInterface) => import("react/jsx-runtime").JSX.Element;
export default FormRankingField;
