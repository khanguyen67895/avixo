"use client";
import { useEffect, useRef } from "react";

type LineConfig = {
  ref: React.RefObject<SVGLineElement | null>;
  dashLen: number;
  pathLen: number;
  speed: number;
  offset: number;
};

export function BgGrid() {
  const lineV    = useRef<SVGLineElement>(null);
  const lineHL   = useRef<SVGLineElement>(null);
  const lineHR   = useRef<SVGLineElement>(null);
  const lineStubL = useRef<SVGLineElement>(null);
  const lineStubR = useRef<SVGLineElement>(null);

  useEffect(() => {
    const lines: LineConfig[] = [
      { ref: lineV,     dashLen: 80,  pathLen: 500, speed: 3,   offset: 580  },
      { ref: lineHL,    dashLen: 100, pathLen: 559, speed: 2.5, offset: 659  },
      { ref: lineHR,    dashLen: 100, pathLen: 546, speed: 2.5, offset: 200  },
      { ref: lineStubL, dashLen: 38,  pathLen: 38,  speed: 4,   offset: 76   },
      { ref: lineStubR, dashLen: 38,  pathLen: 38,  speed: 4,   offset: 0    },
    ];

    lines.forEach(l => {
      if (l.ref.current) {
        l.ref.current.style.strokeDasharray = `${l.dashLen} ${l.pathLen}`;
        l.ref.current.style.strokeDashoffset = String(l.offset);
      }
    });

    let rafId: number;
    const animate = () => {
      lines.forEach(l => {
        l.offset -= l.speed;
        if (l.offset < -(l.dashLen)) l.offset = l.pathLen;
        if (l.ref.current) l.ref.current.style.strokeDashoffset = String(l.offset);
      });
      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 1440 790"
      fill="none"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <filter id="bg-filter0" x="-307.663" y="-281.655" width="938.118" height="926.953" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feGaussianBlur stdDeviation="114" result="effect1"/>
        </filter>
        <filter id="bg-f1" x="1319" y="-27" width="148" height="183" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feMorphology radius="1" operator="erode" in="SourceAlpha" result="e1"/><feOffset/><feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0"/><feBlend mode="normal" in2="shape" result="e1s"/>
        </filter>
        <filter id="bg-f2" x="121" y="-27" width="1196" height="183" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feMorphology radius="1" operator="erode" in="SourceAlpha" result="e1"/><feOffset/><feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0"/><feBlend mode="normal" in2="shape" result="e1s"/>
        </filter>
        <filter id="bg-f3" x="-29" y="-27" width="148" height="183" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feMorphology radius="1" operator="erode" in="SourceAlpha" result="e1"/><feOffset/><feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0"/><feBlend mode="normal" in2="shape" result="e1s"/>
        </filter>
        <filter id="bg-f4" x="-41" y="158" width="160" height="584" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feMorphology radius="1" operator="erode" in="SourceAlpha" result="e1"/><feOffset/><feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0"/><feBlend mode="normal" in2="shape" result="e1s"/>
        </filter>
        <filter id="bg-f5" x="121" y="158" width="265" height="584" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feMorphology radius="1" operator="erode" in="SourceAlpha" result="e1"/><feOffset/><feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0"/><feBlend mode="normal" in2="shape" result="e1s"/>
        </filter>
        <filter id="bg-f6" x="388" y="158" width="682" height="584" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feMorphology radius="1" operator="erode" in="SourceAlpha" result="e1"/><feOffset/><feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0"/><feBlend mode="normal" in2="shape" result="e1s"/>
        </filter>
        <filter id="bg-f7" x="1072" y="158" width="245" height="584" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feMorphology radius="3" operator="erode" in="SourceAlpha" result="e1"/><feOffset/><feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.68 0"/><feBlend mode="normal" in2="shape" result="e1s"/>
        </filter>
        <filter id="bg-f8" x="1319" y="158" width="148" height="585" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feMorphology radius="1" operator="erode" in="SourceAlpha" result="e1"/><feOffset/><feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0"/><feBlend mode="normal" in2="shape" result="e1s"/>
        </filter>
        <filter id="bg-f9" x="1319" y="745" width="148" height="75" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feMorphology radius="1" operator="erode" in="SourceAlpha" result="e1"/><feOffset/><feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0"/><feBlend mode="normal" in2="shape" result="e1s"/>
        </filter>
        <filter id="bg-f10" x="121" y="745" width="1196" height="75" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feMorphology radius="1" operator="erode" in="SourceAlpha" result="e1"/><feOffset/><feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0"/><feBlend mode="normal" in2="shape" result="e1s"/>
        </filter>
        <filter id="bg-f11" x="-29" y="745" width="148" height="75" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feMorphology radius="1" operator="erode" in="SourceAlpha" result="e1"/><feOffset/><feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0"/><feBlend mode="normal" in2="shape" result="e1s"/>
        </filter>
        <filter id="bg-f12" x="161" y="200" width="1105" height="503" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset/><feGaussianBlur stdDeviation="0.5"/>
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0.0360577 0 0 0 0 0.124864 0 0 0 0 0.25 0 0 0 0.2 0"/>
          <feBlend mode="normal" in2="shape" result="e1s"/>
        </filter>
        <filter id="bg-glow" x="-200%" y="-200%" width="500%" height="500%">
          <feGaussianBlur stdDeviation="4" result="blur"/>
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <radialGradient id="bg-paint0" cx="0" cy="0" r="1" gradientTransform="matrix(510.008 317.714 -325.247 2231.69 187.419 236.885)" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0076FF"/>
          <stop offset="1" stopColor="#7FDEFF"/>
        </radialGradient>
        <clipPath id="bg-clip0">
          <rect width="1440" height="790" fill="white" transform="matrix(-1 0 0 1 1440 0)"/>
        </clipPath>
      </defs>

      <g clipPath="url(#bg-clip0)">
        {/* Glow ellipse */}
        <g filter="url(#bg-filter0)">
          <ellipse cx="241.059" cy="235.477" rx="241.059" ry="235.477" transform="matrix(-0.999999 0.00143363 0.00143363 0.999999 402.117 -54)" fill="url(#bg-paint0)"/>
        </g>

        {/* Top row */}
        <g filter="url(#bg-f1)"><rect width="148" height="183" rx="28" transform="matrix(-1 0 0 1 1467 -27)" fill="white"/></g>
        <rect x="-0.5" y="0.5" width="147" height="182" rx="27.5" transform="matrix(-1 0 0 1 1466 -27)" stroke="#F9F9F9"/>
        <g filter="url(#bg-f2)"><rect width="1196" height="183" rx="28" transform="matrix(-1 0 0 1 1317 -27)" fill="white"/></g>
        <rect x="-0.5" y="0.5" width="1195" height="182" rx="27.5" transform="matrix(-1 0 0 1 1316 -27)" stroke="#F9F9F9"/>
        <g filter="url(#bg-f3)"><rect width="148" height="183" rx="28" transform="matrix(-1 0 0 1 119 -27)" fill="white"/></g>
        <rect x="-0.5" y="0.5" width="147" height="182" rx="27.5" transform="matrix(-1 0 0 1 118 -27)" stroke="#F9F9F9"/>

        {/* Side columns */}
        <g filter="url(#bg-f4)"><rect x="-41" y="158" width="160" height="584" rx="28" fill="white"/></g>
        <rect x="-40.5" y="158.5" width="159" height="583" rx="27.5" stroke="#F9F9F9"/>
        <g filter="url(#bg-f5)"><rect x="121" y="158" width="265" height="584" rx="28" fill="white"/></g>
        <rect x="121.5" y="158.5" width="264" height="583" rx="27.5" stroke="#F9F9F9"/>
        <g filter="url(#bg-f6)"><rect x="388" y="158" width="682" height="584" rx="28" fill="white"/></g>
        <rect x="388.5" y="158.5" width="681" height="583" rx="27.5" stroke="#F9F9F9"/>
        <g filter="url(#bg-f7)"><rect x="1072" y="158" width="245" height="584" rx="28" fill="white"/></g>
        <rect x="1072.5" y="158.5" width="244" height="583" rx="27.5" stroke="#F9F9F9"/>
        <g filter="url(#bg-f8)"><rect x="1319" y="158" width="148" height="585" rx="28" fill="white"/></g>
        <rect x="1319.5" y="158.5" width="147" height="584" rx="27.5" stroke="#F9F9F9"/>

        {/* Bottom row */}
        <g filter="url(#bg-f9)"><rect width="148" height="75" rx="28" transform="matrix(-1 0 0 1 1467 745)" fill="white"/></g>
        <rect x="-0.5" y="0.5" width="147" height="74" rx="27.5" transform="matrix(-1 0 0 1 1466 745)" stroke="#F9F9F9"/>
        <g filter="url(#bg-f10)"><rect width="1196" height="75" rx="28" transform="matrix(-1 0 0 1 1317 745)" fill="white"/></g>
        <rect x="-0.5" y="0.5" width="1195" height="74" rx="27.5" transform="matrix(-1 0 0 1 1316 745)" stroke="#F9F9F9"/>
        <g filter="url(#bg-f11)"><rect width="148" height="75" rx="28" transform="matrix(-1 0 0 1 119 745)" fill="white"/></g>
        <rect x="-0.5" y="0.5" width="147" height="74" rx="27.5" transform="matrix(-1 0 0 1 118 745)" stroke="#F9F9F9"/>

        {/* Static grid lines */}
        <g filter="url(#bg-f12)">
          <path d="M756.5 200C757.328 200 758 200.672 758 201.5C758 202.328 757.328 203 756.5 203L683.5 203C682.672 203 682 202.328 682 201.5C682 200.672 682.672 200 683.5 200L756.5 200Z" fill="#F9F9F9"/>
          <path d="M721.963 700.17C721.964 700.999 721.292 701.672 720.463 701.672C719.635 701.672 718.964 701.001 718.963 700.173L718.501 201.501C718.501 200.672 719.172 200 720.001 200C720.829 200 721.501 200.671 721.501 201.499L721.963 700.17Z" fill="#F9F9F9"/>
          <path d="M683.5 703C682.672 703 682 702.328 682 701.5C682 700.672 682.672 700 683.5 700H756.5C757.328 700 758 700.672 758 701.5C758 702.328 757.328 703 756.5 703H683.5Z" fill="#F9F9F9"/>
          <path d="M718.5 628.5C718.5 627.672 719.172 627 720 627C720.828 627 721.5 627.672 721.5 628.5V701.5C721.5 702.328 720.828 703 720 703C719.172 703 718.5 702.328 718.5 701.5V628.5Z" fill="#F9F9F9"/>
          <path d="M162.5 413C161.672 413 161 413.672 161 414.5V487.5C161 488.328 161.672 489 162.5 489C163.328 489 164 488.328 164 487.5V452.5L1232.94 452.688C1233.2 452.688 1233.45 452.619 1233.66 452.5H1263V487.5C1263 488.328 1263.67 489 1264.5 489C1265.33 489 1266 488.328 1266 487.5V414.5C1266 413.672 1265.33 413 1264.5 413C1263.67 413 1263 413.672 1263 414.5V449.5H1191.5C1191.24 449.5 1191 449.565 1190.79 449.68L164 449.5V414.5C164 413.672 163.328 413 162.5 413Z" fill="#F9F9F9"/>
        </g>

        {/* Animated lines — controlled via useEffect refs */}
        <line ref={lineV}     x1="720"  y1="200" x2="720"  y2="700" stroke="#00d4ff" strokeWidth="2.5" strokeLinecap="round" filter="url(#bg-glow)" />
        <line ref={lineHL}    x1="161"  y1="451" x2="720"  y2="451" stroke="#00d4ff" strokeWidth="2.5" strokeLinecap="round" filter="url(#bg-glow)" />
        <line ref={lineHR}    x1="720"  y1="451" x2="1266" y2="451" stroke="#00d4ff" strokeWidth="2.5" strokeLinecap="round" filter="url(#bg-glow)" />
        <line ref={lineStubL} x1="163"  y1="414" x2="163"  y2="452" stroke="#00d4ff" strokeWidth="2.5" strokeLinecap="round" filter="url(#bg-glow)" />
        <line ref={lineStubR} x1="1264" y1="414" x2="1264" y2="452" stroke="#00d4ff" strokeWidth="2.5" strokeLinecap="round" filter="url(#bg-glow)" />
      </g>
    </svg>
  );
}
