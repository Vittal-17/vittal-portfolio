import type { SVGProps } from "react";

/**
 * Brand marks (GitHub, etc.) were removed from lucide-react, so we ship our own
 * inline SVGs with a lucide-compatible signature (`size` + className/props).
 */
export function GithubIcon({ size = 24, ...props }: { size?: number } & SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      role="img"
      aria-hidden="true"
      {...props}
    >
      <path d="M12 .5C5.37.5 0 5.78 0 12.29c0 5.2 3.44 9.6 8.21 11.16.6.11.82-.26.82-.58 0-.29-.01-1.04-.02-2.05-3.34.72-4.04-1.59-4.04-1.59-.55-1.37-1.33-1.74-1.33-1.74-1.09-.74.08-.72.08-.72 1.2.08 1.84 1.22 1.84 1.22 1.07 1.8 2.81 1.28 3.5.98.11-.77.42-1.28.76-1.58-2.67-.3-5.47-1.31-5.47-5.84 0-1.29.47-2.34 1.24-3.17-.12-.3-.54-1.52.12-3.16 0 0 1.01-.32 3.3 1.21a11.5 11.5 0 0 1 3-.4c1.02.01 2.04.14 3 .4 2.28-1.53 3.29-1.21 3.29-1.21.66 1.64.24 2.86.12 3.16.77.83 1.24 1.88 1.24 3.17 0 4.54-2.81 5.53-5.49 5.83.43.36.81 1.08.81 2.18 0 1.58-.01 2.85-.01 3.24 0 .32.21.69.83.57C20.57 21.88 24 17.49 24 12.29 24 5.78 18.63.5 12 .5z" />
    </svg>
  );
}
