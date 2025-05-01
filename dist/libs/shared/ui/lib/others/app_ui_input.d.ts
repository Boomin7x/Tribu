import { default as React, InputHTMLAttributes, ReactNode } from 'react';
export interface AppUIInputProps extends InputHTMLAttributes<HTMLInputElement> {
    icon?: ReactNode;
    hint?: string;
    label?: string;
    inputClasses?: string;
}
export declare const AppUIInput: React.FC<AppUIInputProps>;
export default AppUIInput;
