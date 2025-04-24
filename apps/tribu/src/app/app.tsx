import { DashboardNotFound, Layout, PageTransition } from '@tribu/ui';
import { Home } from '@tribu/home';
import { SurveyHome, SurveyTemplates } from '@tribu/surveys';
import { AudienceHome, NewAudienceGroup } from '@tribu/audience';
import FormBuilder from './form_builder_screen';
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
          <Route path={RouteNames.add_survey} element={<FormBuilder />} />

          <Route path={RouteNames.audience_home} element={<AudienceHome />} />
          <Route
            path={RouteNames.add_audience}
            element={<NewAudienceGroup />}
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
