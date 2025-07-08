import { RouteNames } from '@tribu/utils';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { cn } from '../../_libs';
import { Tooltip } from '@mui/material';

interface INavItem {
  name: 'Target' | 'Layers' | 'Campaigns' | 'Contacts';
  icon: string;
  Link: string;
}
export const LISideNav = () => {
  //   const link_prefox = '/dashboard/';
  const link_prefox = '';
  const navItems: INavItem[] = [
    {
      name: 'Target',
      icon: 'ph:crosshair',
      Link: RouteNames.location_int_target,
    },

    {
      name: 'Contacts',
      icon: 'carbon:enterprise',
      Link: RouteNames.location_int_contacts,
    },
    {
      name: 'Layers',
      icon: 'bi:layers',
      Link: RouteNames.location_int_layers,
    },
    {
      name: 'Campaigns',
      icon: 'ep:data-analysis',
      Link: RouteNames.location_int_campaigns,
    },
  ];

  return (
    <div className="flex ">
      {navItems.map((item) => (
        <NavItem key={item?.Link} {...item} />
      ))}
    </div>
  );
};

const NavItem = (item: INavItem) => {
  const location = useLocation();
  return (
    <Link
      key={item.name}
      to={item.Link}
      className={cn(
        'flex group hover:text-primary-600 items-center min-w-[4rem] justify-center h-[4rem] px-4  gap-x-2  transition-colors',
        location.pathname.includes(item?.Link) &&
          'border-b-2 border-primary-600 text-primary-600'
      )}
    >
      <Tooltip title={item.name} placement="bottom" arrow>
        <Icon icon={item.icon} className="size-6" />
      </Tooltip>
      <span
        className={cn(
          'max-w-0 overflow-hidden  transition-all  duration-300 ease-in-out ',
          location.pathname.includes(item?.Link) && 'max-w-full'
        )}
      >
        {item.name}
      </span>
    </Link>
  );
};
