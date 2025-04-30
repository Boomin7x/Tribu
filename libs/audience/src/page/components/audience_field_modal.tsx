import {
  FormFields,
  FormInputField,
  FormSelect,
  generateFormName,
} from '@tribu/forms';
import { AppButton, AppModalDialog } from '@tribu/ui';
import { AudienceBloc, Question } from '../../data/interfaces/create_audience';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { draggableItems } from '@tribu/surveys';

interface AudienceFieldModalProps {
  action: boolean;
  currentBloc: AudienceBloc;
  setAction: (action: boolean) => void;
  onAddField: (data: Question) => void;
}

const AudienceFieldModal = ({
  action,
  setAction,
  currentBloc,
  onAddField,
}: AudienceFieldModalProps) => {
  const schema = yup
    .object({
      type: yup.string().required(),
      label: yup.string().required(),
      placeholder: yup.string().required(),
    })
    .required();

  const { control, handleSubmit, reset } = useForm<{
    type: string;
    placeholder: string;
    label: string;
  }>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: Record<string, any>) => {
    const findQuestion = draggableItems.find(
      (item) => item.type == data['type']
    );
    console.log(data);
    console.log('findQuestion', findQuestion);

    if (findQuestion) {
      const updateQuestion = {
        ...findQuestion,
        name: generateFormName(data['label'], ''),
      };

      const question: Question = {
        ...updateQuestion,
        key: currentBloc.key,
        description: updateQuestion.value,
        metaData: updateQuestion,
      };
      onAddField(question);
      reset();
      setAction(false);
    }
  };

  return (
    <div>
      <AppModalDialog
        isOpen={action}
        onClose={() => {
          setAction(false);
          reset();
        }}
        title="Add Field Information"
      >
        <div>
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <FormInputField
              label="Label"
              id=""
              name="label"
              type={FormFields.INPUT}
              control={control}
              placeholder="Enter Placeholder"
              index={0}
              activeSectionIndex={0}
            />
            <FormInputField
              label="Placeholder"
              id=""
              name="placeholder"
              type={FormFields.INPUT}
              control={control}
              placeholder="Enter Placeholder"
              index={0}
              activeSectionIndex={0}
            />

            <FormSelect
              type={FormFields.RADIO}
              elements={draggableItems.map((item) => item.type)}
              id=""
              name="type"
              index={0}
              control={control}
              label="Select Field Type"
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

export default AudienceFieldModal;
