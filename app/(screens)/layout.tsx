import { PageHeader } from "@/components/shared/PageHeader";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col h-screen">
      <PageHeader />

      <main className="flex overflow-hidden flex-1">{children}</main>
    </div>
  );
}
