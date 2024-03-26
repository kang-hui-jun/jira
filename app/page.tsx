import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";

export default function Page() {
  return (
    <main className="flex h-screen w-full">
      <Image
        src="/assets/left.svg"
        alt="left"
        height={1}
        width={500}
        className=" self-end"
      />
      <div className="flex-1 flex justify-center">
        <div>
          <Image
            src="/assets/logo.svg"
            alt="logo"
            width={80}
            height={80}
            className="py-5 m-auto"
          />
          {/* <div className="shadow-[0_0_10px_rgba(0,0,0,0.1)] rounded-md w-[400px] min-h-[560px] py-3 px-4 text-center">
            <div className="mb-2.5 col-[rgb(94, 108, 132)]">请登陆</div>
          </div> */}
          <Tabs defaultValue="login" className="w-[400px]">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="login">登陆</TabsTrigger>
              <TabsTrigger value="register">注册</TabsTrigger>
            </TabsList>
            <TabsContent value="login">
              <Card>
                <CardHeader></CardHeader>
                <CardContent className="space-y-2">
                  <div className="space-y-1">
                    <Label htmlFor="name">账号</Label>
                    <Input id="name" />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="username">密码</Label>
                    <Input id="username" />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">登陆</Button>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="register">
              <Card>
                <CardHeader></CardHeader>
                <CardContent className="space-y-2">
                  <div className="space-y-1">
                    <Label htmlFor="current">帐号</Label>
                    <Input id="current" type="password" />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="new">密码</Label>
                    <Input id="new" type="password" />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="new">确认密码</Label>
                    <Input id="new" type="password" />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">注册</Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      <Image
        src="/assets/right.svg"
        alt="right"
        height={1}
        width={500}
        className="self-end"
      />
    </main>
  );
}
