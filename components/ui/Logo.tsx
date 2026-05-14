import * as React from "react"

interface LogoProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

export const Logo = ({ className, ...props }: LogoProps) => (
  <svg
    className={className}
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    id="Capa_1"
    viewBox="0 0 1366 322"
    {...props}
  >
    <defs>
      <linearGradient
        id="Degradado_sin_nombre_762"
        x1={92}
        x2={285.57}
        y1={161}
        y2={161}
        data-name="Degradado sin nombre 762"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.34} stopColor="#fff" />
        <stop offset={0.39} stopColor="#fefdf9" />
        <stop offset={0.44} stopColor="#fefaea" />
        <stop offset={0.5} stopColor="#fef5d2" />
        <stop offset={0.56} stopColor="#feedaf" />
        <stop offset={0.63} stopColor="#fee383" />
        <stop offset={0.69} stopColor="#fdd84d" />
        <stop offset={0.76} stopColor="#fdca0f" />
        <stop offset={0.78} stopColor="#fdc700" />
        <stop offset={0.81} stopColor="#f7bd00" />
        <stop offset={0.86} stopColor="#eaa501" />
        <stop offset={0.93} stopColor="#d47d04" />
        <stop offset={1} stopColor="#b74907" />
      </linearGradient>
      <linearGradient
        id="Degradado_sin_nombre_550"
        x1={295.29}
        x2={502.02}
        y1={161}
        y2={161}
        data-name="Degradado sin nombre 550"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#ffee25" />
        <stop offset={0.02} stopColor="#fee820" />
        <stop offset={0.1} stopColor="#fdd60e" />
        <stop offset={0.19} stopColor="#fdca03" />
        <stop offset={0.28} stopColor="#fdc700" />
        <stop offset={1} stopColor="#b74907" />
      </linearGradient>
      <linearGradient
        id="Degradado_sin_nombre_603"
        x1={600.66}
        x2={600.66}
        y1={261.07}
        y2={60.93}
        data-name="Degradado sin nombre 603"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#b74907" />
        <stop offset={0.26} stopColor="#fdc700" />
        <stop offset={0.3} stopColor="#fdca03" />
        <stop offset={0.33} stopColor="#fdd60e" />
        <stop offset={0.36} stopColor="#fee820" />
        <stop offset={0.37} stopColor="#ffee25" />
        <stop offset={0.53} stopColor="#fff" />
      </linearGradient>
      <linearGradient
        xlinkHref="#Degradado_sin_nombre_762"
        id="Degradado_sin_nombre_7621"
        x1={677.57}
        x2={873.99}
        data-name="Degradado sin nombre 762"
      />
      <linearGradient
        id="Degradado_sin_nombre_591"
        x1={886.58}
        x2={1091.87}
        y1={161}
        y2={161}
        data-name="Degradado sin nombre 591"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.59} stopColor="#fff" />
        <stop offset={0.76} stopColor="#ffee25" />
        <stop offset={0.76} stopColor="#fee820" />
        <stop offset={0.81} stopColor="#fdd60e" />
        <stop offset={0.85} stopColor="#fdca03" />
        <stop offset={0.89} stopColor="#fdc700" />
        <stop offset={1} stopColor="#b74907" />
      </linearGradient>
      <linearGradient
        xlinkHref="#Degradado_sin_nombre_550"
        id="Degradado_sin_nombre_5501"
        x1={1180.35}
        x2={1257.99}
        y1={159.86}
        y2={159.86}
        data-name="Degradado sin nombre 550"
      />
      <style>{".st3{fill:#fdc700}"}</style>
    </defs>
    <path
      d="M199.22 261.07h-20.87L92 60.93h27.16l69.76 162.98 6.58-16.01 62.9-146.96h27.16l-86.35 200.15Z"
      style={{
        fill: "url(#Degradado_sin_nombre_762)",
      }}
    />
    <path
      d="M398.51 57.78c29.35 0 53.94 9.91 73.77 29.74 19.82 19.83 29.74 44.32 29.74 73.48s-9.91 53.94-29.74 73.77c-19.63 19.63-44.22 29.45-73.77 29.45s-54.14-9.82-73.77-29.45c-19.63-19.63-29.45-44.22-29.45-73.77s9.82-53.85 29.45-73.48c19.83-19.82 44.41-29.74 73.77-29.74Zm0 181.56c21.73 0 39.93-7.43 54.61-22.3 14.68-15.25 22.02-33.93 22.02-56.04s-7.34-40.7-22.02-55.76c-14.49-15.06-32.69-22.59-54.61-22.59s-40.13 7.53-54.61 22.59c-14.68 15.06-22.02 33.65-22.02 55.76s7.34 40.79 22.02 56.04c14.68 14.87 32.88 22.3 54.61 22.3Z"
      style={{
        fill: "url(#Degradado_sin_nombre_550)",
      }}
    />
    <path
      d="M587.51 179.58 509.74 60.92h29.73l60.9 94.07 61.47-94.07h29.74l-78.06 117.51v82.63H587.5v-81.49Z"
      style={{
        fill: "url(#Degradado_sin_nombre_603)",
      }}
    />
    <path
      d="M786.22 60.93h-20.88l-87.77 200.14h27.16l71.19-163.26 70.91 163.26h27.16L786.22 60.93z"
      style={{
        fill: "url(#Degradado_sin_nombre_7621)",
      }}
    />
    <path
      d="M1091.3 154.71h-83.62l-.41 24.02h55.15c-3.05 17.73-11.63 32.31-25.73 43.75-14.11 11.25-30.21 16.87-48.32 16.87-21.16 0-38.98-7.43-53.47-22.3-14.49-15.06-21.73-33.74-21.73-56.04s7.53-40.89 22.59-55.76c15.05-15.06 33.64-22.59 55.75-22.59 14.1 0 27.02 3.24 38.74 9.72 11.72 6.48 21.01 15.44 27.88 26.88l25.16-9.44c-9.15-16.2-21.78-28.92-37.89-38.17-16.11-9.24-34.07-13.87-53.89-13.87-30.12 0-55.09 9.82-74.91 29.45-20.01 19.83-30.02 44.41-30.02 73.77s9.82 54.14 29.45 73.77c19.63 19.63 44.03 29.45 73.2 29.45s52.51-9.62 72.34-28.88c19.63-19.25 29.73-43.27 30.31-72.05 0-1.14-.19-4-.57-8.58Z"
      style={{
        fill: "url(#Degradado_sin_nombre_591)",
      }}
    />
    <path
      d="M1154.2 237.05V84.94h118.37V60.93h-144.1v200.14H1274v-24.02h-119.8z"
      style={{
        fill: "#fff",
      }}
    />
    <path
      d="M1180.35 147.85h77.64v24.02h-77.64z"
      style={{
        fill: "url(#Degradado_sin_nombre_5501)",
      }}
    />
    <circle cx={398.65} cy={161} r={13.15} className="st3" />
    <circle cx={775.78} cy={178.82} r={13.15} className="st3" />
  </svg>
)
