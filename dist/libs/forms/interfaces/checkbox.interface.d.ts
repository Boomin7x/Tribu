import { SelectChangeEvent } from '@mui/material';
import { FormFields } from '../enum';
import { BaseInterface } from './base_interface';
export interface FormItemElementInterface {
    value: string;
    label: string;
}
export interface CheckboxInterface extends BaseInterface {
    type: FormFields.CHECKBOX;
    elements: (number | string)[];
    value: (number | string)[] | undefined;
    onChange?: (event: SelectChangeEvent<readonly string[] | readonly number[] | undefined>) => void;
}
