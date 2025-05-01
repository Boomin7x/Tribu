import { RankingInterface } from '../../index.ts';
export type RankingComponentType = {
    formItem: RankingInterface;
    onChange: (value: number) => void;
    value?: number;
};
export declare const RankingComponent: ({ formItem, onChange, value, }: RankingComponentType) => import("react/jsx-runtime").JSX.Element;
export default RankingComponent;
