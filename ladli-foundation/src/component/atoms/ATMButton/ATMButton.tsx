import React from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  title: string;
  isLoading?: boolean;
  diabled?: boolean;
  className?: string;
  onClick?: (value: any) => void;
};

const ATMButton = ({
  title,
  isLoading,
  diabled,
  className,
  onClick,
}: Props) => {
  return (
    <div>
      {isLoading ? (
        <div>
          <button type="button" className="bg-indigo-500 ..." disabled>
            <svg
              className="animate-spin h-5 w-5 mr-3 ..."
              viewBox="0 0 24 24"
            ></svg>
            Loading...
          </button>
        </div>
      ) : (
        <div>
          <button
            onClick={onClick}
            className={twMerge(
              `text-white px-5 py-2  bg-[#EA248F] pulse rounded-full w-full ${className}`
            )}
          >
            {title}
          </button>
        </div>
      )}
    </div>
  );
};

export default ATMButton;
