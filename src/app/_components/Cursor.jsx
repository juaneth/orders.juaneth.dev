"use client";

import CustomCursor from "custom-cursor-react";
import "custom-cursor-react/dist/index.css";

export default function Cursor() {
  return (
    <div>
      <CustomCursor
        targets={["a", "Button"]}
        customClass="custom-cursor"
        dimensions={30}
        fill="#FFF"
        smoothness={{
          movement: 0.15,
          scale: 0.1,
          opacity: 0.5,
        }}
        targetOpacity={0.5}
        targetScale={2}
      />
    </div>
  );
}
