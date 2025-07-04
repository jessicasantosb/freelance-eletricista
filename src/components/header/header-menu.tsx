"use client";

import { Home, InfoIcon, User, Workflow } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function HeaderMenu() {
  const [open, setOpen] = useState(false);

  const handleCloseMenu = () => setOpen(false);

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Menu</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuItem onClick={handleCloseMenu}>
          <Home />
          <Link href={"/"}>Página inicial</Link>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={handleCloseMenu}>
          <Workflow />
          <Link href={"/services"}>Serviços</Link>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={handleCloseMenu}>
          <InfoIcon />
          <Link href={"/informations"}>Informações</Link>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={handleCloseMenu}>
          <User />
          <Link href={"/about"}>Sobre mim</Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
