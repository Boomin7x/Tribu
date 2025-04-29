import { HTMLAttributes } from 'react';

export interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
  count: number;
}
export const SkeletonBar = ({ count, ...props }: SkeletonProps) => {
  return (
    <div {...props}>
      <div className="w-full flex items-center flex-col animate-pulse">
        {Array.from({ length: count }).map((_, index) => (
          <div
            key={index}
            className="w-full h-5 rounded-sm bg-gray-300 mt-2"
          ></div>
        ))}
      </div>
    </div>
  );
};

export default SkeletonBar;
