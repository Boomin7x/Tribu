import { TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import { styleFormFields } from '../../utils/formatters';
import { FormFields } from '../../enum';
export type AppNumberInputType = {
  placeholder?: string | undefined;
  label?: string | undefined;
  id: string | undefined;
  hideBorders?: boolean;
  value?: number | undefined;
  max?: number;
  min?: number;
  isPreview?: boolean;
  startAdornment?: JSX.Element;
  onChange:
    | React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
    | undefined;
  styles?: any | undefined;
};
export const AppNumberInput = ({ ...props }: AppNumberInputType) => {
  useEffect(() => {
    // if (typeof props.value == "number") {
    //   if (props.value != 0) setFieldValue(props.value);
    setFieldValue(props.value ?? null);
    // console.log('Re-rendering', props.value);
    // }
  }, [props.value]);
  const [fieldValue, setFieldValue] = useState<number | null>(null);

  return (
    <>
      <label
        htmlFor="email"
        className="block text-sm/6 font-medium text-gray-900"
      >
        {props.label}
      </label>
      <TextField
        fullWidth
        variant="outlined"
        id={props.id}
        type="number"
        size="small"
        inputProps={{ max: props.max, min: props.min }}
        placeholder={props.placeholder}
        onChange={(e) => {
          const val = Number(e.target.value);
          props.onChange && props.onChange(e);
          setFieldValue(val);
        }}
        value={fieldValue ?? ''}
        InputProps={{
          startAdornment: props.startAdornment,
          type: FormFields.NUMBER_INPUT,
          style: { ...props.styles },
        }}
        sx={
          props.hideBorders == false || props.hideBorders == undefined
            ? {
                '& .MuiFormLabel-root': {
                  fontSize: '0.875rem',
                },
                '& input::placeholder': {
                  fontSize: '0.875rem',
                },
              }
            : {
                border: 'none',
                fontStyle: 'italic',
                '& fieldset': { border: 'none' },
                ':focus': {
                  border: '1px solid #FFFFFF',
                  '& fieldset': { border: 'none' },
                },
                ':hover': {
                  border: 'none',
                  '& fieldset': { border: 'none' },
                },
              }
        }
      />
    </>
  );
};

export default AppNumberInput;
