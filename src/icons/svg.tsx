import { ComponentType, useState } from "react";
import { IconNameType, SvgStatDataType } from "./";

type EyeProps = {
  color: string;
  isOpen: boolean;
};
export const Eye = ({ color, isOpen }: EyeProps) => {
  return (
    <div>
      {isOpen ? (
        <svg
          version="1.0"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="64px"
          height="64px"
          viewBox="-12.8 -12.8 89.60 89.60"
          enableBackground="new 0 0 64 64"
          xmlSpace="preserve"
          fill="#242424"
          stroke="#242424"
          transform="rotate(0)"
          strokeWidth="0.00064"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0" transform="translate(0,0), scale(1)">
            <path
              transform="translate(-12.8, -12.8), scale(5.6)"
              fill={color}
              d="M9.166.33a2.25 2.25 0 00-2.332 0l-5.25 3.182A2.25 2.25 0 00.5 5.436v5.128a2.25 2.25 0 001.084 1.924l5.25 3.182a2.25 2.25 0 002.332 0l5.25-3.182a2.25 2.25 0 001.084-1.924V5.436a2.25 2.25 0 00-1.084-1.924L9.166.33z"
              strokeWidth="0"
            ></path>
          </g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="#CCCCCC"
            strokeWidth="0.256"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path
              fill="#242424"
              d="M63.714,30.516C63.347,29.594,54.448,8,31.999,8S0.651,29.594,0.284,30.516 c-0.379,0.953-0.379,2.016,0,2.969C0.651,34.406,9.55,56,31.999,56s31.348-21.594,31.715-22.516 C64.093,32.531,64.093,31.469,63.714,30.516z M31.999,40c-4.418,0-8-3.582-8-8s3.582-8,8-8s8,3.582,8,8S36.417,40,31.999,40z"
            ></path>
          </g>
        </svg>
      ) : (
        <svg
          width="64px"
          height="64px"
          viewBox="-2.4 -2.4 28.80 28.80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          stroke=""
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0">
            <path
              transform="translate(-2.4, -2.4), scale(1.7999999999999998)"
              fill={color}
              d="M9.166.33a2.25 2.25 0 00-2.332 0l-5.25 3.182A2.25 2.25 0 00.5 5.436v5.128a2.25 2.25 0 001.084 1.924l5.25 3.182a2.25 2.25 0 002.332 0l5.25-3.182a2.25 2.25 0 001.084-1.924V5.436a2.25 2.25 0 00-1.084-1.924L9.166.33z"
              strokeWidth="0"
            ></path>
          </g>
          <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            <path
              d="M2.68936 6.70456C2.52619 6.32384 2.08528 6.14747 1.70456 6.31064C1.32384 6.47381 1.14747 6.91472 1.31064 7.29544L2.68936 6.70456ZM15.5872 13.3287L15.3125 12.6308L15.5872 13.3287ZM9.04145 13.7377C9.26736 13.3906 9.16904 12.926 8.82185 12.7001C8.47466 12.4742 8.01008 12.5725 7.78417 12.9197L9.04145 13.7377ZM6.37136 15.091C6.14545 15.4381 6.24377 15.9027 6.59096 16.1286C6.93815 16.3545 7.40273 16.2562 7.62864 15.909L6.37136 15.091ZM22.6894 7.29544C22.8525 6.91472 22.6762 6.47381 22.2954 6.31064C21.9147 6.14747 21.4738 6.32384 21.3106 6.70456L22.6894 7.29544ZM19 11.1288L18.4867 10.582V10.582L19 11.1288ZM19.9697 13.1592C20.2626 13.4521 20.7374 13.4521 21.0303 13.1592C21.3232 12.8663 21.3232 12.3914 21.0303 12.0985L19.9697 13.1592ZM11.25 16.5C11.25 16.9142 11.5858 17.25 12 17.25C12.4142 17.25 12.75 16.9142 12.75 16.5H11.25ZM16.3714 15.909C16.5973 16.2562 17.0619 16.3545 17.409 16.1286C17.7562 15.9027 17.8545 15.4381 17.6286 15.091L16.3714 15.909ZM5.53033 11.6592C5.82322 11.3663 5.82322 10.8914 5.53033 10.5985C5.23744 10.3056 4.76256 10.3056 4.46967 10.5985L5.53033 11.6592ZM2.96967 12.0985C2.67678 12.3914 2.67678 12.8663 2.96967 13.1592C3.26256 13.4521 3.73744 13.4521 4.03033 13.1592L2.96967 12.0985ZM12 13.25C8.77611 13.25 6.46133 11.6446 4.9246 9.98966C4.15645 9.16243 3.59325 8.33284 3.22259 7.71014C3.03769 7.3995 2.90187 7.14232 2.8134 6.96537C2.76919 6.87696 2.73689 6.80875 2.71627 6.76411C2.70597 6.7418 2.69859 6.7254 2.69411 6.71533C2.69187 6.7103 2.69036 6.70684 2.68957 6.70503C2.68917 6.70413 2.68896 6.70363 2.68892 6.70355C2.68891 6.70351 2.68893 6.70357 2.68901 6.70374C2.68904 6.70382 2.68913 6.70403 2.68915 6.70407C2.68925 6.7043 2.68936 6.70456 2 7C1.31064 7.29544 1.31077 7.29575 1.31092 7.29609C1.31098 7.29624 1.31114 7.2966 1.31127 7.2969C1.31152 7.29749 1.31183 7.2982 1.31218 7.299C1.31287 7.30062 1.31376 7.30266 1.31483 7.30512C1.31698 7.31003 1.31988 7.31662 1.32353 7.32483C1.33083 7.34125 1.34115 7.36415 1.35453 7.39311C1.38127 7.45102 1.42026 7.5332 1.47176 7.63619C1.57469 7.84206 1.72794 8.13175 1.93366 8.47736C2.34425 9.16716 2.96855 10.0876 3.8254 11.0103C5.53867 12.8554 8.22389 14.75 12 14.75V13.25ZM15.3125 12.6308C14.3421 13.0128 13.2417 13.25 12 13.25V14.75C13.4382 14.75 14.7246 14.4742 15.8619 14.0266L15.3125 12.6308ZM7.78417 12.9197L6.37136 15.091L7.62864 15.909L9.04145 13.7377L7.78417 12.9197ZM22 7C21.3106 6.70456 21.3107 6.70441 21.3108 6.70427C21.3108 6.70423 21.3108 6.7041 21.3109 6.70402C21.3109 6.70388 21.311 6.70376 21.311 6.70368C21.3111 6.70352 21.3111 6.70349 21.3111 6.7036C21.311 6.7038 21.3107 6.70452 21.3101 6.70576C21.309 6.70823 21.307 6.71275 21.3041 6.71924C21.2983 6.73223 21.2889 6.75309 21.2758 6.78125C21.2495 6.83757 21.2086 6.92295 21.1526 7.03267C21.0406 7.25227 20.869 7.56831 20.6354 7.9432C20.1669 8.69516 19.4563 9.67197 18.4867 10.582L19.5133 11.6757C20.6023 10.6535 21.3917 9.56587 21.9085 8.73646C22.1676 8.32068 22.36 7.9668 22.4889 7.71415C22.5533 7.58775 22.602 7.48643 22.6353 7.41507C22.6519 7.37939 22.6647 7.35118 22.6737 7.33104C22.6782 7.32097 22.6818 7.31292 22.6844 7.30696C22.6857 7.30398 22.6867 7.30153 22.6876 7.2996C22.688 7.29864 22.6883 7.29781 22.6886 7.29712C22.6888 7.29677 22.6889 7.29646 22.689 7.29618C22.6891 7.29604 22.6892 7.29585 22.6892 7.29578C22.6893 7.29561 22.6894 7.29544 22 7ZM18.4867 10.582C17.6277 11.3882 16.5739 12.1343 15.3125 12.6308L15.8619 14.0266C17.3355 13.4466 18.5466 12.583 19.5133 11.6757L18.4867 10.582ZM18.4697 11.6592L19.9697 13.1592L21.0303 12.0985L19.5303 10.5985L18.4697 11.6592ZM11.25 14V16.5H12.75V14H11.25ZM14.9586 13.7377L16.3714 15.909L17.6286 15.091L16.2158 12.9197L14.9586 13.7377ZM4.46967 10.5985L2.96967 12.0985L4.03033 13.1592L5.53033 11.6592L4.46967 10.5985Z"
              fill="#242424"
            ></path>
          </g>
        </svg>
      )}
    </div>
  );
};

type SvgProps = {
  color: string;
  size: [string, string];
};
export const Heart = ({ color, size }: SvgProps) => {
  return (
    <svg
      width={size[0]}
      height={size[1]}
      viewBox="0 0 24.00 24.00"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
      <g id="SVGRepo_iconCarrier">
        <path
          d="M2 9.1371C2 14 6.01943 16.5914 8.96173 18.9109C10 19.7294 11 20.5 12 20.5C13 20.5 14 19.7294 15.0383 18.9109C17.9806 16.5914 22 14 22 9.1371C22 4.27416 16.4998 0.825464 12 5.50063C7.50016 0.825464 2 4.27416 2 9.1371Z"
          fill={color}
        ></path>
      </g>
    </svg>
  );
};

export const Sword = ({ color, size }: SvgProps) => {
  return (
    <svg
      fill={color}
      width={size[0]}
      height={size[1]}
      viewBox="-2.5 -2.5 24 24"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMinYMin"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
      <g id="SVGRepo_iconCarrier">
        <path d="M9.646 14.096a1 1 0 1 1-1.414 1.414l-1.414-1.414-2.828 2.829a1 1 0 0 1-1.415 1.414l-1.414-1.414a1 1 0 0 1 1.414-1.415l2.829-2.828-1.414-1.414a1 1 0 0 1 1.414-1.414l4.242 4.242zm.708-.707L6.11 9.146 14.596.661l3.536.707.707 3.536-8.485 8.485z"></path>
      </g>
    </svg>
  );
};

export const Shield = ({ color, size }: SvgProps) => {
  return (
    <svg
      fill={color}
      width={size[0]}
      height={size[1]}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
      <g id="SVGRepo_iconCarrier">
        <path d="m20.496 6.106-7.973-4a.997.997 0 0 0-.895-.002l-8.027 4c-.297.15-.502.437-.544.767-.013.097-1.145 9.741 8.541 15.008a.995.995 0 0 0 .969-.009c9.307-5.259 8.514-14.573 8.476-14.967a1 1 0 0 0-.547-.797z"></path>
      </g>
    </svg>
  );
};

export const SpSword = ({ color, size }: SvgProps) => {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill={color}
      width={size[0]}
      height={size[1]}
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
      <g id="SVGRepo_iconCarrier">
        <g>
          <path fill="none" d="M0 0h24v24H0z"></path>
          <path
            fillRule="nonzero"
            d="M7.05 13.406l3.534 3.536-1.413 1.414 1.415 1.415-1.414 1.414-2.475-2.475-2.829 2.829-1.414-1.414 2.829-2.83-2.475-2.474 1.414-1.414 1.414 1.413 1.413-1.414zM3 3l3.546.003 11.817 11.818 1.415-1.414 1.414 1.414-2.474 2.475 2.828 2.829-1.414 1.414-2.829-2.829-2.475 2.475-1.414-1.414 1.414-1.415L3.003 6.531 3 3zm14.457 0L21 3.003l.002 3.523-4.053 4.052-3.536-3.535L17.457 3z"
          ></path>
        </g>
      </g>
    </svg>
  );
};

export const SpShield = ({ color, size }: SvgProps) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill={color}
      width={size[0]}
      height={size[1]}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
      <g id="SVGRepo_iconCarrier">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.37752 5.08241C3 5.62028 3 7.21907 3 10.4167V11.9914C3 17.6294 7.23896 20.3655 9.89856 21.5273C10.62 21.8424 10.9807 22 12 22C13.0193 22 13.38 21.8424 14.1014 21.5273C16.761 20.3655 21 17.6294 21 11.9914V10.4167C21 7.21907 21 5.62028 20.6225 5.08241C20.245 4.54454 18.7417 4.02996 15.7351 3.00079L15.1623 2.80472C13.595 2.26824 12.8114 2 12 2C11.1886 2 10.405 2.26824 8.83772 2.80472L8.26491 3.00079C5.25832 4.02996 3.75503 4.54454 3.37752 5.08241ZM10.8613 8.36335L10.7302 8.59849C10.5862 8.85677 10.5142 8.98591 10.402 9.07112C10.2897 9.15633 10.1499 9.18796 9.87035 9.25122L9.61581 9.30881C8.63194 9.53142 8.14001 9.64273 8.02297 10.0191C7.90593 10.3955 8.2413 10.7876 8.91204 11.572L9.08557 11.7749C9.27617 11.9978 9.37147 12.1092 9.41435 12.2471C9.45722 12.385 9.44281 12.5336 9.41399 12.831L9.38776 13.1018C9.28635 14.1482 9.23565 14.6715 9.54206 14.9041C9.84847 15.1367 10.3091 14.9246 11.2303 14.5005L11.4686 14.3907C11.7304 14.2702 11.8613 14.2099 12 14.2099C12.1387 14.2099 12.2696 14.2702 12.5314 14.3907L12.7697 14.5005C13.6909 14.9246 14.1515 15.1367 14.4579 14.9041C14.7644 14.6715 14.7136 14.1482 14.6122 13.1018L14.586 12.831C14.5572 12.5337 14.5428 12.385 14.5857 12.2471C14.6285 12.1092 14.7238 11.9978 14.9144 11.7749L15.088 11.572C15.7587 10.7876 16.0941 10.3955 15.977 10.0191C15.86 9.64273 15.3681 9.53142 14.3842 9.30881L14.1296 9.25122C13.8501 9.18796 13.7103 9.15633 13.598 9.07112C13.4858 8.98592 13.4138 8.85678 13.2698 8.5985L13.1387 8.36335C12.6321 7.45445 12.3787 7 12 7C11.6213 7 11.3679 7.45445 10.8613 8.36335Z"
          fill={color}
        ></path>
      </g>
    </svg>
  );
};

export const Speed = ({ color, size }: SvgProps) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width={size[0]}
      height={size[1]}
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
      <g id="SVGRepo_iconCarrier">
        <path
          d="M15.7639 7C16.3132 6.38625 17.1115 6 18 6C19.6569 6 21 7.34315 21 9C21 10.6569 19.6569 12 18 12H3M8.50926 4.66667C8.87548 4.2575 9.40767 4 10 4C11.1046 4 12 4.89543 12 6C12 7.10457 11.1046 8 10 8H3M11.5093 19.3333C11.8755 19.7425 12.4077 20 13 20C14.1046 20 15 19.1046 15 18C15 16.8954 14.1046 16 13 16H3"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </g>
    </svg>
  );
};

export const Weight = ({ color, size }: SvgProps) => {
  return (
    <svg
      fill={color}
      height={size[0]}
      width={size[1]}
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
      <g id="SVGRepo_iconCarrier">
        <path d="M510.28 445.86l-73.03-292.13c-3.8-15.19-16.44-25.72-30.87-25.72h-60.25c3.57-10.05 5.88-20.72 5.88-32 0-53.02-42.98-96-96-96s-96 42.98-96 96c0 11.28 2.3 21.95 5.88 32h-60.25c-14.43 0-27.08 10.54-30.87 25.72L1.72 445.86C-6.61 479.17 16.38 512 48.03 512h415.95c31.64 0 54.63-32.83 46.3-66.14zM256 128c-17.64 0-32-14.36-32-32s14.36-32 32-32 32 14.36 32 32-14.36 32-32 32z"></path>
      </g>
    </svg>
  );
};

export const Height = ({ color, size }: SvgProps) => {
  return (
    <svg
      width={size[0]}
      height={size[1]}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke={color}
        strokeWidth="0.9120000000000001"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path
          d="M12 22V2M12 22L8 18M12 22L16 18M12 2L8 6M12 2L16 6"
          stroke={color}
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>{" "}
      </g>
    </svg>
  );
};

export const Xp = ({ color, size }: SvgProps) => {
  return (
    <svg
      width={size[0]}
      height={size[1]}
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      aria-hidden="true"
      role="img"
      preserveAspectRatio="xMidYMid meet"
      fill={color}
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
      <g id="SVGRepo_iconCarrier">
        <path
          d="M26.89 32.291h-7.592V4.525c0-3.366-5.215-3.366-5.215 0v27.766H6.49c-2.446 0-4.49 2.318-4.49 5.095c0 2.779 2.043 5.098 4.49 5.098h7.593v16.992c0 3.365 5.215 3.365 5.215 0V42.484h7.592c2.449 0 4.491-2.318 4.491-5.098c0-2.778-2.042-5.095-4.491-5.095"
          fill={color}
        ></path>
        <path
          d="M49.739 55.861H37.372c-3.847 0-3.847 6.138 0 6.138h12.367c3.848 0 3.848-6.138 0-6.138"
          fill={color}
        ></path>
        <path
          d="M51.614 45.089H37.372c-3.847 0-3.847 6.139 0 6.139h14.242c3.848 0 3.848-6.139 0-6.139"
          fill={color}
        ></path>
        <path
          d="M53.489 34.317H37.372c-3.847 0-3.847 6.138 0 6.138h16.117c3.848 0 3.848-6.138 0-6.138"
          fill={color}
        ></path>
        <path
          d="M55.364 23.545H37.372c-3.847 0-3.847 6.138 0 6.138h17.992c3.848 0 3.848-6.138 0-6.138m0 4.138H37.372c-.77 0-.885-.67-.885-1.068c0-.399.115-1.069.885-1.069h17.992c.771 0 .885.67.885 1.069c0 .398-.114 1.068-.885 1.068"
          fill={color}
        ></path>
        <path
          d="M57.239 12.774H37.372c-3.847 0-3.847 6.138 0 6.138h19.867c3.848 0 3.848-6.138 0-6.138m0 4.138H37.372c-.77 0-.885-.67-.885-1.068c0-.399.115-1.069.885-1.069h19.867c.771 0 .885.67.885 1.069c0 .398-.114 1.068-.885 1.068"
          fill={color}
        ></path>
        <path
          d="M59.114 2.001H37.372c-3.847 0-3.847 6.138 0 6.138h21.742c3.848 0 3.848-6.138 0-6.138m0 4.138H37.372c-.77 0-.885-.67-.885-1.069c0-.398.115-1.068.885-1.068h21.742c.771 0 .885.67.885 1.068c0 .399-.114 1.069-.885 1.069"
          fill={color}
        ></path>
      </g>
    </svg>
  );
};
type IconProps = {
  icon: ComponentType<SvgProps>;
  svgData: SvgStatDataType;
};

export const Icon = ({ icon: SvgIcon, svgData }: IconProps) => {
  const [isHover, setIsHover] = useState(false);

  const { icons, filter, scale, transition, size } = svgData;

  const svgName: IconNameType = SvgIcon.name.toLowerCase();
  const color = icons[svgName].color;

  const dropShadow = isHover
    ? `drop-shadow(0px 0px ${filter[0]} ${color})`
    : `drop-shadow(0px 0px ${filter[1]} ${color})`;
  const transform = isHover ? `scale(${scale})` : "none";

  return (
    <div
      className="icon-stat-ctn"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      style={{
        filter: dropShadow,
        transform: transform,
        transition: transition,
      }}
    >
      <SvgIcon color={color} size={size} />
    </div>
  );
};
