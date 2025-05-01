import { default as React, ReactNode } from 'react';
export interface AppModalDialogProps {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    children: ReactNode;
}
export declare const AppModalDialog: React.FC<AppModalDialogProps>;
export default AppModalDialog;
