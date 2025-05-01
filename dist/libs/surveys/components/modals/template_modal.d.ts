import { FormEventHandler } from 'react';
interface AddTemplateCategoryProps {
    action: boolean;
    isAddingCategory: boolean;
    setAction: (action: boolean) => void;
    control: any;
    handleSubmit: (data: any) => FormEventHandler<HTMLFormElement> | undefined;
    onSubmit: (data: Record<string, any>) => void;
}
declare const AddTemplateCategory: ({ action, setAction, control, handleSubmit, onSubmit, isAddingCategory, }: AddTemplateCategoryProps) => import("react/jsx-runtime").JSX.Element;
export default AddTemplateCategory;
