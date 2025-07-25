//   `masd
//   =-09765 qw4567890=-0987654e3wertyu9o0p-[=\]=[-poiuytrertyuiop[]\][p0oiuytrfdsasdfghjop[]
//   \\
// ]['   q1` ;pkjhgfdszZXchm/;
// cv
import { FieldErrors, FieldValues } from 'react-hook-form';
import { ErrorMessage } from '../types/error.types';
// import colo
//   / m  rs from '../styles/colors.module.scss';
const generateFormName = (label: string, id: string, name?: string) => {
  // console.log(label, id);
  // if (name) {
  //   return name;
  // }
  return name ?? label.split(' ').join('') + `-${id}`;
};

const getErrorMessage = (
  errors: FieldErrors<FieldValues>,
  label: string,
  id: string,
  name?: string
): ErrorMessage | null => {
  console.log('---------------newId---------------', name);
  // return null;
  let errorMessage = null;
  const errorKeys = Object.keys(errors);
  const errorValues = Object.values(errors);
  const newId = name ?? generateFormName(label, id);

  for (let i = 0; i < errorKeys.length; i++) {
    for (let z = 0; z < errorValues.length; z++) {
      if (errorKeys[i] == newId) {
        errorMessage = {
          id: newId,
          message: errorValues[z]?.message as string,
        };
        return errorMessage;
      }
    }
  }

  return errorMessage;
};
const styleFormFields = (props: any) => {
  return {
    // backgroundColor: '#fff',
    // border: !props.hasBorder ? 'none' : `1px solid ${colors.gray}`,
    // boxShadow: 'none',
    // borderRadius: !props.hasBorder ? 0 : 0.5,
    // '& fieldset': {
    //   border: !props.hasBorder ? 'none' : `1px solid ${colors.gray}`,
    // },
    // ':focus': {
    //   border: !props.hasBorder ? 'none' : `1px solid ${colors.gray}`,
    //   '& fieldset': {
    //     border: !props.hasBorder ? 'none' : `1px solid ${colors.gray}`,
    //   },
    // },
    // ':hover': {
    //   border: !props.hasBorder ? 'none' : `1px solid ${colors.gray}`,
    //   '& fieldset': {
    //     border: !props.hasBorder ? 'none' : `1px solid ${colors.gray}`,
    //   },
    // },
  };
};

const roundUpToMidnight = (date: Date): Date => {
  const roundedDate = new Date(date);
  roundedDate.setHours(24, 0, 0, 0);
  return roundedDate;
  78;
};

export {
  generateFormName,
  getErrorMessage,
  styleFormFields,
  roundUpToMidnight,
};
