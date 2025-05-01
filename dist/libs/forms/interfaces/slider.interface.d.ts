import { FormFields } from '../enum';
import { BaseInterface } from './base_interface';
export interface SliderInterface extends BaseInterface {
    type: FormFields.SLIDER;
    value: number;
    steps?: number | undefined;
    max?: number | undefined;
    min?: number | undefined;
}
