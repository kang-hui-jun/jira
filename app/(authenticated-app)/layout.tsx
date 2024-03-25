import { ProjectPopover } from "@/components/shared/ProjectPopover";
import { User } from "@/components/shared/User";
import { UserPopover } from "@/components/shared/UserPopover";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

const Layout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  return (
    <main
      className="grid h-screen"
      style={{
        gridTemplateRows: "60px 1fr",
      }}
    >
      <header className="flex p-3 shadow-md justify-between items-center">
        <div className="flex gap-10">
          <Link href="/">
            <Image
              src="/assets/software-logo.svg"
              alt="logo"
              width={180}
              height={20}
            />
          </Link>

          <ProjectPopover />
          <UserPopover />
        </div>

        <div>
          <User />
        </div>
      </header>
      
      <div className="flex overflow-hidden">{children}</div>
    </main>
  );
};

export default Layout;
