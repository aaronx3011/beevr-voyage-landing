import * as React from "react"

interface HeroLogoProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

export const HeroLogo = ({ className, ...props }: HeroLogoProps) => (
  <svg
    id="Capa_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 1366 350"
    className={className}
    {...props}
  >
    <defs>
      <style>
        {`
          .st0 { fill: url(#Degradado_sin_nombre_909); }
          .st1 { fill: #fff; }
          .st2 { fill: url(#Degradado_sin_nombre_131); }
          .st3 { fill: url(#Degradado_sin_nombre_918); }
          .st4 { fill: url(#Degradado_sin_nombre_896); }
          .st5 { fill: url(#Degradado_sin_nombre_921); }
          .st6 { fill: url(#Degradado_sin_nombre_932); }
          .st7 { fill: url(#Degradado_sin_nombre_132); }
          .st8 { fill: url(#Degradado_sin_nombre_9); }
          .st9 { fill: url(#Degradado_sin_nombre_13); }
          .st10 { fill: url(#Degradado_sin_nombre_888); }
          .st11 { fill: url(#Degradado_sin_nombre_9211); }
        `}
      </style>
      <linearGradient id="Degradado_sin_nombre_13" data-name="Degradado sin nombre 13" x1="167.94" y1="67.79" x2="231.66" y2="67.79" gradientUnits="userSpaceOnUse">
        <stop offset=".35" stopColor="#fac923"/>
        <stop offset="1" stopColor="#e96e29"/>
      </linearGradient>
      <linearGradient id="Degradado_sin_nombre_888" data-name="Degradado sin nombre 888" x1="584.03" y1="116.41" x2="584.03" y2="294.2" gradientUnits="userSpaceOnUse">
        <stop offset=".52" stopColor="#fff"/>
        <stop offset=".79" stopColor="#fbc823"/>
        <stop offset=".99" stopColor="#e96e29"/>
      </linearGradient>
      <linearGradient id="Degradado_sin_nombre_896" data-name="Degradado sin nombre 896" x1="51.1" y1="205.38" x2="231.66" y2="205.38" gradientUnits="userSpaceOnUse">
        <stop offset=".01" stopColor="#e96e29"/>
        <stop offset=".21" stopColor="#fbc823"/>
        <stop offset=".21" stopColor="#fbc824"/>
        <stop offset=".31" stopColor="#fcdb71"/>
        <stop offset=".41" stopColor="#fdeaae"/>
        <stop offset=".48" stopColor="#fef5da"/>
        <stop offset=".54" stopColor="#fefcf4"/>
        <stop offset=".58" stopColor="#fff"/>
      </linearGradient>
      <linearGradient id="Degradado_sin_nombre_9" data-name="Degradado sin nombre 9" x1="272.02" y1="205.54" x2="451.55" y2="205.54" gradientUnits="userSpaceOnUse">
        <stop offset=".29" stopColor="#fbc823"/>
        <stop offset="1" stopColor="#e96e29"/>
      </linearGradient>
      <linearGradient id="Degradado_sin_nombre_921" data-name="Degradado sin nombre 921" x1="786.46" y1="224.48" x2="805.05" y2="224.48" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#fac923"/>
        <stop offset="1" stopColor="#e96e29"/>
      </linearGradient>
      <linearGradient id="Degradado_sin_nombre_909" data-name="Degradado sin nombre 909" x1="1258.81" y1="196.55" x2="1258.81" y2="216.86" gradientUnits="userSpaceOnUse">
        <stop offset=".45" stopColor="#fac923"/>
        <stop offset="1" stopColor="#e96e29"/>
      </linearGradient>
      <linearGradient id="Degradado_sin_nombre_9211" data-name="Degradado sin nombre 921" x1="348.85" y1="206.11" x2="372.9" y2="206.11" xlinkHref="#Degradado_sin_nombre_921"/>
      <linearGradient id="Degradado_sin_nombre_918" data-name="Degradado sin nombre 918" x1="716.91" y1="138.27" x2="828.52" y2="331.59" gradientUnits="userSpaceOnUse">
        <stop offset=".59" stopColor="#fff"/>
        <stop offset=".75" stopColor="#fbc823"/>
        <stop offset=".99" stopColor="#e96e29"/>
      </linearGradient>
      <linearGradient id="Degradado_sin_nombre_932" data-name="Degradado sin nombre 932" x1="990.3" y1="205.8" x2="1110.95" y2="205.22" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#fff"/>
        <stop offset=".56" stopColor="#fbc823"/>
        <stop offset=".99" stopColor="#e96e29"/>
      </linearGradient>
      <linearGradient id="Degradado_sin_nombre_131" data-name="Degradado sin nombre 13" x1="117.42" y1="77.4" x2="146.63" y2="77.4" xlinkHref="#Degradado_sin_nombre_13"/>
      <linearGradient id="Degradado_sin_nombre_132" data-name="Degradado sin nombre 13" x1="114.44" y1="52.44" x2="152.16" y2="52.44" xlinkHref="#Degradado_sin_nombre_13"/>
    </defs>
    <path className="st9" d="M220.81,71.98c2.77-.91,5-2.51,6.69-4.81,1.69-2.29,2.53-4.92,2.53-7.86,0-3.86-1.35-7.06-4.03-9.61-2.69-2.56-6.04-3.84-10.07-3.84h-11.55l-1.93,4.88h.04l-13.5,31.38-15.53-36.25h-5.52l18.97,43.86h4.16l16.92-38.98h7.95c2.47,0,4.52.82,6.17,2.47,1.69,1.65,2.53,3.68,2.53,6.11s-.84,4.46-2.53,6.11c-1.6,1.6-3.66,2.4-6.17,2.4l-9.02-.04,2.96,3.36c5.6.18,5.37,1.71,9.54,8.29l6.39,10.29h5.85l-10.85-17.73Z"/>
    <g>
      <path className="st10" d="M672,116.41h-24.41c-13.27,18.01-63.57,89.36-63.57,89.36l-62.18-89.36h-25.79l76.5,109.12.88,68.67h21.19v-68.63c0-1.2,77.38-109.16,77.38-109.16Z"/>
      <path className="st4" d="M231.66,116.41h-23.03c-10.55,27.19-67.24,152.91-67.24,152.91L73.67,116.41h-22.57l78.76,176.88c1.83,2.21,18.28.19,22.15.98l79.65-177.86Z"/>
      <path className="st8" d="M361.78,297.71c-49.5,0-89.77-41.34-89.77-92.16s40.27-92.16,89.77-92.16,89.77,41.34,89.77,92.16-40.27,92.16-89.77,92.16ZM361.78,135.14c-37.5,0-68.01,31.58-68.01,70.41s30.51,70.41,68.01,70.41,68.01-31.58,68.01-70.41-30.51-70.41-68.01-70.41Z"/>
      <path className="st5" d="M795.75,215.18c-5.13,0-9.29,4.16-9.29,9.29s4.16,9.29,9.29,9.29,9.29-4.16,9.29-9.29-4.16-9.29-9.29-9.29Z"/>
      <rect className="st0" x="1220.12" y="196.55" width="77.38" height="20.31"/>
      <path className="st11" d="M348.85,206.11c0,6.64,5.38,12.02,12.02,12.02s12.02-5.38,12.02-12.02-5.38-12.02-12.02-12.02-12.02,5.38-12.02,12.02Z"/>
      <path className="st3" d="M808.79,116.36c-1.01-1.37-25.36-.32-26.73.94l-79.66,176.9h22.57l71.38-155.68,69.1,155.68h23.03l-79.7-177.84Z"/>
      <path className="st1" d="M1315.93,273.93h-110.55v-135.88c0-.1,1.28-1.38,1.38-1.38h109.16c1.23-6.59.94-13.59,0-20.27h-131.27l-1.38,177.79h132.66c1.63-6.54,1.21-13.66,0-20.27Z"/>
      <path className="st6" d="M1110.5,197.47h-63.56l-2.76,20.27h46.06c-.36,7.76.49,15.74-.01,23.48-.27,4.17-.58,11.47-3.22,14.29-2.57,2.75-8.6,7.28-8.73,7.2-11.82,8.56-28.49,14.3-44.25,14.3-39.37,0-71.96-31.48-71.96-70.31,0-35.77,28.09-67.4,63.17-71.86,23.98-2.55,49.39,5.91,65.53,27.69,2.95.43,12.94-10.28,16.95-11.16-22.78-37.27-75.09-46.92-113.91-30.52-8.39,3.54-16.01,8.4-22.74,14.23-10.61,8.87-19,20.32-24.37,34-.09.22-.17.44-.26.66-.36.94-.71,1.89-1.04,2.86-3.17,8.79-5.04,18.1-5.32,27.64.05-.02.09,0,.13,0-.08,1.78-.13,3.57-.13,5.4,0,2.21.08,4.38.21,6.53-.07.02-.13.07-.21.07,2.38,73.37,82.67,104.02,139.34,74.93.81-.41,1.63-.82,2.42-1.25.7-.38,1.39-.78,2.08-1.19,3.82-2.21,7.45-4.67,10.86-7.37.08-.07.17-.13.25-.2,1.4-1.12,2.78-2.26,4.1-3.46-.02,0-.04-.02-.06-.02,4.23-3.78,8.22-7.96,11.85-12.66,1.36-21.18.17-42.38-.42-63.52Z"/>
    </g>
    <path className="st1" d="M82.18,70.91c-1.28-1.93-3.04-3.39-5.3-4.39,3.38-2.12,5.07-5.22,5.07-9.29,0-3.25-1.19-5.94-3.57-8.06-2.34-2.21-5.29-3.31-8.84-3.31h-20.72v43.86h21.96c3.81,0,6.97-1.17,9.49-3.51,2.55-2.34,3.83-5.26,3.83-8.77,0-2.42-.64-4.6-1.91-6.53ZM76.36,82.64c-1.47,1.47-3.33,2.21-5.59,2.21h-16.7v-34.11h15.46c1.99,0,3.65.66,4.97,1.98,1.32,1.32,1.98,2.95,1.98,4.9s-.66,3.57-1.98,4.87c-1.32,1.3-2.98,1.95-4.97,1.95h-7.93l3.44,4.98s3.85,0,5.09,0c2.48,0,4.57.56,6.26,2.17.8.76,1.26,1.6,1.48,2.05.5,1.03.76,2.19.76,3.47,0,2.17-.76,4.01-2.28,5.52Z"/>
    <g>
      <polygon className="st1" points="97.41 84.84 97.41 69.97 117.42 69.97 117.42 65.09 97.41 65.09 92.15 65.09 92.15 89.72 117.42 89.72 117.42 84.84 97.41 84.84"/>
      <polygon className="st1" points="97.41 50.74 111.99 50.74 111.99 45.86 92.15 45.86 92.15 59.01 97.41 59.01 97.41 50.74"/>
      <polygon className="st2" points="123.92 84.84 122.68 84.84 122.68 69.97 138.59 69.97 138.59 65.09 122.68 65.09 120.41 65.09 117.42 65.09 117.42 69.97 117.42 84.84 117.42 89.72 123.92 89.72 149.19 89.72 149.19 84.84 123.92 84.84"/>
      <polygon className="st7" points="118.07 45.86 118.07 50.74 118.07 59.01 122.68 59.01 122.68 50.74 148.86 50.74 148.86 45.86 118.07 45.86"/>
    </g>
  </svg>
)
