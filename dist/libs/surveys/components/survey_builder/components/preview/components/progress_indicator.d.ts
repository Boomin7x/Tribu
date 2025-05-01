import { FC } from 'react';
import { FormSection, AllFormInterfacesType } from '../../../../../../../forms/src/index.ts';
export type ProgressIndicatorsType = {
    currentIndex: number;
    items: AllFormInterfacesType[] | FormSection[];
    title: string;
};
export declare const PreviewProgressIndicator: FC<ProgressIndicatorsType>;
export default PreviewProgressIndicator;
