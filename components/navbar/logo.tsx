"use client";
import type { MouseEvent } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

export const Logo = () => {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    if (pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    window.scrollTo({ top: 0, behavior: "smooth" });

    setTimeout(() => {
      router.push("/");
    }, 400);
  };

  return (
    <Link href="/" onClick={handleClick} className="flex items-center group">
      <h1
        className="text-lg font-semibold tracking-tighter text-foreground select-none ml-2 transition-transform duration-300 group-hover:scale-105"
        style={{
          fontFamily: "'Fira Code', 'JetBrains Mono', 'Courier New', monospace",
        }}
      >
        <span className="text-black dark:text-white">wiki</span>
        <span className="text-muted-foreground">dotexe.</span>
      </h1>
    </Link>
  );
};
