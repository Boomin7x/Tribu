import * as React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import Button from '@mui/material/Button';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker, DatePickerProps } from '@mui/x-date-pickers/DatePicker';

export interface ButtonFieldProps {
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  label?: string;
  id?: string;
  disabled?: boolean;
  InputProps?: {
    ref?: React.Ref<any>;
  };
  inputProps?: {
    'aria-label'?: string;
  };
}

export function ButtonField(props: ButtonFieldProps) {
  const {
    setOpen,
    label,
    id,
    disabled,
    InputProps: { ref } = {},
    inputProps: { 'aria-label': ariaLabel } = {},
  } = props;

  return (
    <Button
      variant="text"
      id={id}
      disabled={disabled}
      ref={ref}
      aria-label={ariaLabel}
      onClick={() => setOpen?.((prev) => !prev)}
      sx={{ textTransform: 'capitalize', color: '#000000' }}
    >
      {label ? `${label}` : 'DD-MM-YY'}
    </Button>
  );
}

export function ButtonDatePicker(
  props: Omit<DatePickerProps<any>, 'open' | 'onOpen' | 'onClose'>
) {
  const [open, setOpen] = React.useState(false);

  return (
    <DatePicker
      slots={{ field: ButtonField, ...props.slots }}
      slotProps={{
        field: { setOpen } as any,
        ...props.slotProps,
      }}
      {...props}
      open={open}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
    />
  );
}

export type CustomDateFieldType = {
  id?: string;
  placeholder?: string;
  onChange?: (value: Dayjs) => Dayjs | void;
  hasBorder?: boolean;
  value?: string | number;
  width?: string;
};

export const CustomDateField = (props: CustomDateFieldType) => {
  const [initialValue, setValue] = React.useState<Dayjs | null>(null);

  React.useEffect(() => {
    if (props.value != null) {
      setValue(dayjs(props.value));
    }
  }, [props.value]);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <ButtonDatePicker
        label={
          initialValue == null
            ? props.placeholder
            : initialValue.format('DD-MM-YYYY')
        }
        value={initialValue}
        onChange={(newValue) => {
          setValue(newValue);
          if (props.onChange && newValue) {
            const newDate = dayjs(newValue);
            props.onChange(newDate);
          }
        }}
      />
    </LocalizationProvider>
  );
};

export default CustomDateField;
