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

export default async function Home() {
  return (
    <div className="flex flex w-full grow flex-col items-center">
      <div className="bordered-all m-3 max-w-[100rem] grow grid-cols-12 grid-rows-12 divide-x divide-y divide-dashed divide-white/30 lg:grid">
        <div className="crossed relative col-span-12 row-span-3 border-dashed">
          <AuroraBackground
            className="min-h-48 w-full"
            containerClassName="justify-center items-center h-full"
          >
            <div className="flex flex-col items-center justify-center gap-4 bg-black/30 text-center">
              <h1 className="text-5xl font-bold tracking-tighter text-white">
                juaneth.dev
              </h1>
              <p className="text-lg text-white/75">
                Full stack/web developer from the UK.
              </p>
            </div>
          </AuroraBackground>
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
        <div className="crossed techlist relative col-span-12 row-span-1">
          <AuroraBackground
            className="min-h-24 rotate-180"
            containerClassName="flex rotate-180 backdrop-hue-rotate-30 bg-black/60 flex-row items-center justify-center gap-7 text-white/85 h-full"
          >
            <RiJavascriptFill className="text-5xl" />
            <BiLogoTypescript className="text-5xl" />
            <RiNextjsFill className="text-5xl" />
            <RiTailwindCssFill className="text-5xl" />
            <FaReact className="text-4xl" />
            <FaFigma className="text-4xl" />
            <FaServer className="text-4xl" />
            <SiClerk className="text-4xl" />
            <FaNode className="text-6xl" />
          </AuroraBackground>
        </div>

        <div className="crossed relative col-span-6 row-span-7 flex flex-col gap-5 p-5">
          <Card>
            <CardHeader>
              <CardTitle>DashboardKit</CardTitle>
              <CardDescription>
                Dashboards have never been easier.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Image
                src={
                  "https://preview.redd.it/i-got-bored-so-i-decided-to-draw-a-random-image-on-the-v0-4ig97vv85vjb1.png?width=640&crop=smart&auto=webp&s=22ed6cc79cba3013b84967f32726d087e539b699"
                }
                width={500}
                height={200}
                className="h-[200px] w-full rounded-lg border-2 border-dashed border-white object-cover"
                alt="dashboardkit preview"
              ></Image>
            </CardContent>
            <CardFooter>
              <Link
                href={"https://dashboardkit.juaneth.dev"}
                className="text-blue-300 hover:after:content-[&apos;_↗&apos;]"
              >
                Website
              </Link>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Argo</CardTitle>
              <CardDescription>
                Open source driven by the community.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Image
                src={
                  "https://preview.redd.it/i-got-bored-so-i-decided-to-draw-a-random-image-on-the-v0-4ig97vv85vjb1.png?width=640&crop=smart&auto=webp&s=22ed6cc79cba3013b84967f32726d087e539b699"
                }
                width={500}
                height={200}
                className="h-[200px] w-full rounded-lg border-2 border-dashed border-white object-cover"
                alt="argo preview"
              ></Image>
            </CardContent>
            <CardFooter>
              <Link
                href={"https://dashboardkit.juaneth.dev"}
                className="text-blue-300 hover:after:content-[&apos;_↗&apos;]"
              >
                Website
              </Link>
            </CardFooter>
          </Card>
        </div>
        <div className="crossed relative col-span-6 row-span-4 p-5">
          Articles
        </div>
        <div className="crossed relative col-span-6 row-span-4 p-5">
          About me
        </div>
      </div>
    </div>
  );
}
