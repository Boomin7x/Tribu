import { default as React, ButtonHTMLAttributes, ReactNode } from 'react';
export interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    label: string;
    icon?: ReactNode;
    isLoading?: boolean;
}
export declare const AppButton: React.FC<AppButtonProps>;
export default AppButton;
