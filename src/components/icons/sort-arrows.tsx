import * as React from "react";
import { FunctionComponent } from "react";

interface IconSortArrowsProps {
  size?: number;
}

const IconSortArrows: FunctionComponent<IconSortArrowsProps> = ({
  size = 8,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 12 12"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <title>sort-arrows</title>
      <desc>Created with Sketch.</desc>
      <g
        id="Admin"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g id="sort-arrows" transform="translate(-6.000000, -6.000000)">
          <g id="Group-14-Copy-2">
            <g id="Group-17-Copy-5">
              <g id="Group-58">
                <rect id="Rectangle" x="0" y="0" width="24" height="24"></rect>
                <g
                  id="Group-17"
                  transform="translate(6.000000, 6.000000)"
                  fill="#697B93"
                >
                  <polygon
                    id="Path-2"
                    points="3.10862447e-15 7.5 12 7.5 6 12"
                  ></polygon>
                  <polygon
                    id="Path-2-Copy-2"
                    transform="translate(6.000000, 2.250000) scale(1, -1) translate(-6.000000, -2.250000) "
                    points="3.10862447e-15 0 12 0 6 4.5"
                  ></polygon>
                </g>
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};

export default IconSortArrows;
