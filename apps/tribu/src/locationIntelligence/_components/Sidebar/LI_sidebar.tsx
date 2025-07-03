import { RouteNames } from '@tribu/utils';
import { useLocation } from 'react-router-dom';
import LILayersSide from './LI_layers-side';
import LISideNav from './LI_side_nav';
import LITargetSidebar from './LI_target_sidebar';
import LIContactsSide from './LI_contacts_side';
import LICampaignSidebar from './LI_Campaign_side';

const LocationIntelligenceSidebar = () => {
  const urlPrefix = RouteNames.location_int + '/';
  const location = useLocation();
  const pathname = location.pathname;

  console.log('current path', urlPrefix + RouteNames.location_int_layers);
  return (
    <div className="flex-1 flex flex-col border-r h-screen relative !overflow-x-visible">
      <div className="flex w-full border-b shrink-0">
        <LISideNav />
      </div>
      <div className="w-full flex-1 h-full overflow-y-auto !overflow-x-visible relative flex flex-col gap-2 py-6 px-4">
        {pathname?.includes(urlPrefix + RouteNames.location_int_target) ? (
          <LITargetSidebar />
        ) : null}
        {pathname?.includes(urlPrefix + RouteNames.location_int_layers) ? (
          <LILayersSide />
        ) : null}
        {pathname?.includes(urlPrefix + RouteNames.location_int_contacts) ? (
          <LIContactsSide />
        ) : null}
        {pathname?.includes(urlPrefix + RouteNames.location_int_campaigns) ? (
          <LICampaignSidebar />
        ) : null}
      </div>
    </div>
  );
};

export default LocationIntelligenceSidebar;
