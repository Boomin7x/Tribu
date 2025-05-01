import { UseFormWatch } from 'react-hook-form';
import { AllFormInterfacesType } from '../types/all_form_types';
declare const evaluateConditions: (data: AllFormInterfacesType, value: string | number) => boolean;
declare const evaluateCanSkip: (previewItem: AllFormInterfacesType, watch: UseFormWatch<{
    [x: string]: any;
}>) => boolean;
export { evaluateConditions, evaluateCanSkip };
