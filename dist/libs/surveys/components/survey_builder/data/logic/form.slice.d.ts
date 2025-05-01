import { AppFormState } from '../../../../../../forms/src/index.ts';
export declare const FormSlice: import('@reduxjs/toolkit').Slice<AppFormState, {
    setFormData: (state: import('immer').WritableDraft<AppFormState>, action: {
        payload: any;
        type: string;
    }) => void;
    addFormField: (state: import('immer').WritableDraft<AppFormState>, action: {
        payload: any;
        type: string;
    }) => void;
    updateFormField: (state: import('immer').WritableDraft<AppFormState>, action: {
        payload: any;
        type: string;
    }) => void;
    setSortedItems: (state: import('immer').WritableDraft<AppFormState>, action: {
        payload: any;
        type: string;
    }) => void;
    removeFormField: (state: import('immer').WritableDraft<AppFormState>, action: {
        payload: any;
        type: string;
    }) => void;
    setSelectedField: (state: import('immer').WritableDraft<AppFormState>, action: {
        payload: any;
        type: string;
    }) => void;
    updateFormTitle: (state: import('immer').WritableDraft<AppFormState>, action: {
        payload: any;
        type: string;
    }) => void;
    updateFormDescription: (state: import('immer').WritableDraft<AppFormState>, action: {
        payload: any;
        type: string;
    }) => void;
    addFormSection: (state: import('immer').WritableDraft<AppFormState>, action: {
        payload: any;
        type: string;
    }) => void;
    setActiveSection: (state: import('immer').WritableDraft<AppFormState>, action: {
        payload: any;
        type: string;
    }) => void;
    removeFormSection: (state: import('immer').WritableDraft<AppFormState>, action: {
        payload: any;
        type: string;
    }) => void;
    updateFormAudienceId: (state: import('immer').WritableDraft<AppFormState>, action: {
        payload: any;
        type: string;
    }) => void;
    resetState: (state: import('immer').WritableDraft<AppFormState>, action: {
        payload: any;
        type: string;
    }) => void;
}, "form", "form", import('@reduxjs/toolkit').SliceSelectors<AppFormState>>;
export declare const setFormData: import('@reduxjs/toolkit').ActionCreatorWithPayload<any, "form/setFormData">, addFormField: import('@reduxjs/toolkit').ActionCreatorWithPayload<any, "form/addFormField">, addFormSection: import('@reduxjs/toolkit').ActionCreatorWithPayload<any, "form/addFormSection">, removeFormSection: import('@reduxjs/toolkit').ActionCreatorWithPayload<any, "form/removeFormSection">, setActiveSection: import('@reduxjs/toolkit').ActionCreatorWithPayload<any, "form/setActiveSection">, removeFormField: import('@reduxjs/toolkit').ActionCreatorWithPayload<any, "form/removeFormField">, setSelectedField: import('@reduxjs/toolkit').ActionCreatorWithPayload<any, "form/setSelectedField">, setSortedItems: import('@reduxjs/toolkit').ActionCreatorWithPayload<any, "form/setSortedItems">, updateFormField: import('@reduxjs/toolkit').ActionCreatorWithPayload<any, "form/updateFormField">, updateFormTitle: import('@reduxjs/toolkit').ActionCreatorWithPayload<any, "form/updateFormTitle">, updateFormDescription: import('@reduxjs/toolkit').ActionCreatorWithPayload<any, "form/updateFormDescription">, updateFormAudienceId: import('@reduxjs/toolkit').ActionCreatorWithPayload<any, "form/updateFormAudienceId">, resetState: import('@reduxjs/toolkit').ActionCreatorWithPayload<any, "form/resetState">;
declare const _default: import('redux').Reducer<AppFormState>;
export default _default;
