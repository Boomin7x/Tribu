export type AppTextAreaType = {
    label?: string | undefined;
    placeholder?: string | undefined;
    id?: string | undefined;
    className?: string | undefined;
    style?: React.CSSProperties | undefined;
    hideBorders?: boolean;
    maxLength?: number;
    value?: string | number | readonly string[] | undefined;
    onChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> | undefined;
    isPreview?: boolean;
};
export declare const AppTextArea: ({ ...props }: {
    [x: string]: any;
}) => import("react/jsx-runtime").JSX.Element;
export default AppTextArea;
