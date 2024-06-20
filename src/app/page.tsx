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

import { AuroraBackground } from "~/components/ui/aurora-background";
import { Spotlight } from "~/components/ui/spotlight";

import { IoIosAdd } from "react-icons/io";

import Link from "next/link";

export default async function Home() {
  return (
    <div className="flex min-h-full flex-col">
      <div className="flex w-full flex-row justify-center">
        <AuroraBackground className="bordered-all m-5 h-[81vh] w-full rounded-lg">
          <div className="flex flex-col items-center justify-center gap-3 bg-black/30 text-center">
            <h1 className="px-10 text-4xl font-bold tracking-tighter text-white">
              Get your online brand started with juaneth.dev.
            </h1>
            <p className="text-white/75">
              Professional quality websites. Fast.
            </p>

            <Link href={"/order"}>
              <Button
                className="bordered-all crossed relative mt-3 w-48 rounded-sm border-dashed bg-black text-white hover:bg-neutral-950"
                role="button"
              >
                Create an order
              </Button>
            </Link>
          </div>
        </AuroraBackground>
      </div>

      <div className="flex w-full flex-col items-start justify-center justify-center gap-10 p-5">
        <div className="flex w-full flex-col items-center justify-center gap-5 bg-black">
          <h1 className="text-3xl font-bold tracking-tighter">Services:</h1>

          <Tabs defaultValue="websites" className="w-full xl:max-w-[80%]">
            <TabsList className="w-full justify-center gap-3 bg-black">
              <TabsTrigger value="websites">Websites</TabsTrigger>
              <Separator
                orientation="vertical"
                className="mx-0 h-3/4 px-0"
              ></Separator>
              <TabsTrigger value="brands">Brand design</TabsTrigger>
              <Separator
                orientation="vertical"
                className="mx-0 h-3/4 px-0"
              ></Separator>
              <TabsTrigger value="hire">Full time</TabsTrigger>
            </TabsList>
            <TabsContent value="websites" className="w-full">
              <Card className="panel crossed relative w-full w-full rounded-none border-dashed">
                <Spotlight fill="#919191"></Spotlight>
                <CardHeader>
                  <CardTitle>Websites</CardTitle>
                  <CardDescription>
                    Give yourself an online prescence.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Table className="table">
                    <TableCaption>
                      Feel free to contact, prices are negotiable.
                    </TableCaption>
                    <TableHeader>
                      <TableRow className="border-dashed">
                        <TableHead className="w-min">Complexity:</TableHead>
                        <TableHead className="w-[175px]">
                          Usual Features:
                        </TableHead>
                        <TableHead>Completed within:</TableHead>
                        <TableHead>Revisions:</TableHead>
                        <TableHead className="text-right">
                          Avg. Price:
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">
                          Simple website
                        </TableCell>
                        <TableCell>
                          3 Pages, Contact info, Mobile + Desktop support,
                          Static
                        </TableCell>
                        <TableCell>3 Days</TableCell>
                        <TableCell>3</TableCell>
                        <TableCell className="text-right">$14.99</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">
                          Complex website
                        </TableCell>
                        <TableCell>
                          10 Pages, Analytics, SEO, Interactive, Animations
                        </TableCell>
                        <TableCell>10 Days</TableCell>
                        <TableCell>5</TableCell>
                        <TableCell className="text-right">$39.99</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Web App</TableCell>
                        <TableCell>
                          Accounts, Admin Dashboard, Feature rich experience
                        </TableCell>
                        <TableCell>30 Days</TableCell>
                        <TableCell>Unlimited</TableCell>
                        <TableCell className="text-right">$79.99</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Custom</TableCell>
                        <TableCell>
                          Anything not listed here (Forums, Complex animations,
                          Databases, etc.)
                        </TableCell>
                        <TableCell>N/A</TableCell>
                        <TableCell>Unlimited</TableCell>
                        <TableCell className="text-right">$99.99+</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="brands">
              <Card className="panel crossed w-full w-full rounded-none border-dashed">
                <Spotlight fill="#919191"></Spotlight>
                <CardHeader>
                  <CardTitle>Brand design</CardTitle>
                  <CardDescription>
                    Give your business an identity.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableCaption>
                      Feel free to contact, prices are negotiable.
                    </TableCaption>
                    <TableHeader>
                      <TableRow className="border-dashed">
                        <TableHead className="w-min">Complexity:</TableHead>
                        <TableHead className="w-[175px]">
                          Usual Features:
                        </TableHead>
                        <TableHead>Completed within:</TableHead>
                        <TableHead>Revisions:</TableHead>
                        <TableHead className="text-right">
                          Avg. Price:
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">
                          Small business
                        </TableCell>
                        <TableCell>
                          Small business social media designs (icons, banners),
                          Simple website (see above)
                        </TableCell>
                        <TableCell>15 Days</TableCell>
                        <TableCell>5</TableCell>
                        <TableCell className="text-right">$49.99</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Ecommerce</TableCell>
                        <TableCell>
                          Social media posts and marketing images for online
                          advertisment (Instagram, Facebook, X), Complex website
                        </TableCell>
                        <TableCell>25 Days</TableCell>
                        <TableCell>15</TableCell>
                        <TableCell className="text-right">$119.99</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Custom</TableCell>
                        <TableCell>Anything not listed here.</TableCell>
                        <TableCell>N/A</TableCell>
                        <TableCell>Unlimited</TableCell>
                        <TableCell className="text-right">$149.99+</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="hire">
              <Card className="panel crossed w-full w-full rounded-none border-dashed">
                <Spotlight fill="#919191"></Spotlight>
                <CardHeader>
                  <CardTitle>Full time</CardTitle>
                  <CardDescription>
                    Hire me as a full time developer. My contact info is below:
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Table className="table">
                    <TableHeader>
                      <TableRow className="border-dashed">
                        <TableHead className="w-min">Contact type:</TableHead>
                        <TableHead>Contact info:</TableHead>
                        <TableHead>Notes:</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">Email</TableCell>
                        <TableCell>
                          <a href="mailto:juan@juaneth.dev">juan@juaneth.dev</a>
                        </TableCell>
                        <TableCell></TableCell>
                      </TableRow>

                      <TableRow>
                        <TableCell className="font-medium">Discord</TableCell>
                        <TableCell>
                          <a href="https://discord.com/invite/SK4mW9shTb">
                            https://discord.com/invite/SK4mW9shTb
                          </a>
                        </TableCell>
                        <TableCell>
                          Use /contact to create a chat for us or just ping me.
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">X</TableCell>
                        <TableCell>
                          <a href="https://x.com/juanethdev">
                            https://x.com/juanethdev
                          </a>
                        </TableCell>
                        <TableCell>
                          DM me and I'll respond within a couple days
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        <div className="flex w-full flex-col items-center justify-center gap-5 bg-black">
          <h1 className="text-3xl font-bold tracking-tighter">
            Previous work:
          </h1>

          <Tabs defaultValue="websites" className="w-full xl:max-w-[80%]">
            <TabsList className="w-full justify-center gap-3 bg-black">
              <TabsTrigger value="websites">Projects</TabsTrigger>
              <Separator
                orientation="vertical"
                className="mx-0 h-3/4 px-0"
              ></Separator>
              <TabsTrigger value="designs">Designs</TabsTrigger>
            </TabsList>
            <TabsContent value="websites" className="w-full">
              <Card className="panel crossed relative w-full w-full rounded-none border-dashed">
                <Spotlight fill="#919191"></Spotlight>
                <CardHeader>
                  <CardTitle>Projects</CardTitle>
                  <CardDescription>
                    Websites and apps that I've made over the years.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Table className="table">
                    <TableHeader>
                      <TableRow className="border-dashed">
                        <TableHead className="w-min">Name:</TableHead>
                        <TableHead className="w-[175px]">Link:</TableHead>
                        <TableHead>How long to make:</TableHead>
                        <TableHead className="text-right">
                          What I would charge:
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">
                          <HoverCard>
                            <HoverCardTrigger>
                              <Button variant={"link"} className="px-0">
                                juaneth.dev
                              </Button>
                            </HoverCardTrigger>
                            <HoverCardContent className="w-96">
                              <img
                                src="https://i.imghippo.com/files/AFzGE1718840488.png"
                                alt=""
                                className="w-full rounded"
                              />
                            </HoverCardContent>
                          </HoverCard>
                        </TableCell>
                        <TableCell>
                          <Link href="https://juaneth.dev">
                            <Button variant={"link"} className="px-0">
                              juaneth.dev
                            </Button>
                          </Link>
                        </TableCell>
                        <TableCell>~3 weeks</TableCell>
                        <TableCell className="text-right">$99.99</TableCell>
                      </TableRow>

                      <TableRow>
                        <TableCell className="font-medium">
                          orders.juaneth.dev
                        </TableCell>
                        <TableCell>You're here!</TableCell>
                        <TableCell>~1 week</TableCell>
                        <TableCell className="text-right">$119.99</TableCell>
                      </TableRow>

                      <TableRow>
                        <TableCell className="font-medium">Argo</TableCell>
                        <TableCell>
                          <HoverCard>
                            <HoverCardTrigger>
                              <Link href={"https://argo.juaneth.dev"}>
                                <Button variant={"link"} className="px-0">
                                  argo.juaneth.dev
                                </Button>
                              </Link>
                            </HoverCardTrigger>
                            <HoverCardContent className="w-96">
                              <img
                                src="https://i.imghippo.com/files/THTt61718840885.png"
                                alt=""
                                className="w-full rounded"
                              />
                            </HoverCardContent>
                          </HoverCard>
                        </TableCell>
                        <TableCell>Still in development</TableCell>
                        <TableCell className="text-right">$154.99+</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">
                          juaneth.dev -- old version
                        </TableCell>
                        <TableCell>
                          <HoverCard>
                            <HoverCardTrigger>
                              <Link
                                href={"https://github.com/juaneth/juanethdev"}
                              >
                                <Button variant={"link"} className="px-0">
                                  github.com
                                </Button>
                              </Link>
                            </HoverCardTrigger>
                            <HoverCardContent className="w-96">
                              <img
                                src="https://i.imghippo.com/files/aslI91718841016.png"
                                alt=""
                                className="w-full rounded"
                              />
                            </HoverCardContent>
                          </HoverCard>
                        </TableCell>
                        <TableCell>~2 weeks</TableCell>
                        <TableCell className="text-right">
                          $39.99 + $19.99 for 3D designing
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="designs">
              <Card className="panel crossed w-full w-full rounded-none border-dashed">
                <Spotlight fill="#919191"></Spotlight>
                <CardHeader>
                  <CardTitle>Designs</CardTitle>
                  <CardDescription>
                    Designs i've made over the years for various reasons.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow className="border-dashed">
                        <TableHead className="w-min">Complexity:</TableHead>
                        <TableHead className="w-[175px]">
                          Usual Features:
                        </TableHead>
                        <TableHead>Completed within:</TableHead>
                        <TableHead>Revisions:</TableHead>
                        <TableHead className="text-right">
                          Avg. Price:
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">
                          Small business
                        </TableCell>
                        <TableCell>
                          Small business social media designs (icons, banners),
                          Simple website (see above)
                        </TableCell>
                        <TableCell>15 Days</TableCell>
                        <TableCell>5</TableCell>
                        <TableCell className="text-right">$49.99</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Ecommerce</TableCell>
                        <TableCell>
                          Social media posts and marketing images for online
                          advertisment (Instagram, Facebook, X), Complex website
                        </TableCell>
                        <TableCell>25 Days</TableCell>
                        <TableCell>15</TableCell>
                        <TableCell className="text-right">$119.99</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Custom</TableCell>
                        <TableCell>Anything not listed here.</TableCell>
                        <TableCell>N/A</TableCell>
                        <TableCell>Unlimited</TableCell>
                        <TableCell className="text-right">$149.99+</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
