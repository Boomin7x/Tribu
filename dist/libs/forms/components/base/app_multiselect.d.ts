import { SelectChangeEvent } from '@mui/material';
export type AppMultiSelectType = {
    id: string | undefined;
    hasBorder?: boolean;
    value?: readonly string[] | readonly number[] | undefined;
    onChange?: (event: SelectChangeEvent<readonly string[] | readonly number[] | undefined>) => void;
    items: number[] | string[] | undefined;
    fullWidth?: boolean;
    width?: string;
    prefix?: string;
    placeholder?: string;
    label?: string;
};
export declare const AppMultiSelect: ({ ...props }: AppMultiSelectType) => import("react/jsx-runtime").JSX.Element;
export default AppMultiSelect;
