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
    setProgress(progress + 0.2);
  }

  return (
    <div className="relative flex h-full flex-col bg-black">
      <div className="flex h-full flex-row">{children}</div>
    </div>
  );
}
