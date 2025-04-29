import { TextField } from '@mui/material';
import { useEffect, useState } from 'react';

export type AppTextAreaType = {
  label?: string | undefined;
  placeholder?: string | undefined;
  id?: string | undefined;
  className?: string | undefined;
  style?: React.CSSProperties | undefined;
  hideBorders?: boolean;
  maxLength?: number;
  value?: string | number | readonly string[] | undefined;
  onChange:
    | React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
    | undefined;
  isPreview?: boolean;
};
export const AppTextArea = ({ ...props }) => {
  useEffect(() => {
    if (typeof props.value == 'string') {
      setFieldValue(props.value);
    }
  }, [props.value]);
  const [fieldValue, setFieldValue] = useState<string>('');

  return (
    <>
      {props.label && props.label.length > 2 && (
        <label className="block text-sm/6 font-medium text-gray-900">
          {props.label}
        </label>
      )}
      <TextField
        fullWidth
        size="small"
        variant="outlined"
        id={props.id}
        multiline
        minRows={4}
        maxRows={7}
        inputProps={{
          maxLength: props.maxLength,
          style: props.style,
        }}
        placeholder={props.placeholder}
        onChange={(e) => {
          props.onChange && props.onChange(e);
          setFieldValue(e.target.value);
        }}
        value={fieldValue}
        // className={props.className}
        // style={props.style}
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

export default AppTextArea;
