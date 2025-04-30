import { Box } from '@mui/system';
import { AppInput, TextInputInterface } from '@tribu/forms';
import { useDispatch } from 'react-redux';
import { updateFormField } from '../../../data/logic/form.slice';
export const FormInputRenderer = (formItem: TextInputInterface) => {
  const dispatch = useDispatch();

  return (
    <Box width={'100%'}>
      <AppInput
        placeholder="Enter label"
        label="Label"
        id={formItem.id}
        onChange={(e) => {
          const updatedItem = { ...formItem, label: e.target.value };
          dispatch(updateFormField(updatedItem));
        }}
        type={formItem.type}
      />
      <Box marginBottom={2} />
      <AppInput
        placeholder="Enter placeholder"
        label="Placeholder"
        id={formItem.id}
        onChange={(e) => {
          const updatedItem = { ...formItem, placeholder: e.target.value };
          console.log(updatedItem);
          dispatch(updateFormField(updatedItem));
        }}
        type={formItem.type}
      />
    </Box>
  );
};

export default FormInputRenderer;
