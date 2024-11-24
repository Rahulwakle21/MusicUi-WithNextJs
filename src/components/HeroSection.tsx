import Link from "next/link";
import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";

const HeroSection = () => {
  return (
    <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="red" />
      <div className="p-4 relative z-10 w-full text-center">
        <h1
          className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent
         bg-gradient-to-b from-neutral-50 to-neutral-400"
        >
          Master The Art of Music
        </h1>
        <p className="py-4 text-neutral-300 font-normal text-base md:text-lg max-w-lg mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi ab
          aperiam quaerat quod est! Molestias, iure culpa! Libero, quisquam
          accusantium.
        </p>
        <div className="mt-4 ">
          <Link href={"/courses"}>
            
            <Button
              borderRadius="1.75rem"
              className="bg-white dark:bg-slate-800 text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
              Explore Courses
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
