import { Dayjs } from 'dayjs';
import { DatePickerProps } from '@mui/x-date-pickers/DatePicker';
import { UseDateFieldProps } from '@mui/x-date-pickers/DateField';
import { BaseSingleInputFieldProps, DateValidationError, FieldSection } from '@mui/x-date-pickers/models';
import * as React from 'react';
export interface ButtonFieldProps extends UseDateFieldProps<Dayjs>, BaseSingleInputFieldProps<Dayjs | null, Dayjs, FieldSection, DateValidationError> {
    setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}
export declare function ButtonField(props: ButtonFieldProps): import("react/jsx-runtime").JSX.Element;
export declare function ButtonDatePicker(props: Omit<DatePickerProps<Dayjs>, 'open' | 'onOpen' | 'onClose'>): import("react/jsx-runtime").JSX.Element;
export type CustomDateFieldType = {
    id: string | undefined;
    placeholder: string | undefined;
    onChange?: (value: Dayjs) => Dayjs | void;
    hasBorder?: boolean;
    value?: string | number;
    width?: string;
};
export default function CustomDateField(props: CustomDateFieldType): import("react/jsx-runtime").JSX.Element;
