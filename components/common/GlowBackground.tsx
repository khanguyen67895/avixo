"use client";

import Image from "next/image";
import { useRef, useEffect } from "react";

type Props = {
  src: string;
  children?: React.ReactNode;
  className?: string;
  glowRadius?: number;
  variant?: "cursor" | "perimeter";
  as?: React.ElementType;
  id?: string;
};

function posAt(d: number, W: number, H: number) {
  const P = 2 * (W + H);
  const dd = ((d % P) + P) % P;
  if (dd < W)          return { x: dd,               y: 0 };
  if (dd < W + H)      return { x: W,                y: dd - W };
  if (dd < 2 * W + H) return { x: W - (dd - W - H), y: H };
  return                      { x: 0,                y: H - (dd - 2 * W - H) };
}

export function GlowBackground({
  src,
  children,
  className = "",
  glowRadius = 120,
  variant = "perimeter",
  as: Tag = "div",
  id,
}: Props) {
  // Measurement div sits absolute inset-0 — its bounding rect == Tag's bounding rect
  const measureRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);
  const isHoveringRef = useRef(false);
  const mousePosRef = useRef({ x: -999, y: -999 });

  useEffect(() => {
    if (variant !== "perimeter") return;
    const pxPerFrame = 3;
    let dist = 0;

    const tick = () => {
      const el = measureRef.current;
      const glow = glowRef.current;
      if (!el || !glow) { rafRef.current = requestAnimationFrame(tick); return; }

      const W = el.offsetWidth;
      const H = el.offsetHeight;
      const P = 2 * (W + H);

      if (isHoveringRef.current) {
        const { x, y } = mousePosRef.current;
        glow.style.maskImage = `radial-gradient(${glowRadius + 40}px circle at ${x}px ${y}px, black 0%, transparent 100%)`;
      } else {
        dist = (dist + pxPerFrame) % P;
        const p0 = posAt(dist, W, H);
        const p1 = posAt(dist + P / 3, W, H);
        const p2 = posAt(dist + 2 * P / 3, W, H);
        glow.style.maskImage = [
          `radial-gradient(${glowRadius}px circle at ${p0.x}px ${p0.y}px, black 0%, transparent 100%)`,
          `radial-gradient(${glowRadius}px circle at ${p1.x}px ${p1.y}px, black 0%, transparent 100%)`,
          `radial-gradient(${glowRadius}px circle at ${p2.x}px ${p2.y}px, black 0%, transparent 100%)`,
        ].join(", ");
      }

      glow.style.filter = "drop-shadow(0 0 10px #7FDEFF) drop-shadow(0 0 24px #0076FF)";
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [variant, glowRadius]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const el = measureRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;

    if (variant === "perimeter") {
      mousePosRef.current = { x, y };
      isHoveringRef.current = true;
    } else {
      if (glowRef.current) {
        glowRef.current.style.filter = "drop-shadow(0 0 8px #7FDEFF) drop-shadow(0 0 20px #0076FF)";
        glowRef.current.style.clipPath = `circle(${glowRadius}px at ${x}px ${y}px)`;
      }
    }
  };

  const handleMouseLeave = () => {
    if (variant === "perimeter") {
      isHoveringRef.current = false;
    } else {
      if (glowRef.current) {
        glowRef.current.style.filter = "";
        glowRef.current.style.clipPath = "";
      }
    }
  };

  return (
    <Tag
      id={id}
      className={`relative bg-white ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Invisible measurement layer — no ref on dynamic Tag */}
      <div ref={measureRef} className="absolute inset-0 pointer-events-none" />
      {/* Static bg */}
      <Image src={src} alt="" fill className="object-center pointer-events-none opacity-20 md:opacity-100" />
      {/* Glow layer */}
      <div ref={glowRef} className="absolute inset-0 pointer-events-none hidden md:block">
        <Image src={src} alt="" fill className="object-center" />
      </div>
      {children}
    </Tag>
  );
}
