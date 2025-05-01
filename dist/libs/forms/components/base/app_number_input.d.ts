export type AppNumberInputType = {
    placeholder?: string | undefined;
    label?: string | undefined;
    id: string | undefined;
    hideBorders?: boolean;
    value?: number | undefined;
    max?: number;
    min?: number;
    isPreview?: boolean;
    startAdornment?: JSX.Element;
    onChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> | undefined;
    styles?: any | undefined;
};
export declare const AppNumberInput: ({ ...props }: AppNumberInputType) => import("react/jsx-runtime").JSX.Element;
export default AppNumberInput;
