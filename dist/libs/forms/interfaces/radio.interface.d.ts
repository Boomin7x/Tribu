import { FormFields } from '../enum';
import { SelectChangeEvent } from '@mui/material';
import { BaseInterface } from './base_interface';
export interface RadioInterface extends BaseInterface {
    type: FormFields.RADIO;
    elements: (number | string)[];
    value?: number | string | undefined;
    onChange?: ((event: SelectChangeEvent<string | number | readonly string[]>, child: React.ReactNode) => void) | undefined;
}
