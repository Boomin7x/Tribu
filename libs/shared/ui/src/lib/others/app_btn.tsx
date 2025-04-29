import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import AppLoader from './loader';

export interface AppButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  icon?: ReactNode;
  isLoading?: boolean;
}
export const AppButton: React.FC<AppButtonProps> = ({
  label,
  icon,
  isLoading,
  ...props
}) => {
  return (
    <button
      {...props}
      className={`cursor-pointer transition-colors duration-500 ${
        props.disabled
          ? '!bg-gray-400 !text-gray-700 cursor-not-allowed'
          : 'bg-secondary-500 hover:bg-secondary-600 text-white'
      } border-none text-sm rounded-sm px-5 flex po items-center outline-none gap-2 ${
        props.className
      }`}
      disabled={props.disabled}
    >
      {isLoading ? (
        <AppLoader size={20} />
      ) : (
        <span className="flex justify-center items-center gap-1">
          <span>{icon && icon}</span> <span> {label}</span>
        </span>
      )}
    </button>
  );
};

export default AppButton;
