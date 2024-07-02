import Link from "next/link";

export default function Desc() {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-2 p-7 font-medium tracking-tight text-white/90">
      <p>
        Hey, I&apos;m juan. I&apos;m a 16yr old web developer from the UK,
        currently working up my portfolio and furthuring my skills. I sometimes
        work with{" "}
        <Link
          className="text-blue-400 underline hover:text-blue-500"
          href={"https://silvias.uk"}
        >
          Silvias.uk
        </Link>
        .
      </p>
    </div>
  );
}
