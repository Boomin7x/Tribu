interface AppInputType {
    placeholder?: string | undefined;
    label?: string | undefined;
    type: string | undefined;
    id: string | undefined;
    hideBorders?: boolean;
    readonly?: boolean;
    style?: React.CSSProperties | undefined;
    value?: string | number | readonly string[] | undefined;
    onChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> | undefined;
    maxLength?: number;
    minLength?: number;
    styles?: any | undefined;
    className?: string | undefined;
    multiline?: boolean;
    isPreview?: boolean;
    minRows?: number;
    startAdornment?: JSX.Element;
}
export declare const AppInput: ({ ...props }: AppInputType) => import("react/jsx-runtime").JSX.Element;
export default AppInput;
