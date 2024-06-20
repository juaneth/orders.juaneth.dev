"use client";
import { cn } from "~/lib/utils";
import React, { ReactNode } from "react";
import { ClassNameValue } from "tailwind-merge";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode;
  containerClassName?: string;
  showRadialGradient?: boolean;
}

export const AuroraBackground = ({
  className,
  containerClassName,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) => {
  return (
    <>
      <div
        className={cn(
          "transition-bg relative flex h-full flex-col items-center justify-center",
          className,
        )}
        {...props}
      >
        <div className="absolute inset-0 overflow-visible">
          <div
            className={cn(
              `
            pointer-events-none
            absolute
            inset-[0px]
            opacity-40
            blur-[10px]
            invert
            filter
            will-change-transform [--aurora:repeating-linear-gradient(100deg,var(--blue-500)_10%,var(--indigo-300)_15%,var(--blue-300)_20%,var(--violet-200)_25%,var(--blue-400)_30%)] [--dark-gradient:repeating-linear-gradient(100deg,var(--black)_0%,var(--black)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--black)_16%)] [--white-gradient:repeating-linear-gradient(100deg,var(--white)_0%,var(--white)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--white)_16%)]
            [background-image:var(--white-gradient),var(--aurora)] [background-position:50%_50%,50%_50%] [background-size:300%,_200%] after:absolute 
            after:inset-0
            after:animate-aurora 
            after:mix-blend-difference after:content-[""] after:[background-attachment:fixed]
            after:[background-image:var(--white-gradient),var(--aurora)]
            after:[background-size:200%,_100%] dark:invert-0 dark:[background-image:var(--dark-gradient),var(--aurora)] after:dark:[background-image:var(--dark-gradient),var(--aurora)]`,

              showRadialGradient &&
                `[mask-image:radial-gradient(ellipse_at_100%_0%,black_20%,var(--transparent)_90%)]`,
            )}
          ></div>
          <div className={cn("flex h-full w-full", containerClassName)}>
            {children}
          </div>
        </div>
      </div>
    </>
  );
};
