import { SyntheticEvent } from 'react';
export type AppRatingType = {
    max?: number | undefined;
    value: number;
    placeholder?: string | undefined;
    label?: string;
    id?: string;
    onChange: (event: SyntheticEvent<Element, Event>, value: number | null) => void;
};
export declare const AppRating: ({ ...props }: AppRatingType) => import("react/jsx-runtime").JSX.Element;
export default AppRating;
