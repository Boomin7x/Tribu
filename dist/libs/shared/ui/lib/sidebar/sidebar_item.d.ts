import { FC } from 'react';
export interface SidebarItemProps {
    icon: string;
    label: string;
    onClick: () => void;
}
declare const SidebarItem: FC<SidebarItemProps>;
export default SidebarItem;
