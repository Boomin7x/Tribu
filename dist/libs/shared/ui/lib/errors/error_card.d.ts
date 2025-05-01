import { HTMLAttributes } from 'react';
interface ErrorCardProps extends HTMLAttributes<HTMLDivElement> {
    message: string;
    title: string;
    btnText?: string;
    callback?: () => void;
}
export declare const ErrorCard: ({ title, message, ...props }: ErrorCardProps) => import("react/jsx-runtime").JSX.Element;
export default ErrorCard;
