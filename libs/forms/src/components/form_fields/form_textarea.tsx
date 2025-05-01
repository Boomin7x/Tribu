import AppTextArea from '../base/app_text_area';
import { Control, Controller, FieldValues } from 'react-hook-form';
import AppErrorMessage from '../base/app_error2_message';
import { generateFormName } from '@tribu/forms';
import { TextAreaInterface } from '@tribu/forms';

interface FormTextAreaInterface extends TextAreaInterface {
  control?: Control<FieldValues> | any;
}
export const FormTextArea = (props: FormTextAreaInterface) => {
  const name = props.name ?? generateFormName(props.label, props.id);

  return (
    <Controller
      name={name}
      control={props.control}
      render={({ field: { onChange, value }, fieldState: { error } }) => {
        return (
          <>
            <AppTextArea
              {...props}
              onChange={(e: any) => {
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

export default FormTextArea;
