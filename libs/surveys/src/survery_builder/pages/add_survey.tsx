import { FC } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import {
  Header,
  SurveyComponent,
  DraggableContainerComponents,
  FormFieldEditor,
} from '@tribu/surveys';
import { Box, Stack } from '@mui/material';
import colors from '../utils/styles/colors.module.scss';
import { RootState } from '../data/store/app_store';
import { useSelector } from 'react-redux';
import { GlobalTab } from '@tribu/forms';

export const AddSurvey: FC = () => {
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
