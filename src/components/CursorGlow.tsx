"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CursorGlow() {
  const [mounted, setMounted] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, {
    stiffness: 120,
    damping: 28,
    mass: 0.4,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 120,
    damping: 28,
    mass: 0.4,
  });

  useEffect(() => {
    setMounted(true);

    function handleMouseMove(event: MouseEvent) {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
    }

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  if (!mounted) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[45] hidden h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-300/20 blur-3xl md:block"
      style={{
        x: smoothX,
        y: smoothY,
      }}
    />
  );
}