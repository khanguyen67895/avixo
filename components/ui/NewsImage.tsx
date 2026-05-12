/* eslint-disable jsx-a11y/alt-text */
"use client";

import { useState } from "react";
import Image, { ImageProps } from "next/image";

const FALLBACK_IMG = "/images/news1.png";

type Props = Omit<ImageProps, "onError"> & { fallback?: string };

export function NewsImage({ fallback = FALLBACK_IMG, src, ...props }: Props) {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <Image
      {...props}
      src={imgSrc}
      onError={() => setImgSrc(fallback)}
    />
  );
}
