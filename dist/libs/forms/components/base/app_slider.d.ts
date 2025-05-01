export type AppSliderType = {
    min?: number | undefined;
    max?: number | undefined;
    steps?: number | undefined;
    value: number | undefined;
    placeholder?: string | undefined;
    label: string;
    id: string;
    isPreview?: boolean;
    onChange: (event: Event, value: number | number[], activeThumb: number) => void;
};
export declare const AppSlider: ({ ...props }: AppSliderType) => import("react/jsx-runtime").JSX.Element;
export default AppSlider;
