import { Box } from '@mui/system';
import { MatrixInterface, AppInput } from '@tribu/forms';
import { useDispatch } from 'react-redux';
import {
  setSelectedField,
  updateFormField,
} from '../../../data/logic/form.slice';
import { IconButton, Stack, Typography } from '@mui/material';
import FieldIcon from '../../forms/base/field_icon';
import colors from '../../../utils/styles/colors.module.scss';
import trash from '../../../assets/icons/trash.svg';
import { Add } from '@mui/icons-material';
import { GoTrash } from 'react-icons/go';
export const FormMatrixRenderer = (formItem: MatrixInterface) => {
  const dispatch = useDispatch();

  return (
    <Box width={'100%'}>
      <AppInput
        placeholder="Label"
        label="Label"
        id={formItem.id}
        value={formItem.value}
        onChange={(e) => {
          const updatedItem = { ...formItem, label: e.target.value };
          console.log(updatedItem);
          dispatch(updateFormField(updatedItem));
        }}
        type={formItem.type}
      />
      <Box marginBottom={2} />

      <Box>
        <Typography>Rows</Typography>
        <Box
          width={'100%'}
          sx={{
            marginTop: 1,
            display: formItem.rows?.length > 0 ? 'block' : 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {formItem.rows &&
            formItem.rows.map((item, index) => {
              return (
                <div>
                  <div
                    className="mt-2 px-2 flex border items-center"
                    key={index}
                  >
                    <div>
                      <GoTrash
                        className="p-2 bg-gray-200 cursor-pointer hover:bg-gray-300 rounded-sm"
                        size={30}
                        onClick={() => {
                          const newValues = formItem.rows.filter(
                            (_, i) => i != index
                          );
                          const newSelectedItem = {
                            ...formItem,
                            rows: newValues,
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
                        const newField = {
                          ...item,
                          label: item.label,
                          value: e.target.value,
                        };
                        const radioItems = [...formItem.rows];
                        radioItems[index] = newField;
                        const newSelectedItem = {
                          ...formItem,
                          rows: radioItems,
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
                marginTop: formItem.rows?.length > 0 ? 2 : 0,
              }}
              onClick={() => {
                const newElements = [
                  ...formItem.rows,
                  { label: 'Label', value: '' },
                ];
                const newItem = { ...formItem, ...{ rows: newElements } };
                dispatch(setSelectedField(newItem));
              }}
            >
              <Add />
            </IconButton>
          </Box>
        </Box>
      </Box>

      <Box>
        <Typography>Columns</Typography>
        <Box
          width={'100%'}
          sx={{
            marginTop: 2,
            display: formItem.columns?.length > 0 ? 'block' : 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {formItem.columns &&
            formItem.columns.map((item, index) => {
              return (
                <div className="mt-2 px-2 flex border items-center" key={index}>
                  <div>
                    <GoTrash
                      className="p-2 bg-gray-200 cursor-pointer hover:bg-gray-300 rounded-sm"
                      size={30}
                      onClick={() => {
                        const newValues = formItem.columns.filter(
                          (_, i) => i != index
                        );
                        const newSelectedItem = {
                          ...formItem,
                          columns: newValues,
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
                      const newField = {
                        ...item,
                        label: item.label,
                        value: e.target.value,
                      };
                      const radioItems = [...formItem.columns];
                      radioItems[index] = newField;
                      const newSelectedItem = {
                        ...formItem,
                        columns: radioItems,
                      };
                      dispatch(setSelectedField(newSelectedItem));
                      dispatch(updateFormField(newSelectedItem));
                    }}
                  />
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
                marginTop: formItem.columns?.length > 0 ? 2 : 0,
              }}
              onClick={() => {
                const newElements = [
                  ...formItem.columns,
                  { label: 'Label', value: '' },
                ];
                const newItem = { ...formItem, ...{ columns: newElements } };
                dispatch(setSelectedField(newItem));
              }}
            >
              <Add />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default FormMatrixRenderer;
