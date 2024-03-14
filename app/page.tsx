"use client"
import { Spotlight } from "@/components/ui/Spotlight";
import { useTheme } from "next-themes";

export default function Home() {
  const { resolvedTheme } = useTheme()
  return (
    <main>
      <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-background antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill={resolvedTheme == "light" ? "black" : "white"}
      />
      <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-foreground to-muted-foreground bg-opacity-50">
          Elder Eyre
        </h1>
        <p className="mt-4 font-normal text-base max-w-lg text-muted-foreground text-center mx-auto">
          My showcase of projects coded for the Global Service Department Coding Club
        </p>
      </div>
    </div>
    </main>
  );
}
