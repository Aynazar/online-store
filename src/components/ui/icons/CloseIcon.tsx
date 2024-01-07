import { memo } from "react";

const CloseIcon = () => {
  return (
    <svg
      width="31"
      height="32"
      viewBox="0 0 31 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M1 1.5L30 30.5M30 1.5L1 30.5" stroke="white" strokeWidth="2" />
    </svg>
  );
};

export default memo(CloseIcon);
