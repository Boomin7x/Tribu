import { FC } from 'react';
import { Control, Controller, FieldValues } from 'react-hook-form';
import { generateFormName } from '@tribu/forms';
import AppErrorMessage from '../base/app_error2_message';
import { TextInputInterface } from '../../interfaces';
import { AppInput } from '../base/app_input';
interface FormInputFieldInterface extends TextInputInterface {
  // control?: Control<FieldValues>;
  control?: Control<FieldValues> | any;
}
export const FormInputField = (props: FormInputFieldInterface) => {
  const name = props.name ?? generateFormName(props.label, props.id);

  return (
    <Controller
      defaultValue={props.value}
      name={name}
      control={props.control}
      render={({ field: { onChange, value }, fieldState: { error } }) => {
        return (
          <>
            <AppInput
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

export default FormInputField;
