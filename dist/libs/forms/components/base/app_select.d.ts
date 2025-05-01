import { SelectChangeEvent } from '@mui/material';
export type AppSelectType = {
    id: string | undefined;
    hasBorder?: boolean;
    value?: string | number | undefined;
    onChange?: (event: SelectChangeEvent<string | number | readonly string[]>, child: React.ReactNode) => void;
    items: number[] | string[] | undefined;
    fullWidth?: boolean;
    width?: string;
    prefix?: string;
    label?: string;
};
export declare const AppSelect: ({ ...props }: AppSelectType) => import("react/jsx-runtime").JSX.Element;
export default AppSelect;
