/* eslint-disable @typescript-eslint/ban-ts-comment */
import { FC, Fragment, ReactNode } from 'react';
import { Box } from '@mui/material';
import { Draggable } from 'react-beautiful-dnd';
interface FormDraggableWrapperProps {
  index: number;
  children: ReactNode;
}
export const FormDraggableWrapper: FC<FormDraggableWrapperProps> = ({
  index,
  children,
}) => {
  return (
    <Fragment>
      {/* @ts-expect-error */}
      <Draggable draggableId={index.toString()} index={index}>
        {(provided) => (
          <Box
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            sx={{
              mb: 3,
              width: '100%',
            }}
          >
            {children}
          </Box>
        )}
      </Draggable>
    </Fragment>
  );
};

export default FormDraggableWrapper;
