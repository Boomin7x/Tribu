import { Box, Button } from '@mui/material';
import { AllFormInterfacesType } from '../../../../../../libs/forms/src/types/all_form_types';
import colors from '../../../utils/styles/colors.module.scss';
import { FC } from 'react';
import { AppButton } from '@tribu/ui';
type PreviewButtonsType = {
  currentIndex: number;
  animateNext: (value: boolean) => void;
  previewItems: AllFormInterfacesType[];
  reverseIndexes: number[];
};
const PreviewButtons: FC<PreviewButtonsType> = ({
  currentIndex,
  animateNext,
  previewItems,
  reverseIndexes,
}: PreviewButtonsType) => {
  return (
    <div className="flex gap-2">
      <AppButton
        disabled={reverseIndexes.length == 1}
        onClick={() => animateNext(false)}
        label="Prev"
        className="px-5 bg-slate-200 hover:bg-slate-300 !text-gray-500"
      />

      <AppButton
        onClick={() => animateNext(true)}
        className="px-5"
        label={currentIndex == previewItems.length - 1 ? 'Submit' : 'Next'}
      />
    </div>
  );
};

export default PreviewButtons;
