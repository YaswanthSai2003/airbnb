"use client";

import { useState, type ImgHTMLAttributes } from "react";

type Props = ImgHTMLAttributes<HTMLImageElement> & {
  fallbackSrc?: string;
};

export function ReferenceImage({
  src,
  fallbackSrc = "/images/listing/hero-1.jpeg",
  alt = "",
  onError,
  loading = "lazy",
  decoding = "async",
  ...props
}: Props) {
  const [currentSrc, setCurrentSrc] = useState(
    typeof src === "string" ? src : fallbackSrc,
  );

  return (
    // Native <img> keeps reference assets browser-direct instead of proxying them through Next image optimization.
    // eslint-disable-next-line @next/next/no-img-element
    <img
      {...props}
      src={currentSrc}
      alt={alt}
      loading={loading}
      decoding={decoding}
      referrerPolicy="no-referrer"
      onError={(event) => {
        if (currentSrc !== fallbackSrc) setCurrentSrc(fallbackSrc);
        onError?.(event);
      }}
    />
  );
}
