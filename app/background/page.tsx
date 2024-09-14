"use client";
import React from "react";
import { Boxes } from "@/components/ui/background";
import { cn } from "@/lib/utils";

const BackgroundBoxesDemo= () => {
  return (
    <div className="h-96 relative w-full overflow-hidden bg-green-700 flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <Boxes />
      <h1 className={cn("md:text-4xl text-xl text-white relative z-20")}>
      Platform Undangan Pernikahan Online
      </h1>
      <p className="text-center mt-2 text-neutral-300 relative z-20">
        Framer motion is the best animation library ngl
      </p>
    </div>
  );
}

export default BackgroundBoxesDemo;