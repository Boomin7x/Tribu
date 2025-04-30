import { Box, Tab, Tabs } from '@mui/material';
import colors from '../../utils/styles/colors.module.scss';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedTab } from '../../data/logic/tab.slice';
import { GlobalTab } from '@tribu/forms';
import { RootState } from '../../data';
export const Header = () => {
  const dispatch = useDispatch();
  const selectedTab = useSelector(
    (state: RootState) => state.tabs.currentGlobalTab
  );

  const handleChange = (newValue: string) => {
    dispatch(setSelectedTab(newValue));
  };
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        borderBottom: `1px solid ${colors.gray}`,
        height: '100%',
        alignItems: 'end',
      }}
    >
      <Box />
      <Box
        display={'flex'}
        alignItems={'center'}
        justifyContent={'space-around'}
        borderBottom={'1px solid'}
        borderColor={colors.gray}
      >
        <Tabs
          value={selectedTab}
          onChange={(_, val) => handleChange(val)}
          aria-label="basic tabs example"
          sx={{ textTransform: 'capitalize' }}
        >
          <Tab
            value={GlobalTab.CREATE}
            label="Create"
            sx={{ border: 'none', textTransform: 'capitalize' }}
            className="text-secondary-500"
          />
          <Tab
            label="Preview"
            sx={{ textTransform: 'capitalize' }}
            value={GlobalTab.PREVIEW}
          />
          <Tab
            label="Submission"
            sx={{ textTransform: 'capitalize' }}
            value={GlobalTab.SUBMISSION}
          />
        </Tabs>
      </Box>
      <Box></Box>
    </Box>
  );
};

export default Header;
