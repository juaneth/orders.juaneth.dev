import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "~/components/ui/hover-card";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";

import { Separator } from "~/components/ui/separator";

import Link from "next/link";
import Image from "next/image";

import { AuroraBackground } from "~/components/ui/aurora-background";

import { FaGithub, FaDiscord, FaFigma, FaShoppingBag } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import { BiLogoTypescript } from "react-icons/bi";
import { RiNextjsFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { RiJavascriptFill } from "react-icons/ri";
import { FaReact, FaServer } from "react-icons/fa";
import { SiClerk } from "react-icons/si";
import { FaNode } from "react-icons/fa";

import Desc from "./_components/Cards/Desc";
import { ProjectsWidget } from "./projects/page";

export default async function Home() {
  return (
    <div className="flex flex w-full grow flex-col items-center p-5">
      <div className="bordered-all flex w-full grow border-collapse grid-cols-12 grid-rows-12 flex-col divide-x divide-y divide-dashed divide-white/30 border-dashed lg:grid">
        <div className="crossed relative col-span-12 row-span-3 border-dashed">
          <AuroraBackground
            className="min-h-64 w-full rotate-180"
            containerClassName="justify-center backdrop-hue-rotate-30 rotate-180 items-center h-full w-full bg-black/30"
          >
            <div className="flex flex-col items-center justify-center gap-4 text-center">
              <h1 className="text-4xl font-bold -tracking-[.06em] text-white md:text-6xl">
                juaneth.dev
              </h1>
              <p className="text-lg text-white/75">
                Web developer from the UK.
              </p>
            </div>
          </AuroraBackground>
        </div>
        <div className="crossed relative col-span-12 row-span-1 flex flex-wrap items-center justify-center p-5 text-white/90">
          <div className="flex min-h-20 flex-row items-center gap-6 text-4xl md:text-5xl">
            <RiJavascriptFill />
            <BiLogoTypescript />
            <RiNextjsFill />
            <RiTailwindCssFill />
            <FaReact />
            <FaFigma />
            <FaNode />
          </div>
        </div>
        <div className="crossed relative col-span-8 row-span-1">
          <Desc></Desc>
        </div>
        <div className="crossed relative col-span-4 row-span-1 flex flex-row items-center justify-center gap-5 py-8">
          <Link href={"https://github.com/juaneth"}>
            <FaGithub className="text-3xl text-white/70 transition-all hover:text-white/90" />
          </Link>

          <Separator orientation="vertical"></Separator>

          <Link href={"https://discord.com/invite/SK4mW9shTb"}>
            <FaDiscord className="text-3xl text-white/70 transition-all hover:text-white/90" />
          </Link>

          <Separator orientation="vertical"></Separator>

          <Link href={"https://discord.com/invite/SK4mW9shTb"}>
            <FaXTwitter className="text-3xl text-white/70 transition-all hover:text-white/90" />
          </Link>

          <Separator orientation="vertical"></Separator>

          <Link href={"https://discord.com/invite/SK4mW9shTb"}>
            <FaFigma className="text-3xl text-white/70 transition-all hover:text-white/90" />
          </Link>
        </div>

        <div className="crossed relative col-span-8 row-span-7 flex flex-col">
          <ProjectsWidget></ProjectsWidget>
        </div>
        <div className="crossed relative col-span-4 row-span-4 p-5">
          Articles
        </div>
        <div className="crossed relative col-span-4 row-span-4 p-5">
          Things.
        </div>
      </div>
    </div>
  );
}
