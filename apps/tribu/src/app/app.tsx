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

          <Route path={RouteNames.surveys_home} element={<SurveyHome />} />
          <Route path={RouteNames.add_survey} element={<AddSurvey />} />

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
