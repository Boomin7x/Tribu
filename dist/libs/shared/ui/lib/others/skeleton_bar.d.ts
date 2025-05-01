import { HTMLAttributes } from 'react';
export interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
    count: number;
}
export declare const SkeletonBar: ({ count, ...props }: SkeletonProps) => import("react/jsx-runtime").JSX.Element;
export default SkeletonBar;
