import { FC } from 'react';
import { Control, Controller, FieldValues } from 'react-hook-form';
import { AppSelect, generateFormName } from '@tribu/forms';
import AppErrorMessage from '../base/app_error2_message';
import { RadioInterface } from '../../interfaces';
interface FormSelectInterface extends RadioInterface {
  control?: Control<FieldValues>;
}
export const FormSelect = (props: FormSelectInterface) => {
  const name = props.name ?? generateFormName(props.label, props.id);

  // console.log('FormSelect props', props.value);
  // console.log('FormSelect props', name);
  return (
    <Controller
      defaultValue={props.value}
      name={name}
      control={props.control}
      render={({ field: { onChange, value }, fieldState: { error } }) => {
        return (
          <>
            <AppSelect
              {...props}
              items={props.elements}
              hasBorder={props.isPreview}
              fullWidth
              onChange={(e, child) => {
                onChange(e);
                if (props.onChange) props.onChange(e, child as boolean);
              }}
              value={value}
              // value={props.value}
            />
            <AppErrorMessage message={error?.message} />
          </>
        );
      }}
    />
  );
};

export default FormSelect;
