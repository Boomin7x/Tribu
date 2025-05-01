declare enum ConditionActions {
    EQUALTO = "Is Equal to",
    NOTEQUALTO = "Is Not Equal to",
    GREATERTHAN = "Is Greater than",
    LESSTHAN = "Is Less than",
    GREATERTHANEQUALTO = "Is Greater than or Equal to",
    LESSTHANEQUALTO = "Is Less than or Equal to"
}
declare enum ActionActions {
    SKIP = "Skip To",
    CANCEL = "Cancel"
}
declare enum ConditionLinkEnum {
    OR = "OR",
    AND = "AND"
}
declare const conditionInputActions: ConditionActions[];
declare const actionSelectOptions: ActionActions[];
declare const conditionLinks: ConditionLinkEnum[];
declare const conditionSelectActions: ConditionActions[];
export type conditionTypes = ConditionActions.EQUALTO | ConditionActions.NOTEQUALTO | ConditionActions.GREATERTHAN | ConditionActions.LESSTHAN | ConditionActions.GREATERTHANEQUALTO | ConditionActions.LESSTHANEQUALTO;
export type actionType = ActionActions.SKIP | ActionActions.CANCEL;
export { ConditionActions, conditionInputActions, conditionSelectActions, conditionLinks, ConditionLinkEnum, ActionActions, actionSelectOptions, };
