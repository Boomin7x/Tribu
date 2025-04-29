import { Box } from '@mui/system';
import {
  NumberInputInterface,
  AppInput,
  SliderInterface,
  AppNumberInput,
} from '@tribu/forms';
import { useDispatch } from 'react-redux';
import {
  setSelectedField,
  updateFormField,
} from '../../../data/logic/form.slice';
import { Stack } from '@mui/material';
export const FormInputNumberRenderer = (
  formItem: NumberInputInterface | SliderInterface
) => {
  const dispatch = useDispatch();

  return (
    <Box width={'100%'}>
      <AppInput
        placeholder="Enter label"
        label="Label"
        id={formItem.id}
        // value={formItem.label == 'Label' ? '' : formItem.label}
        onChange={(e) => {
          const updatedItem = { ...formItem, label: e.target.value };
          dispatch(updateFormField(updatedItem));
        }}
        type="text"
      />

      <div className="flex my-2">
        <AppNumberInput
          placeholder="Enter Min"
          label="Min"
          id={formItem.id}
          value={formItem.min}
          min={0}
          onChange={(e) => {
            const updatedItem = { ...formItem, min: Number(e.target.value) };
            dispatch(updateFormField(updatedItem));
            dispatch(setSelectedField(updatedItem));
          }}
        />

        <div className="mx-2"></div>
        <AppNumberInput
          placeholder="Enter Max"
          label="Max"
          id={formItem.id}
          value={formItem.min}
          min={0}
          onChange={(e) => {
            const updatedItem = { ...formItem, max: Number(e.target.value) };
            dispatch(updateFormField(updatedItem));
            dispatch(setSelectedField(updatedItem));
          }}
        />
      </div>
    </Box>
  );
};

export default FormInputNumberRenderer;
