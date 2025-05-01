import { GlobalTab } from '../../../../../../forms/src/index.ts';
interface TabState {
    currentGlobalTab: GlobalTab.CREATE | GlobalTab.PREVIEW | GlobalTab.SUBMISSION;
}
export declare const TabSlice: import('@reduxjs/toolkit').Slice<TabState, {
    setSelectedTab: (state: import('immer').WritableDraft<TabState>, action: {
        payload: any;
        type: string;
    }) => void;
    getSelectedTab: (state: import('immer').WritableDraft<TabState>) => import('immer').WritableDraft<TabState>;
}, "tabs", "tabs", import('@reduxjs/toolkit').SliceSelectors<TabState>>;
export declare const setSelectedTab: import('@reduxjs/toolkit').ActionCreatorWithPayload<any, "tabs/setSelectedTab">, getSelectedTab: import('@reduxjs/toolkit').ActionCreatorWithoutPayload<"tabs/getSelectedTab">;
declare const _default: import('redux').Reducer<TabState>;
export default _default;
