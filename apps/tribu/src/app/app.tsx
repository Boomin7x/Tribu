import {
  AudienceHome,
  EditAudienceGroup,
  NewAudienceGroup,
} from '@tribu/audience';
import { Home } from '@tribu/home';
import {
  LICampaigns,
  LIContactsPage,
  LILayersPage,
  LITargetsPage,
  LocationIntelligenceLayout,
  Root,
} from '@tribu/location-intelligence';
import { AddSurvey, SurveyHome, SurveyTemplates } from '@tribu/surveys';
import { DashboardNotFound, Layout } from '@tribu/ui';
import { AppConfig, RouteNames } from '@tribu/utils';
import { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { Route, Routes, useNavigate } from 'react-router-dom';
// import LITargetsPage from 'shared/location-intelligence/src/_pages/targets/LITargetsPage';
// import LITargetsPage from 'shared/location-intelligence/src/_pages/targets/LITargetsPage';

export function App() {
  console.log(AppConfig);

  return (
    <>
      <Routes>
        <Route path="/" element={<HomeInt />} />
        <Route
          path={RouteNames.survey_templates}
          element={<SurveyTemplates />}
        />
        <Route path={RouteNames.dashboard} element={<Layout />}>
          <Route index element={<Home />} />
          <Route path={RouteNames.home} element={<Home />} />

          <Route
            path={RouteNames.location_int}
            element={<LocationIntelligenceLayout />}
          >
            <Route index element={<>Hello location Gutys</>} />
            <Route
              path={RouteNames.location_int_layers}
              element={<LILayersPage />}
            />
            <Route path="test" element={<Root />} />

            <Route
              path={RouteNames.location_int_campaigns}
              element={<LICampaigns />}
            />
            <Route
              path={RouteNames.location_int_contacts}
              element={<LIContactsPage />}
            />
            <Route
              path={RouteNames.location_int_target}
              element={<LITargetsPage />}
            />
          </Route>
          <Route path={RouteNames.surveys_home} element={<SurveyHome />} />
          <Route path={RouteNames.add_survey} element={<AddSurvey />} />
          <Route
            path={`${RouteNames.edit_survey}/:id`}
            element={<AddSurvey />}
          />

          <Route path={RouteNames.audience_home} element={<AudienceHome />} />
          <Route
            path={RouteNames.add_audience}
            element={<NewAudienceGroup />}
          />
          <Route
            path={`${RouteNames.edit_audience}/:id`}
            element={<EditAudienceGroup />}
          />
          <Route path="*" element={<DashboardNotFound />} />
        </Route>
        <Route path="*" element={<DashboardNotFound />} />
      </Routes>
      <Toaster />
    </>
  );
}

const HomeInt = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate('/dashboard');
  }, []);

  return <></>;
};

export default App;
