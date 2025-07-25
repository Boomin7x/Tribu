import { Box } from '@mui/system';

import { RatingInterface, AppNumberInput, AppInput } from '@tribu/forms';
import { useDispatch } from 'react-redux';
import {
  setSelectedField,
  updateFormField,
} from '../../../data/logic/form.slice';

const FormRatingRenderer = (formItem: RatingInterface) => {
  const dispatch = useDispatch();

  return (
    <Box width={'100%'}>
      <AppInput
        placeholder="Enter Label"
        label="Label"
        id={formItem.id}
        onChange={(e) => {
          const updatedItem = { ...formItem, label: e.target.value };
          dispatch(updateFormField(updatedItem));
        }}
        type="text"
      />
      <Box marginBottom={2} />
      <AppNumberInput
        placeholder="Enter Max"
        label="Max"
        id={formItem.id}
        onChange={(e) => {
          const updatedItem = { ...formItem, max: Number(e.target.value) };
          dispatch(updateFormField(updatedItem));
          dispatch(setSelectedField(updatedItem));
        }}
      />
    </Box>
  );
};

export default FormRatingRenderer;
