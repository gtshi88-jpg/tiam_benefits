"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

interface Props {
  src: string;
  alt?: string;
  height?: string;
  overlayOpacity?: number;
  children?: React.ReactNode;
}

export function ParallaxBanner({
  src,
  alt = "",
  height = "360px",
  overlayOpacity = 0.45,
  children,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <div
      ref={ref}
      className="relative overflow-hidden"
      style={{ height }}
    >
      <motion.div className="absolute inset-0" style={{ y, top: "-20%", bottom: "-20%" }}>
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="100vw"
          quality={85}
        />
      </motion.div>
      <div
        className="absolute inset-0"
        style={{ backgroundColor: `rgba(26,26,26,${overlayOpacity})` }}
      />
      {children && (
        <div className="relative z-10 flex h-full items-center justify-center px-4">
          {children}
        </div>
      )}
    </div>
  );
}
