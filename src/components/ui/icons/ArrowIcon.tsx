import { memo } from "react";

const ArrowIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="18"
      viewBox="0 0 22 18"
      fill="none"
    >
      <path
        d="M0.5 9H20.5M20.5 9L9.14865 0.5M20.5 9L9.14865 17.5"
        stroke="white"
      />
    </svg>
  );
};

export default memo(ArrowIcon);

export namespace Icons {
  export const ArrowIconSolid = () => {
    return (
      <svg
        width="21"
        height="19"
        viewBox="0 0 21 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 9.5H20M20 9.5L8.64865 1M20 9.5L8.64865 18"
          stroke="#EB2D66"
        />
      </svg>
    );
  };

  export const ArrowIconSlider = () => {
    return (
      <svg
        width="17"
        height="32"
        viewBox="0 0 17 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M1 1L16 16L1 31" stroke="#9094BB" />
      </svg>
    );
  };
}
