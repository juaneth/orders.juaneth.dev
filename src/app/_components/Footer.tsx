import Image from "next/image";

import footerImage from "../../../public/footer.svg";

import { AuroraBackground } from "~/components/ui/aurora-background";

export default function Footer() {
  return (
    <>
      <div className="bordered-t relative mt-5 flex w-full flex-row items-end justify-center bg-black bg-neutral-950">
        <div className="flex w-full flex-row justify-center">
          <AuroraBackground className="bordered-all crossed crossed-lg m-6 flex h-32 w-full w-screen flex-col justify-end rounded-lg border-dashed object-contain">
            <Image
              className="h-full w-full backdrop-blur-xl backdrop-hue-rotate-0 transition-all duration-1000 hover:backdrop-blur-2xl hover:backdrop-hue-rotate-60"
              src={footerImage}
              alt="juaneth.dev footer image"
            ></Image>
          </AuroraBackground>
        </div>
        <div className="relative max-w-[50rem]"></div>
      </div>
    </>
  );
}
