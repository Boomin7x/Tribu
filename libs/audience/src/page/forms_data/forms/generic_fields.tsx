import {
  AllFormInterfacesType,
  FormInputField,
  FormFields,
  FormDateField,
  FormNumberField,
  FormSelect,
  generateFormName,
  FormMultiSelect,
  FormTextArea,
} from '@tribu/forms';
import { useState } from 'react';
import { FieldValues } from 'react-hook-form';
import { GoTrash } from 'react-icons/go';
import { motion, AnimatePresence } from 'framer-motion';

interface AudienceGenericFormFIeldsProps<T extends FieldValues> {
  data?: any;
  control: any;
  formFields: AllFormInterfacesType[];
  formTitle: string;
  updateAudienceGenericFormFIelds: (data: T) => void;
  updateField: (index: number, value: any) => void;
  onDeleteField: (index: number, value: any) => void;
}
export const AudienceGenericFormFIelds = <T extends FieldValues>({
  data,
  updateAudienceGenericFormFIelds,
  formFields,
  control,
  formTitle,
  updateField,
  onDeleteField,
}: AudienceGenericFormFIeldsProps<T>) => {
  const generateField = (field: AllFormInterfacesType, index: number) => {
    const value = data;
    const handleChange = (fieldName: string, updatedValue: any) => {
      updateAudienceGenericFormFIelds({
        ...data,
        [fieldName]: updatedValue,
      } as T);

      updateField(index, updatedValue);
    };

    const name = generateFormName(formTitle, field.label);

    // console.log('field.value', field.value);

    const newField = { ...field, name };

    switch (newField.type) {
      case FormFields.INPUT:
        return (
          <FormInputField
            {...newField}
            control={control}
            type={FormFields.INPUT}
            onChange={(e: any) => handleChange(newField.name, e.target.value)}
          />
        );

      case FormFields.NUMBER_INPUT:
        return (
          <FormNumberField
            {...newField}
            control={control}
            onChange={(e) => handleChange(newField.name, e.target.value)}
          />
        );

      case FormFields.DATE_TIME:
        return (
          <FormDateField
            {...newField}
            control={control}
            onChange={(e: Date) => {
              handleChange(newField.name, e.toDateString());
              return e;
            }}
          />
        );

      case FormFields.RADIO:
        return (
          <FormSelect
            {...newField}
            // value={value}
            control={control}
            onChange={(e) => handleChange(newField.name, e.target.value)}
          />
        );

      case FormFields.CHECKBOX:
        return (
          <FormMultiSelect
            {...newField}
            control={control}
            onChange={(e) => handleChange(newField.name, e.target.value)}
          />
        );
      case FormFields.TEXTAREA:
        return (
          <FormTextArea
            {...newField}
            control={control}
            type={FormFields.INPUT}
            onChange={(e: any) => handleChange(newField.name, e.target.value)}
          />
        );

      default:
        return (
          <p className="text-sm border rounded-md px-3 py-2 border-red-500">
            <strong>{newField.type}</strong> field type not supported!
          </p>
        );
    }
  };

  const [hoveredBloc, setHoveredBloc] = useState<
    AllFormInterfacesType | undefined
  >(undefined);
  return (
    <div className="w-full mb-10">
      <AnimatePresence>
        {formFields.map((newField, key) => (
          <motion.div
            // key={`${newField.name}${newField.label}-${key}`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
          >
            <div
              className="mb-3 flex items-center justify-between gap-x-2"
              key={key}
              onMouseEnter={() => setHoveredBloc(newField)}
            >
              <div className="w-full">{generateField(newField, key)}</div>
              <div
                className={`transition-all duration-300 ease-in-out ${
                  newField.name === hoveredBloc?.name ? '' : 'scale-0'
                }`}
              >
                <GoTrash
                  className="p-2  bg-gray-200 cursor-pointer hover:bg-gray-300 rounded-sm text-red-500"
                  size={30}
                  onClick={() => {
                    onDeleteField(key, newField);
                  }}
                />
              </div>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default AudienceGenericFormFIelds;
