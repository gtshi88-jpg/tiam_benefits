"use client";

import { motion, type Variant } from "framer-motion";
import type { ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right" | "none";

const offsets: Record<Direction, { x: number; y: number }> = {
  up: { x: 0, y: 40 },
  down: { x: 0, y: -40 },
  left: { x: 40, y: 0 },
  right: { x: -40, y: 0 },
  none: { x: 0, y: 0 },
};

interface Props {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
  scale?: boolean;
  blur?: boolean;
}

export function ScrollAnimate({
  children,
  direction = "up",
  delay = 0,
  duration = 0.7,
  className,
  once = true,
  scale = false,
  blur = false,
}: Props) {
  const offset = offsets[direction];

  const hidden: Variant = {
    opacity: 0,
    x: offset.x,
    y: offset.y,
    ...(scale ? { scale: 0.95 } : {}),
    ...(blur ? { filter: "blur(8px)" } : {}),
  };

  const visible: Variant = {
    opacity: 1,
    x: 0,
    y: 0,
    ...(scale ? { scale: 1 } : {}),
    ...(blur ? { filter: "blur(0px)" } : {}),
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.15 }}
      variants={{ hidden, visible }}
      transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerContainer({
  children,
  className,
  stagger = 0.12,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
  direction = "up",
}: {
  children: ReactNode;
  className?: string;
  direction?: Direction;
}) {
  const offset = offsets[direction];

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, x: offset.x, y: offset.y },
        visible: { opacity: 1, x: 0, y: 0 },
      }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
