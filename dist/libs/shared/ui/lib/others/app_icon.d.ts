import { ButtonHTMLAttributes, FC } from 'react';
export interface AppIconProps extends ButtonHTMLAttributes<HTMLImageElement> {
    icon: string;
    width?: number;
    additionalClass?: string;
}
declare const AppIcon: FC<AppIconProps>;
export default AppIcon;
