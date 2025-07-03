import { DashboardNotFound, Layout } from '@tribu/ui';
import { Home } from '@tribu/home';
import { AddSurvey, SurveyHome, SurveyTemplates } from '@tribu/surveys';
import {
  AudienceHome,
  NewAudienceGroup,
  EditAudienceGroup,
} from '@tribu/audience';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { AppConfig, RouteNames } from '@tribu/utils';
import LocationIntelligenceLayout from '../locationIntelligence/layout/locationIntelligenceLayout';
import LILayersPage from '../locationIntelligence/_pages/layers';
import LICampaigns from '../locationIntelligence/_pages/campaigns';
import LIContactsPage from '../locationIntelligence/_pages/contacts';
import LITargetsPage from '../locationIntelligence/_pages/targets';
import Root from '../locationIntelligence/_pages/kepler';
export function App() {
  console.log(AppConfig);

  const navigate = useNavigate();
  useEffect(() => {
    // navigate('/dashboard');
  }, []);

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
