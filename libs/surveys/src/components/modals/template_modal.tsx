import { FormFields, FormInputField, FormTextArea } from '@tribu/forms';
import { AppButton, AppModalDialog } from '@tribu/ui';
import { FormEventHandler } from 'react';

interface AddTemplateCategoryProps {
  action: boolean;
  isAddingCategory: boolean;
  setAction: (action: boolean) => void;
  control: any;
  handleSubmit: (data: any) => FormEventHandler<HTMLFormElement> | undefined;
  onSubmit: (data: Record<string, any>) => void;
}

const AddTemplateCategory = ({
  action,
  setAction,
  control,
  handleSubmit,
  onSubmit,
  isAddingCategory,
}: AddTemplateCategoryProps) => {
  return (
    <div>
      <AppModalDialog
        isOpen={action}
        onClose={() => {
          setAction(false);
        }}
        title="Add Category"
      >
        <div>
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <FormInputField
              label="Category Name"
              id=""
              name="name"
              type={FormFields.INPUT}
              control={control}
              placeholder="Enter Category Name"
              index={0}
              activeSectionIndex={0}
            />
            <div className="my-2"></div>
            <FormTextArea
              label="Category Name"
              id=""
              name="description"
              type={FormFields.INPUT}
              control={control}
              placeholder="Enter Category Description"
              index={0}
              activeSectionIndex={0}
              maxLength={200}
            />
            <div className="flex justify-end mt-4">
              <AppButton
                label="Cancel"
                onClick={() => {
                  setAction(false);
                }}
                className="mr-2"
              />
              <AppButton
                label="Add"
                isLoading={isAddingCategory}
                type="submit"
              />
            </div>
          </form>
        </div>
      </AppModalDialog>
    </div>
  );
};

export default AddTemplateCategory;
