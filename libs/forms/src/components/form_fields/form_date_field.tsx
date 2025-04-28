import { generateFormName, TextDateInterface } from '@tribu/forms';
import { AppDatePicker } from '../base/app_date_field';
import { Control, Controller, FieldValues } from 'react-hook-form';
import AppErrorMessage from '../base/app_error2_message';

interface FormDateFieldInterface extends TextDateInterface {
  control?: Control<FieldValues>;
}
export const FormDateField = (props: FormDateFieldInterface) => {
  const name = props.name ?? generateFormName(props.label, props.id);

  return (
    <Controller
      defaultValue={props.value}
      name={name}
      control={props.control}
      render={({ field: { onChange, value }, fieldState: { error } }) => {
        return (
          <>
            <AppDatePicker
              hasBorder={props.isPreview}
              minDate={props.minDate}
              maxDate={props.maxDate}
              {...props}
              id={props.id}
              onChange={(date) => {
                // const newDate = dayjs(date);
                onChange(date);
                if (props.onChange) props?.onChange(date);

                return date;
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

export default FormDateField;
