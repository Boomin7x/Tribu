import { FC } from 'react';
import { AppButton } from '@tribu/ui';
import { AllFormInterfacesType } from '@tribu/forms';
export type PreviewButtonsType = {
  currentIndex: number;
  animateNext: (value: boolean) => void;
  previewItems: AllFormInterfacesType[];
  reverseIndexes: number[];
  loading?: boolean;
};
export const PreviewButtons: FC<PreviewButtonsType> = ({
  currentIndex,
  animateNext,
  previewItems,
  reverseIndexes,
  loading,
}: PreviewButtonsType) => {
  return (
    <div className="flex gap-2">
      <AppButton
        disabled={reverseIndexes.length == 1 || loading}
        onClick={() => animateNext(false)}
        label="Prev"
        className="px-5 bg-slate-200 hover:bg-slate-300 !text-gray-500"
      />

      <AppButton
        disabled={loading}
        isLoading={loading}
        onClick={() => animateNext(true)}
        className="px-5"
        label={currentIndex == previewItems.length - 1 ? 'Submit' : 'Next'}
      />
    </div>
  );
};

export default PreviewButtons;
