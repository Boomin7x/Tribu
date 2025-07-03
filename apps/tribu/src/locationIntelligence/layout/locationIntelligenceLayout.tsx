import React from 'react';
import LocationIntelligenceSidebar from '../_components/Sidebar/LI_sidebar';
import { Outlet } from 'react-router';

const LocationIntelligenceLayout = () => {
  return (
    <div className="flex-grow h-full grid grid-cols-5 max-h-screen relative overflow-y-auto">
      <LocationIntelligenceSidebar />
      <div className="col-span-4 size-full  overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default LocationIntelligenceLayout;
