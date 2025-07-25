import {
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { useEffect, useState } from 'react';

export type AppSelectType = {
  id: string | undefined;
  hasBorder?: boolean;
  value?: string | number | undefined;
  onChange?: (
    event: SelectChangeEvent<string | number | readonly string[]>,
    child: React.ReactNode
  ) => void;
  items: number[] | string[] | undefined;
  fullWidth?: boolean;
  width?: string;
  prefix?: string;
  label?: string;
};
export const AppSelect = ({ ...props }: AppSelectType) => {
  const [fieldValue, setFieldValue] = useState<
    string | number | readonly string[] | undefined
  >(props.value);

  return (
    <FormControl
      fullWidth={props.fullWidth}
      sx={{ width: props.width }}
      className="flex flex-col"
    >
      <label
        htmlFor="email"
        className="block text-sm/6 font-medium text-gray-900"
      >
        {props.label}
      </label>
      <Select
        defaultValue={fieldValue}
        displayEmpty
        placeholder={props.label}
        size="small"
        value={fieldValue}
        onChange={(e, child) => {
          if (props.onChange) props.onChange(e, child);
          setFieldValue(e.target.value);
        }}
        inputProps={{ 'aria-label': 'Without label' }}
        className="border-1 border-gray-50 w-full"
      >
        {props.label && (
          <MenuItem disabled value="">
            <em className="text-gray-500 text-sm">Select {props.label}</em>
          </MenuItem>
        )}
        {props.items &&
          props.items.map((e, index) => (
            <MenuItem key={index} value={e} sx={{ fontSize: 14 }}>
              {props.prefix == null ? e : `${props.prefix}${e}`}
            </MenuItem>
          ))}
      </Select>
    </FormControl>
  );
};

export default AppSelect;
