"use client"; // indicates Client Component

// Import with next's dynamic import
import dynamic from "next/dynamic";

const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
  ssr: false,
});

export default function Cursor() {
  return (
    <AnimatedCursor
      color="255, 255, 255"
      innerSize={0}
      outerSize={25}
      innerScale={1}
      outerScale={1.7}
      outerAlpha={1}
      outerStyle={{
        mixBlendMode: "exclusion",
      }}
    />
  );
}
