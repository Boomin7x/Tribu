import { CheckboxInterface, AppInput, RadioInterface } from '@tribu/forms';
import { Box, IconButton, Stack } from '@mui/material';
import { Add } from '@mui/icons-material';
import colors from '../../../utils/styles/colors.module.scss';
import { GoTrash } from 'react-icons/go';
import { useDispatch } from 'react-redux';
import {
  setSelectedField,
  updateFormField,
} from '../../../data/logic/form.slice';

const FormRadioRenderer = (formItem: RadioInterface | CheckboxInterface) => {
  const dispatch = useDispatch();
  return (
    <Box
      width={'100%'}
      sx={{
        marginTop: 2,
        display: formItem.elements?.length > 0 ? 'block' : 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <label className="block text-sm/6 font-medium text-gray-900">
        All Items
      </label>
      {formItem.elements &&
        formItem.elements.map((item, index) => {
          return (
            <div>
              <div className="mt-2 px-2 flex border items-center" key={index}>
                <div>
                  <GoTrash
                    className="p-2 bg-gray-200 cursor-pointer hover:bg-gray-300 rounded-sm"
                    size={30}
                    onClick={() => {
                      const newValues = formItem.elements.filter(
                        (_, i) => i != index
                      );
                      const newSelectedItem = {
                        ...formItem,
                        elements: newValues,
                      };
                      dispatch(setSelectedField(newSelectedItem));
                      dispatch(updateFormField(newSelectedItem));
                    }}
                  />
                </div>

                <AppInput
                  // value={item}
                  placeholder="Enter Item"
                  key={index}
                  type="text"
                  hideBorders={true}
                  id={`${item}`}
                  onChange={(e: any) => {
                    const radioItems = [...formItem.elements];
                    radioItems[index] = e.target.value;
                    const newSelectedItem = {
                      ...formItem,
                      elements: radioItems,
                    };
                    dispatch(setSelectedField(newSelectedItem));
                    dispatch(updateFormField(newSelectedItem));
                  }}
                />
              </div>
            </div>
          );
        })}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'end',
        }}
      >
        <IconButton
          aria-label="add"
          sx={{
            bgcolor: colors.primary,
            marginTop: formItem.elements?.length > 0 ? 2 : 0,
          }}
          onClick={() => {
            const newElements = [
              ...formItem.elements,
              { label: 'Label', value: '' },
            ];
            const newItem = { ...formItem, ...{ elements: newElements } };
            dispatch(setSelectedField(newItem));
          }}
        >
          <Add />
        </IconButton>
      </Box>
    </Box>
  );
};

export default FormRadioRenderer;
