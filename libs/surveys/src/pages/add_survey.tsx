import { FC, useEffect } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import {
  Header,
  SurveyComponent,
  DraggableContainerComponents,
  FormFieldEditor,
  setFormData,
  RootState,
} from '@tribu/surveys';
import { Box, Stack } from '@mui/material';
import colors from '../components/survey_builder/utils/styles/colors.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { AppFormState, GlobalTab } from '@tribu/forms';
import { useParams } from 'react-router-dom';
import { useApi } from '@tribu/utils';
import SurveyController from '../controllers/survey_controller';
import { Survey } from '../data/interfaces/create_survey';
import { setSurveyInfo } from '../components/survey_builder/data/logic/survey_slice';

export const AddSurvey: FC = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!id) {
      // dispatch(resetState({}));
    }
  }, []);

  if (id) {
    const { data } = useApi.query<Survey>({
      queryKey: [id!],
      callBack: () => SurveyController.findSurveyById(id),
    });

    useEffect(() => {
      if (data) {
        dispatch(setSurveyInfo(data));
        const formData: AppFormState = {
          sections: data.form.blocs.map((item) => {
            return {
              id: item.metaData.key,
              index: item.metaData.index,
              formItems: item.questions.map((q) => q.metaData),
            };
          }),
          isTemplate: data.form.isTemplate,
          activeSection: 0,
          formTitle: data.name,
          formDescription: data.description,
          selectedField: null,
          audienceIds: data.audienceIds ?? [],
        };
        dispatch(setFormData(formData));
      }
    }, [data]);
  }

  const currentTab:
    | GlobalTab.CREATE
    | GlobalTab.PREVIEW
    | GlobalTab.SUBMISSION = useSelector(
    (state: RootState) => state.tabs.currentGlobalTab
  );

  return (
    <DndProvider backend={HTML5Backend}>
      <Box width={'100%'} height={'100%'} overflow={'clip'}>
        <Box
          // height={'10%'}
          borderBottom={'1px solid'}
          borderColor={colors.gray}
        >
          <Header />
        </Box>
        <Box height={'90%'}>
          <Stack direction={'row'} height={'100%'}>
            <Box
              sx={{
                width: currentTab == GlobalTab.CREATE ? '30%' : '0',
                height: '100%',
                opacity: currentTab == GlobalTab.CREATE ? '1' : '0',
                transition: 'opacity 0.7s',
              }}
            >
              <DraggableContainerComponents />
            </Box>
            <Box
              sx={{
                width: currentTab == GlobalTab.CREATE ? '45%' : '100%',
                justifyContent: 'center',
                alignItems: 'center',
                transition: 'all 0.7s',
                display: currentTab == GlobalTab.CREATE ? 'block' : 'flex',
              }}
            >
              <Box
                sx={{
                  width: currentTab == GlobalTab.CREATE ? '100%' : '60%',
                }}
              >
                <SurveyComponent />
              </Box>
            </Box>
            <Box
              sx={{
                width: currentTab == GlobalTab.CREATE ? '25%' : '0',
                opacity: currentTab == GlobalTab.CREATE ? '1' : '0',
                transition: 'opacity 0.7s',
              }}
            >
              <FormFieldEditor />
            </Box>
          </Stack>
        </Box>
      </Box>
    </DndProvider>
  );
};

export default AddSurvey;
