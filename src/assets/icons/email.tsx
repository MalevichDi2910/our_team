import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
const SvgComponent = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={16}
    fill="none"
    ref={ref}
    {...props}
  >
    <path
      fill="#512689"
      d="M20 .5H2A1.5 1.5 0 0 0 .5 2v12A1.5 1.5 0 0 0 2 15.5h18a1.5 1.5 0 0 0 1.5-1.5V2A1.5 1.5 0 0 0 20 .5ZM18.35 2 11 7.085 3.65 2h14.7ZM2 14V2.683l8.572 5.932a.75.75 0 0 0 .856 0L20 2.682V14H2Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgComponent);
const Memo = memo(ForwardRef);
export default Memo;

export const Email = memo(forwardRef(SvgComponent));
