import { FC, ReactNode } from 'react';
import { AllFormInterfacesType } from '../../../../../../../forms/src/index.ts';
interface ReusableContainerProps {
    children: ReactNode;
    item: AllFormInterfacesType;
    isPreview?: boolean;
}
declare const BaseFieldItem: FC<ReusableContainerProps>;
export default BaseFieldItem;
