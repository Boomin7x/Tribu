import { actionType, conditionTypes } from '../enum/condition_actions';
import { ActionInterface, ConditionInterface } from '..//interfaces';
import { AllFormInterfacesType } from '../types/all_form_types';
interface UpdateFormFieldWithConditionsType {
    condition_or_action: ConditionInterface | ActionInterface | undefined;
    newValue?: string;
    newAction?: conditionTypes | actionType | undefined;
    formItem: AllFormInterfacesType;
}
declare const updateFormFieldWithConditions: ({ condition_or_action, newValue, formItem, newAction, }: UpdateFormFieldWithConditionsType) => AllFormInterfacesType | undefined;
declare const convertActionStringToEnum: (value: string | null) => actionType | null;
declare const convertConditionStringToEnum: (value: string | null) => conditionTypes | null;
export { updateFormFieldWithConditions, convertConditionStringToEnum, convertActionStringToEnum, };
