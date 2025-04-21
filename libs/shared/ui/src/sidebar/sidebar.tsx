import { HTMLAttributes } from 'react';
import logo from '../../../images/survey_logo.svg';
import audience from '../../../icons/audience.svg';
import check_box from '../../../icons/check_box.svg';
import store from '../../../icons/store.svg';
import logout from '../../../icons/logout.svg';
import AppIcon from '../others/app_icon';
import { useNavigate } from 'react-router-dom';
import SidebarItem, { SidebarItemProps } from './sidebar_item';

interface SidebarProps extends HTMLAttributes<HTMLDivElement> {}

export const Sidebar = (props: SidebarProps) => {
  const sidebarItems: SidebarItemProps[] = [
    {
      icon: check_box,
      label: 'Home',
      onClick: () => {},
    },
    {
      icon: store,
      label: 'Surveys',
      onClick: () => {},
    },
    {
      icon: audience,
      label: 'Audience',
      onClick: () => {},
    },
  ];
  const navigate = useNavigate();
  return (
    <div className="h-screen flex flex-col py-10 justify-between w-[15vw] bg-purple-50">
      <AppIcon
        icon={logo}
        width={10}
        additionalClass="rounded-sm cursor-pointer"
        onClick={() => navigate('/dashboard')}
      />
      <div className="mt-20 flex flex-col gap-y-5 grow">
        {sidebarItems.map((item) => {
          return <SidebarItem {...item} key={item.label} />;
        })}
      </div>
      <div className="flex items-center justify-center">
        <img src={logout} alt="" />
      </div>
    </div>
  );
};

export default Sidebar;
