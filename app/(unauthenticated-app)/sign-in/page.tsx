"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Login } from "./Login";
import { Register } from "./Register";

const Page = () => {
  return (
    <div className="flex flex-col items-center h-screen">
      <header className="header"></header>
      <div className="background"></div>
      <Tabs defaultValue="login" className=" w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="login">登陆</TabsTrigger>
          <TabsTrigger value="register">注册</TabsTrigger>
        </TabsList>
        <TabsContent value="login">
          <Login />
        </TabsContent>
        <TabsContent value="register">
          <Register />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Page;
