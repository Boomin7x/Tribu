import { ConditionLinkEnum } from '../../../../../../forms/src/index.ts';
export type SimpleListMenuType = {
    initialOption: ConditionLinkEnum;
    onChangeOption: (option: ConditionLinkEnum) => void;
};
export declare const SimpleListMenu: ({ initialOption, onChangeOption, }: SimpleListMenuType) => import("react/jsx-runtime").JSX.Element;
export default SimpleListMenu;
