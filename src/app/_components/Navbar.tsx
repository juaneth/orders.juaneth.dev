import Link from "next/link";

import { Button } from "~/components/ui/button";
import { Separator } from "~/components/ui/separator";

import { IoIosAdd } from "react-icons/io";

import { SignInButton, SignedOut, SignedIn, UserButton } from "@clerk/nextjs";

export default function Navbar() {
  return (
    <>
      <nav className="bordered-b sticky top-0 z-50 flex w-full flex-row items-center justify-between bg-black/50 p-3 px-5 shadow-xl shadow-black/30 backdrop-blur-lg">
        <div className="flex flex-row gap-4">
          <div className="flex flex-row items-center gap-3 text-xl font-bold tracking-tighter">
            <Link
              href={"https://juaneth.dev"}
              className="flex flex-col items-center justify-center"
            >
              <h1>juaneth.dev</h1>
            </Link>
            <Separator orientation="vertical" className="h-3/4" />

            <Link
              href={"/"}
              className="flex flex-col items-center justify-center"
            >
              <h2 className="text-lg font-normal">Commisions</h2>
            </Link>
          </div>
        </div>

        <div className="flex h-10 flex-row gap-4">
          <SignedIn>
            <Link href={"/order"}>
              <Button
                className="bordered-all relative gap-3 rounded-sm bg-black pl-3 pr-5 text-base font-normal text-white hover:bg-white/10"
                role="button"
              >
                <IoIosAdd className="text-2xl" />
                Create an order
              </Button>
            </Link>

            <Link href={"/orders"}>
              <Button
                variant={"link"}
                className="text-base font-semibold"
                role="button"
              >
                Your Orders
              </Button>
            </Link>

            <UserButton
              appearance={{
                elements: {
                  userButtonAvatarBox: "h-10 w-10 bordered-all border-dashed",
                },
              }}
            />
          </SignedIn>

          <SignedOut>
            <SignInButton></SignInButton>
          </SignedOut>
        </div>
      </nav>
    </>
  );
}
