import { HTMLAttributes } from 'react';
import { AppButton } from '../others';

interface ErrorCardProps extends HTMLAttributes<HTMLDivElement> {
  message: string;
  title: string;
  callback?: () => void;
}
export const ErrorCard = ({ title, message, ...props }: ErrorCardProps) => {
  return (
    <div
      {...props}
      className={`item-center w-full flex flex-col gap-y-2 justify-center h-[50vh] bg-purple-50 items-center ${
        props.className || ''
      }`}
    >
      <p className="text-md">{title}</p>
      {<p>{message}</p>}
      {props.callback && (
        <AppButton
          className="mt-2 px-4 py-2"
          onClick={props.callback}
          label="Retry"
        />
      )}
    </div>
  );
};

export default ErrorCard;
