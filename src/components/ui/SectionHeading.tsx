import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeading({
  badge,
  title,
  subtitle,
  centered = true,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-12 md:mb-16",
        centered ? "text-center items-center" : "text-left items-start",
        "flex flex-col",
        className
      )}
    >
      {badge && (
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium tracking-wide uppercase bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
          {badge}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="max-w-2xl text-base sm:text-lg text-zinc-400 leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
