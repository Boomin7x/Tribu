import { AllFormInterfacesType } from '../../../../../../forms/src/index.ts';
type PreviewSlice = {
    previewItems: AllFormInterfacesType[];
    currentIndex: number;
};
export declare const PreviewSlice: import('@reduxjs/toolkit').Slice<PreviewSlice, {
    setPreviewItems: (state: import('immer').WritableDraft<PreviewSlice>, action: {
        payload: any;
        type: string;
    }) => void;
    updatePreviewItem: (state: import('immer').WritableDraft<PreviewSlice>, action: {
        payload: any;
        type: string;
    }) => void;
    setCurrentIndex: (state: import('immer').WritableDraft<PreviewSlice>, action: {
        payload: any;
        type: string;
    }) => void;
}, "preview", "preview", import('@reduxjs/toolkit').SliceSelectors<PreviewSlice>>;
export declare const setPreviewItems: import('@reduxjs/toolkit').ActionCreatorWithPayload<any, "preview/setPreviewItems">, setCurrentIndex: import('@reduxjs/toolkit').ActionCreatorWithPayload<any, "preview/setCurrentIndex">, updatePreviewItem: import('@reduxjs/toolkit').ActionCreatorWithPayload<any, "preview/updatePreviewItem">;
declare const _default: import('redux').Reducer<PreviewSlice>;
export default _default;
