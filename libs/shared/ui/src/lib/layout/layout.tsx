import { Sidebar, AppHeader } from '@tribu/ui';
import { FC, ReactNode } from 'react';
import Main from '../main/main';
import { Outlet, useLocation } from 'react-router';

export const Layout: FC<React.HTMLAttributes<HTMLDivElement>> = () => {
  const location = useLocation();
  const isNewSurvey =
    location.pathname.includes('surveys/new') ||
    location.pathname.includes('surveys/edit');
  return (
    <div className="flex flex-row h-screen w-screen justify-between items-center">
      <Sidebar className="w-[5%] bg-primary-50" />
      {/* <Sidebar className=" bg-primary-50 mx-auto" /> */}
      <Main className="w-full h-screen">
        {!isNewSurvey && <AppHeader className="h-[10vh]" />}
        <div
          className={`w-full mx-auto ${
            isNewSurvey ? 'h-[100vh] ' : 'h-[88vh]'
          } overflow-y-auto`}
        >
          <Outlet />
        </div>
      </Main>
    </div>
  );
};

export default Layout;
