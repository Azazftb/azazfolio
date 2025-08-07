"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export default function GridBackground() {
  const [viewportWidth, setViewportWidth] = useState(1920);
  const [viewportHeight, setViewportHeight] = useState(1080);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Provide fallback, update once client-side
  useEffect(() => {
    setViewportWidth(window.innerWidth);
    setViewportHeight(window.innerHeight);
  }, []);

  const translateX = useTransform(x, [0, viewportWidth], [-30, 30]);
  const translateY = useTransform(y, [0, viewportHeight], [-30, 30]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [x, y]);

  return (
    <motion.div
      className="absolute inset-0 -z-10 pointer-events-none opacity-10"
      style={{
        backgroundSize: "40px 40px",
        backgroundImage:
          "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
        translateX,
        translateY,
      }}
    />
  );
}
