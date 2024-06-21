"use client";

import { motion, useScroll } from "framer-motion";
import { useState } from "react";

import { Button } from "~/components/ui/button";

export default function OrderLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [progress, setProgress] = useState(0);

  function incrementProgress() {
    setProgress(progress + 0.3);
  }

  return (
    <div className="relative flex h-full flex-col bg-black">
      <div className="bordered-b flex h-2.5 w-full flex-row items-center">
        <motion.div
          className={
            progress >= 0.9
              ? "progress-bar bg-green-600 transition-colors duration-700"
              : "progress-bar bg-neutral-600 transition-colors duration-700"
          }
          animate={{ scaleX: progress }}
          transition={{ type: "spring", stiffness: 100 }}
        />
      </div>
      {children}
    </div>
  );
}
