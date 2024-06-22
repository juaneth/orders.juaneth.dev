/*
  Data I need:
  A) Select order type
  B) Description of whats needed + Preffered method of communication (Body of request)
  C) Reference images
*/

"use client";

import Link from "next/link";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { AuroraBackground } from "~/components/ui/aurora-background";

import { useForm } from "react-hook-form";
import { Button } from "~/components/ui/button";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";

import { Input } from "~/components/ui/input";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";

import { Textarea } from "~/components/ui/textarea";

import { Separator } from "~/components/ui/separator";
import { Label } from "~/components/ui/label";

export default function Order() {
  "use client";

  const formSchema = z.object({
    type: z.string().min(2, {
      message: "An order ype must be selected.",
    }),
    body: z
      .string()
      .min(20, {
        message: "Minimum 20 chars.",
      })
      .max(100, {
        message: "Maximum 1000 chars.",
      }),
    commsPlatform: z.string(),
    commsData: z.string(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      type: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <div className="flex h-[800px] w-full items-center justify-center p-5">
      <AuroraBackground
        className="h-full w-full max-w-[81rem]"
        showRadialGradient={true}
      >
        <Card className="panel crossed relative w-full rounded-none border-dashed bg-black/75 backdrop-hue-rotate-30">
          <CardHeader>
            <CardTitle>Your order request</CardTitle>
            <CardDescription className="">
              Just a few steps and you&apos;ll be done. No payment is due yet
              just put in a request and I will get back to you.
            </CardDescription>
          </CardHeader>
          <CardContent className="h-full">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex w-full flex-col space-y-3"
              >
                <FormField
                  control={form.control}
                  name="type"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Type</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="">
                            <SelectValue placeholder="Select a type of order" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="simpleweb">
                            Simple Website
                          </SelectItem>
                          <SelectItem value="complexweb">
                            Complex Website
                          </SelectItem>

                          <SelectItem value="webapp">Web App</SelectItem>
                          <SelectItem value="customweb">
                            Custom Website
                          </SelectItem>
                          <Separator className="my-2"></Separator>
                          <SelectItem value="smallbrand">
                            Small business brand design
                          </SelectItem>
                          <SelectItem value="ecombrand">
                            Ecommerce brand design
                          </SelectItem>
                          <SelectItem value="custombrand">
                            Custom brand design
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      <FormDescription>
                        See average pricing{" "}
                        <Button
                          variant={"link"}
                          className="h-min translate-y-[1px] p-0"
                        >
                          <Link href="/">here</Link>
                        </Button>
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="body"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Description</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Short description of what you want (eg. web app for my business cheapflowers.co.uk with a floral design and product lists"
                          {...field}
                          className="h-[250px]"
                        />
                      </FormControl>
                      <FormDescription>
                        Keep it short + polite, anything you put here can be
                        changed later. (used for quoting)
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="commsPlatform"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Preffered communication</FormLabel>
                      <FormControl>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="">
                              <SelectValue placeholder="Select a type of communication" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="email">Email</SelectItem>
                            <SelectItem value="complexweb">Discord</SelectItem>

                            <SelectItem value="webapp">X (Twitter)</SelectItem>
                            <SelectItem value="customweb">
                              Other (specify below)
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormDescription>
                        Keep it short + polite, anything you put here can be
                        changed later. (used for quoting)
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="commsData"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{field.value} Username/email</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="me@email.com | @mytwitter"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        Keep it short + polite, anything you put here can be
                        changed later. (used for quoting)
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex flex-row gap-3 self-end justify-self-end">
                  <Button
                    className="crossed relative border-dashed hover:bg-green-700 hover:shadow-xl hover:shadow-green-600/20"
                    variant={"outline"}
                    type="submit"
                  >
                    Submit request
                  </Button>

                  <Link href={"/"}>
                    <Button
                      className="crossed relative border-dashed"
                      variant={"outline"}
                      type="submit"
                    >
                      Cancel
                    </Button>
                  </Link>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
      </AuroraBackground>
    </div>
  );
}
