import type React from 'react';

const InfiniteLoaderIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 150" {...props}>
    <title>Infinite Loader Icon</title>
    <path
      fill="none"
      stroke="#FF156D"
      strokeDasharray="300 385"
      strokeLinecap="round"
      strokeWidth="15"
      d="M275 75c0 31-27 50-50 50-58 0-92-100-150-100-28 0-50 22-50 50s23 50 50 50c58 0 92-100 150-100 24 0 50 19 50 50Z"
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      style={{ '--darkreader-inline-stroke': '#f96ef9' } as any}
    >
      <animate
        attributeName="stroke-dashoffset"
        calcMode="spline"
        dur="2"
        keySplines="0 0 1 1"
        repeatCount="indefinite"
        values="685;-685"
      />
    </path>
  </svg>
);

export default InfiniteLoaderIcon;
