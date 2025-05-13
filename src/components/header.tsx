"use client";

import { InfoIcon, User, Workflow } from "lucide-react";
import Link from "next/link";

import { usePathname } from "next/navigation";
import { HeaderMenu } from "./header-menu";
import { ModeToggle } from "./mode-toggle";
import { Logo } from "./shared/logo";

export function Header() {
  const pathname = usePathname();

  return (
    <header className="w-full p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
      <Link href={"/"} className="select-none">
        <Logo />
      </Link>
      <div className="flex items-center gap-6">
        <div className="hidden md:flex items-center gap-6">
          <Link
            href={"/services"}
            className={`flex items-center gap-1 underline-offset-2 hover:underline hover:opacity-90 ${
              pathname === "/services" && "underline"
            }`}
          >
            <Workflow />
            Serviços
          </Link>
          <Link
            href={"/informations"}
            className={`flex items-center gap-1 underline-offset-2 hover:underline hover:opacity-90 ${
              pathname === "/informations" && "underline"
            }`}
          >
            <InfoIcon />
            Informações
          </Link>
          <Link
            href={"/about"}
            className={`flex items-center gap-1 underline-offset-2 hover:underline hover:opacity-90 ${
              pathname === "/about" && "underline"
            }`}
          >
            <User />
            Sobre mim
          </Link>
        </div>

        <div className="md:hidden">
          <HeaderMenu />
        </div>
        <ModeToggle />
      </div>
    </header>
  );
}
