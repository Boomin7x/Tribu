import { FC } from 'react';
import { NumberInputInterface } from '@tribu/forms';
import AppNumberInput from '../base/app_number_input';
import { Control, Controller, FieldValues } from 'react-hook-form';
import { generateFormName } from '@tribu/forms';
import AppErrorMessage from '../base/app_error2_message';

interface NumberInputInterfaceInterface extends NumberInputInterface {
  control?: Control<FieldValues>;
}
export const FormNumberField = (props: NumberInputInterfaceInterface) => {
  const name = props.name ?? generateFormName(props.label, props.id);

  return (
    <Controller
      defaultValue={props.value}
      name={name}
      control={props.control}
      render={({ field: { onChange, value }, fieldState: { error } }) => {
        return (
          <>
            <AppNumberInput
              {...props}
              onChange={(e) => {
                onChange(e);
                if (props.onChange) props?.onChange(e);
              }}
              value={value}
            />

            <AppErrorMessage message={error?.message} />
          </>
        );
      }}
    />
  );
};

export default FormNumberField;
