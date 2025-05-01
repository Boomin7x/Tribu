import { ActionInterface, AllFormInterfacesType, ConditionInterface } from '../../../../../../forms/src/index.ts';
export type RenderConditionalFieldType = {
    formItem: AllFormInterfacesType;
    condition_or_action?: ConditionInterface | ActionInterface;
};
export declare const RenderConditionalField: ({ formItem, condition_or_action, }: RenderConditionalFieldType) => import("react/jsx-runtime").JSX.Element;
export default RenderConditionalField;
