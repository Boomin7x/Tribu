export type AppErrorMessageType = {
    id: string;
    label: string;
    name?: string;
    isPreview?: boolean;
};
export declare const AppCustomErrorMessage: ({ id, label, isPreview, name, }: AppErrorMessageType) => import("react/jsx-runtime").JSX.Element;
export default AppCustomErrorMessage;
