import { default as React, ButtonHTMLAttributes, ReactNode } from 'react';
export interface ChipProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    label: string;
    icon?: ReactNode;
}
export declare const AppChip: React.FC<ChipProps>;
export default AppChip;
