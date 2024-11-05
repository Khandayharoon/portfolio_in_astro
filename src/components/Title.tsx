import { cn } from "@/lib/utils";
import React from "react";

export default function Title({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={cn(
        "md:text-5xl text-2xl  uppercase  font-bold group relative w-fit p-5  overflow-hidden bg-neutral-800 rounded-b-md ",
        className
      )}
    >
      {children}
    </h2>
  );
}
