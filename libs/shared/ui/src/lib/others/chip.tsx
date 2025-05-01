import React, { ButtonHTMLAttributes, ReactNode } from 'react';

export interface ChipProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;

  icon?: ReactNode;
}
export const AppChip: React.FC<ChipProps> = ({ label, ...props }) => {
  return (
    <button
      {...props}
      className={`bg-secondary-500 flex text-white items-center justify-center rounded-3xl px-5 ${
        props.className
      } ${props.icon && 'gap-2'}`}
    >
      {label}
      {props.icon && props.icon}
    </button>
  );
};

export default AppChip;
