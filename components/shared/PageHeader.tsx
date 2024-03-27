import Link from "next/link";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";

export const PageHeader = () => {
  return (
    <header className="flex justify-between items-center p-3.5 shadow-[0_0_5px_0_rgba(0,0,0,0.3)] h-16">
      <Link href="/">
        <Image
          src="/assets/software-logo.svg"
          width={180}
          height={1}
          color="rgb(38, 132, 255)"
          alt="logo"
        />
      </Link>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost">Open</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-28">
          <DropdownMenuItem>
            <LogOut className="mr-2 h-4 w-4" />
            <span>Log out</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
};
