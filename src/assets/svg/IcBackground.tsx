import * as React from 'react';
import type { SVGProps } from 'react';
const SvgIcBackground = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 375 667" {...props}>
    <g clipPath="url(#ic_background_svg__a)">
      <path fill="#fff" d="M0 0h375v667H0z" />
      <circle cx={188} cy={702} r={282} fill="url(#ic_background_svg__b)" />
      <circle cx={77} cy={130} r={282} fill="url(#ic_background_svg__c)" />
    </g>
    <defs>
      <radialGradient
        id="ic_background_svg__b"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="matrix(0 282 -282 0 188 702)"
        gradientUnits="userSpaceOnUse">
        <stop stopColor="#C4ACFE" />
        <stop offset={1} stopColor="#fff" />
      </radialGradient>
      <radialGradient
        id="ic_background_svg__c"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="matrix(0 282 -282 0 77 130)"
        gradientUnits="userSpaceOnUse">
        <stop stopColor="#FCBBE6" />
        <stop offset={1} stopColor="#fff" />
      </radialGradient>
      <clipPath id="ic_background_svg__a">
        <path fill="#fff" d="M0 0h375v667H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgIcBackground;
