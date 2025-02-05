import { SVGProps } from "react";

export function CardDiscover(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      fill="none"
      viewBox="0 0 22 22"
      {...props}
    >
      <g filter="url(#filter0_i_3233_2334)">
        <circle
          cx="11"
          cy="11"
          r="10.1145"
          fill="url(#paint0_linear_3233_2334)"
        />
      </g>
      <defs>
        <filter
          id="filter0_i_3233_2334"
          x="0.885498"
          y="0.885483"
          width="22.229"
          height="22.229"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="2" dy="2" />
          <feGaussianBlur stdDeviation="1" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.675732 0 0 0 0 0.189457 0 0 0 0 0.144011 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_3233_2334"
          />
        </filter>
        <linearGradient
          id="paint0_linear_3233_2334"
          x1="0.885498"
          y1="0.885483"
          x2="21.1145"
          y2="21.1145"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.28" stop-color="#E0481E" />
          <stop offset="0.765" stop-color="#F59214" />
        </linearGradient>
      </defs>
    </svg>
  );
}
