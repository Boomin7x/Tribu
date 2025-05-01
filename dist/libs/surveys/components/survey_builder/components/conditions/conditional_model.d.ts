import { FC } from 'react';
import { AllFormInterfacesType } from '../../../../../../forms/src/index.ts';
export type AppModalProps = {
    open: boolean;
    handleClose: () => void;
    selectedItem: AllFormInterfacesType | null;
};
export declare const AppModal: FC<AppModalProps>;
export default AppModal;
