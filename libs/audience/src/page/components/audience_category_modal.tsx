import { FormFields, FormInputField } from '@tribu/forms';
import { AppButton, AppModalDialog } from '@tribu/ui';
import { AudienceBloc } from '../../data/interfaces/create_audience';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

interface AddAudienceCategoryModalProps {
  action: boolean;
  setAction: (action: boolean) => void;
  onAddCategory: (data: AudienceBloc) => void;
}

const AddAudienceCategoryModal = ({
  action,
  setAction,
  onAddCategory,
}: AddAudienceCategoryModalProps) => {
  const schema = yup
    .object({
      name: yup.string().required(),
    })
    .required();

  const { control, handleSubmit, reset } = useForm<{
    name: string;
  }>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: Record<string, any>) => {
    console.log(data);

    const bloc: AudienceBloc = {
      key: data['name'],
      fields: [],
    };
    onAddCategory(bloc);
    reset();
    setAction(false);
  };

  return (
    <div>
      <AppModalDialog
        isOpen={action}
        onClose={() => {
          setAction(false);
          reset();
        }}
        title="Add Audience Bloc"
      >
        <div>
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <FormInputField
              label="Bloc Name"
              id=""
              name="name"
              type={FormFields.INPUT}
              control={control}
              placeholder="Enter Category Name"
              index={0}
              activeSectionIndex={0}
            />

            <div className="flex justify-end mt-4">
              <AppButton
                label="Cancel"
                onClick={() => {
                  setAction(false);
                  reset();
                }}
                className="mr-2"
              />
              <AppButton label="Add" type="submit" />
            </div>
          </form>
        </div>
      </AppModalDialog>
    </div>
  );
};

export default AddAudienceCategoryModal;
