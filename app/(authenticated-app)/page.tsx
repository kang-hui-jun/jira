"use client";

import { SearchPanel } from "@/components/shared/SearchPanel";
import { Button } from "@/components/ui/button";
import { AuthContext, useAuth } from "@/store";
import { redirect } from "next/navigation";
import React, { useContext } from "react";

const Page = () => {
  const { user } = useAuth();

  if (!user) redirect("/sign-in");

  return <div className="p-3 w-screen flex flex-col">
    <div className="row flex justify-between mb-2">
      <h1>项目列表</h1>
      <Button variant="ghost">创建项目</Button>
    </div>
    <SearchPanel/>
  </div>;
};

export default Page;
