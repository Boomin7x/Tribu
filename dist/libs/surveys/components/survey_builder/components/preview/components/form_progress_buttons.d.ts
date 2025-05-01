import { FC } from 'react';
import { AllFormInterfacesType } from '../../../../../../../forms/src/index.ts';
export type PreviewButtonsType = {
    currentIndex: number;
    animateNext: (value: boolean) => void;
    previewItems: AllFormInterfacesType[];
    reverseIndexes: number[];
    loading?: boolean;
    id?: string;
};
export declare const PreviewButtons: FC<PreviewButtonsType>;
export default PreviewButtons;
