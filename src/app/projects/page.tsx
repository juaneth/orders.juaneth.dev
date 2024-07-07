"use client";

let projects = [
  {
    name: "DashboardKit",
    desc: "Dashboards have never been easier.",
    url: "https://dashkit.juaneth.dev",
    image: ({ className }: { className?: string }) => {
      return (
        <>
          <svg
            viewBox="0 0 131 111"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
          >
            <path
              d="M86 0H130.5V42.5L118.5 31.0393V11H97.5176L86 0Z"
              fill="white"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M62.2851 24.7056V95.7056H74.7973V80.2472L100.884 110.706H116.111L88.4899 78.6944V77.7389L112.924 51.4611H97.2248L74.7973 76.3055V24.7056H62.2851Z"
              fill="white"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0 84.9054V55L12.5122 68V84.9054H19.3585C28.959 84.9054 35.884 82.198 40.1334 76.7832C44.3828 71.2888 46.5075 63.9629 46.5075 54.8054C46.5075 45.648 44.3828 38.362 40.1334 32.9472C35.884 27.4528 28.959 24.7056 19.3585 24.7056H12.5122L0 13H19.8306C33.1297 13 43.0057 16.7426 49.4585 24.2278C55.9113 31.6333 59.1378 41.8258 59.1378 54.8054C59.1378 67.7851 55.9113 78.0175 49.4585 85.5027C43.0057 92.9082 33.1297 96.611 19.8306 96.611H0V84.9054Z"
              fill="white"
            />
            <path
              d="M12.5122 37.7054L0 24.7056V43L12.5122 56V37.7054Z"
              fill="white"
            />
          </svg>
        </>
      );
    },
    bannerURL: "https://dashkit.juaneth.dev/banner.png",
    socials: [
      { github: "https://github.com/juaneth/dashboardkit" },
      { twitterX: "https://x.com/@dashboardkit" },
    ],
  },
  {
    name: "Argo",
    desc: "Building a better open source.",
    url: "https://argo.juaneth.dev",
    image: ({ className }: { className?: string }) => {
      return (
        <>
          <svg
            viewBox="0 0 236 210"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
          >
            <g filter="url(#filter0_d_29_7)">
              <path
                d="M110.374 156.057C86.5575 142.205 62.4695 122.296 43.8612 97.7854C38.2117 90.3441 33.0674 82.4785 28.589 74.2296C-8.37049 6.1522 49.6875 4.53179 109.685 39.5036C133.752 53.5323 158.132 73.4493 176.816 97.3266C182.8 104.974 188.199 113.028 192.817 121.424C229.097 187.389 170.605 191.091 110.374 156.057Z"
                stroke="white"
                strokeWidth="33"
              />
            </g>
            <g filter="url(#filter1_d_29_7)">
              <path
                d="M44.1396 97.9474C61.3016 76.5523 84.8751 55.0669 109.705 39.6132C131.831 25.842 154.955 16.8607 175.428 17.0016C218.159 17.2959 208.252 57.4735 176.571 97.4882C159.311 119.29 135.586 141.044 110.391 156.272C89.1273 169.123 66.816 177.327 46.4575 176.99C2.71774 176.266 12.6056 137.259 44.1396 97.9474Z"
                stroke="white"
                strokeWidth="33"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_29_7"
                x="0.499954"
                y="0.500366"
                width="235.001"
                height="209"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dx="15" dy="15" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_29_7"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_29_7"
                  result="shape"
                />
              </filter>
              <filter
                id="filter1_d_29_7"
                x="0.50235"
                y="0.5"
                width="234.995"
                height="208"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dx="15" dy="15" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_29_7"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_29_7"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </>
      );
    },
    bannerURL: "https://dashkit.juaneth.dev/banner.png",
    socials: [
      { github: "https://github.com/juaneth/dashboardkit" },
      { twitterX: "https://x.com/@dashboardkit" },
    ],
  },
];

import { Separator } from "~/components/ui/separator";
import { DM_Mono } from "next/font/google";

import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "~/components/ui/canvas-reveal";
import React from "react";

import { cn } from "~/lib/utils";

const dmmono = DM_Mono({ subsets: ["latin"], weight: "500" });

import Link from "next/link";

export default function ProjectsPage() {
  return (
    <>
      <div className="">
        <h1>meow2</h1>
      </div>
    </>
  );
}

export function ProjectsWidget() {
  return (
    <div className="flex flex-col gap-0">
      {projects.map((project) => {
        return (
          <>
            <Card
              key={project.name}
              prev={
                <div className="flex h-32 w-full flex-col items-center justify-center gap-0">
                  <div className="w-16">
                    <project.image className={"opacity-90"}></project.image>
                  </div>
                </div>
              }
              className={"h-32"}
              content={
                <>
                  <Link href={project.url}>
                    <div className="flex h-full flex-col items-center justify-center gap-0">
                      <div className="flex flex-col gap-1">
                        <h1 className="text-2xl font-semibold tracking-tighter">
                          {project.name}:
                        </h1>
                        <h1 className="text-xl opacity-90">{project.desc}</h1>
                      </div>
                    </div>
                  </Link>
                </>
              }
            >
              <CanvasRevealEffect
                animationSpeed={7}
                containerClassName="bg-black"
                colors={[
                  [36, 36, 36],
                  [60, 56, 94],
                ]}
                dotSize={10}
              />

              {/* Radial gradient for the cute fade */}
              <div className="absolute inset-0 bg-black/70 [mask-image:radial-gradient(400px_at_center,white,transparent)]" />
            </Card>

            <Separator></Separator>
          </>
        );
      })}
    </div>
  );
}

const Card = ({
  content,
  prev,
  children,
  className,
}: {
  content: React.ReactNode;
  prev?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={cn(
        "group/canvas-card crossed relative flex w-full",
        className,
      )}
    >
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0.0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 h-full w-full"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20 w-full">
        <div className="absolute top-0 flex  w-full transition duration-200 group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0">
          {prev}
        </div>
        <h2 className="absolute top-0 z-10 h-full w-full opacity-0 transition duration-200 group-hover/canvas-card:-translate-y-0 group-hover/canvas-card:opacity-100">
          {content}
        </h2>
      </div>
    </div>
  );
};
