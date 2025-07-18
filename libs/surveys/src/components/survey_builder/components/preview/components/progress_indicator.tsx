import { Box, Typography } from '@mui/material';
import colors from '../../../utils/styles/colors.module.scss';
import { FC } from 'react';
import { FormSection, AllFormInterfacesType } from '@tribu/forms';

export type ProgressIndicatorsType = {
  currentIndex: number;
  items: AllFormInterfacesType[] | FormSection[];
  title: string;
};
export const PreviewProgressIndicator: FC<ProgressIndicatorsType> = ({
  items,
  currentIndex,
  title,
}: ProgressIndicatorsType) => {
  return (
    <>
      <Typography fontSize={12}>{title}</Typography>
      <Box display={'flex'} flexDirection={'row'} alignItems={'center'}>
        <Box display={'flex'} flexDirection={'row'}>
          {items.map((_, index) => (
            <Box
              key={index}
              sx={{
                transition: 'all 0.7s',
                backgroundColor:
                  currentIndex < index ? colors.gray : colors.primary,
                height: 5,
                width: 20,
                mr: 1,
              }}
            />
          ))}
        </Box>
        {items[currentIndex] && (
          <Typography fontSize={12}>{`${currentIndex + 1}/${
            items.length
          }`}</Typography>
        )}
      </Box>
    </>
  );
};

export default PreviewProgressIndicator;
