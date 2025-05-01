import { Dayjs } from 'dayjs';
export type AppDatePickerProps = {
    id: string | undefined;
    onChange?: (value: Date) => Date;
    hasBorder?: boolean;
    value?: Date | undefined;
    width?: string;
    minDate?: Dayjs;
    maxDate?: Dayjs;
    label?: string;
};
export declare const AppDatePicker: (props: AppDatePickerProps) => import("react/jsx-runtime").JSX.Element;
