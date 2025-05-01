import { FC } from 'react';
export type AppQuestionProps = {
    label: string;
    selectedItem: string;
    index: string | number;
};
export declare const AppQuestion: FC<AppQuestionProps>;
export default AppQuestion;
