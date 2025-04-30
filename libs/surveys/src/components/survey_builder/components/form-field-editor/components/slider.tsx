import { Box } from '@mui/system';
import { SliderInterface, AppInput, AppNumberInput } from '@tribu/forms';
import { useDispatch } from 'react-redux';
import {
  setSelectedField,
  updateFormField,
} from '../../../data/logic/form.slice';

const FormSliderRenderer = (formItem: SliderInterface) => {
  const dispatch = useDispatch();

  return (
    <Box width={'100%'}>
      <AppInput
        label="Label"
        placeholder="Enter Label"
        id={formItem.id}
        // value={formItem.value}
        onChange={(e) => {
          const updatedItem = { ...formItem, label: e.target.value };
          dispatch(updateFormField(updatedItem));
        }}
        type="text"
      />

      <div className="flex justify-between my-2">
        <AppNumberInput
          label="Min"
          placeholder="Enter Min"
          id={formItem.id}
          // value={formItem.value}
          onChange={(e) => {
            const updatedItem = { ...formItem, min: Number(e.target.value) };
            dispatch(updateFormField(updatedItem));
            dispatch(setSelectedField(updatedItem));
          }}
        />
        <div className="mx-2"></div>
        <AppNumberInput
          label="Max"
          placeholder="Enter Max"
          id={formItem.id}
          // value={formItem.value}
          onChange={(e) => {
            const updatedItem = { ...formItem, max: Number(e.target.value) };
            dispatch(updateFormField(updatedItem));
            dispatch(setSelectedField(updatedItem));
          }}
        />
      </div>

      <AppNumberInput
        label="Steps"
        placeholder="Enter Steps"
        id={formItem.id}
        // value={formItem.value}
        onChange={(e) => {
          const updatedItem = { ...formItem, steps: Number(e.target.value) };
          dispatch(updateFormField(updatedItem));
          dispatch(setSelectedField(updatedItem));
        }}
      />
    </Box>
  );
};

export default FormSliderRenderer;
