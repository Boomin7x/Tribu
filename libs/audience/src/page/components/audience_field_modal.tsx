import {
  AllFormInterfacesType,
  AppInput,
  FormFields,
  FormInputField,
  FormSelect,
  generateFormName,
} from '@tribu/forms';
import { AppButton, AppChip, AppModalDialog } from '@tribu/ui';
import { AudienceBloc, Question } from '../../data/interfaces/create_audience';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { draggableItems } from '@tribu/surveys';
import { useState } from 'react';
import { FaPlus } from 'react-icons/fa6';
import { IoMdClose } from 'react-icons/io';
import { motion, AnimatePresence } from 'framer-motion';

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

  const [selectedField, setSelectedField] = useState<
    AllFormInterfacesType | undefined
  >();
  const [inputValue, setInputValue] = useState<string | number | undefined>();
  const [addedItems, setAddedItems] = useState<(string | number)[]>([]);

  const resetAll = () => {
    reset();
    setAction(false);
    setAddedItems([]);
    setInputValue('');
    setSelectedField(undefined);
  };

  const onSubmit = (data: Record<string, any>) => {
    const findQuestion = draggableItems.find(
      // (item) => item.label == data['type']
      (item) => item.label == selectedField?.label
    );

    if (findQuestion) {
      const updateQuestion: AllFormInterfacesType = {
        ...findQuestion,
        label: data['label'],
        placeholder: data['placeholder'],
        name: generateFormName(data['label'], ''),
      };

      if (
        updateQuestion.type == FormFields.CHECKBOX ||
        updateQuestion.type == FormFields.RADIO
      ) {
        updateQuestion.elements = addedItems;
      }

      const question: Question = {
        key: currentBloc.key,
        name: updateQuestion.name,
        description: updateQuestion.value,
        metaData: updateQuestion,
        type: updateQuestion.type,
      };
      onAddField(question);
      resetAll();
    }
  };

  const labels = draggableItems
    .filter((field) => {
      const condition =
        field.type == FormFields.INPUT ||
        field.type == FormFields.TEXTAREA ||
        field.type == FormFields.RADIO ||
        field.type == FormFields.CHECKBOX ||
        field.type == FormFields.NUMBER_INPUT;
      return condition;
    })
    .map((item) => item.label);

  console.log('items', labels);
  console.log('draggableItems', draggableItems);

  return (
    <div>
      <AppModalDialog
        isOpen={action}
        onClose={() => {
          resetAll();
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
              elements={labels}
              id=""
              name="type"
              index={0}
              control={control}
              label="Select Field Type"
              activeSectionIndex={0}
              onChange={(e) => {
                const item = draggableItems.find(
                  (item) => item.label == e.target.value
                );
                setSelectedField(item);
              }}
            />

            {(selectedField?.type == FormFields.CHECKBOX ||
              selectedField?.type == FormFields.RADIO) && (
              <AnimatePresence>
                <motion.div
                  key={selectedField.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex flex-row justify-between items-end w-full">
                    <div className="w-full">
                      <AppInput
                        label="Add Item"
                        id=""
                        value={inputValue}
                        type={FormFields.INPUT}
                        placeholder="Enter Item Name"
                        onChange={(e) => {
                          setInputValue(e.target.value);
                        }}
                      />
                    </div>
                    <FaPlus
                      className="mb-1 bg-secondary-100 cursor-pointer ml-2 rounded-full p-2"
                      size={35}
                      onClick={() => {
                        if (inputValue) {
                          setAddedItems([...addedItems, inputValue]);
                          setInputValue('');
                        }
                      }}
                    />
                  </div>
                </motion.div>
              </AnimatePresence>
            )}

            {addedItems.length > 0 && (
              <>
                <h2 className="text-md font-medium mt-4">Added Items</h2>
                <div className="flex flex-wrap mt-2 gap-2">
                  <AnimatePresence>
                    {addedItems.map((item) => (
                      <motion.div
                        key={item}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.2 }}
                      >
                        <AppChip
                          label={item.toString()}
                          className="!py-1 !px-3 !text-sm"
                          icon={
                            <IoMdClose
                              className="hover:bg-gray-100 rounded-full w-6 h-6 p-1 "
                              onClick={() =>
                                setAddedItems((prev) =>
                                  prev.filter((i) => i !== item)
                                )
                              }
                            />
                          }
                        />
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              </>
            )}

            <div className="flex justify-end mt-4 py-4 border-t">
              <AppButton
                label="Cancel"
                onClick={() => {
                  resetAll();
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
