"use client";

import { useDebouncedCallback } from "use-debounce";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

export const SearchPanel = () => {
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", "1");
    term ? params.set("query", term) : params.delete("query");
    replace(`${pathName}?${params.toString()}`);
  }, 300);

  return (
    <div className="relative flex-shrink-0 flex gap-2">
      <Label htmlFor="search" className="sr-only">
        Search
      </Label>
      <Input
        className="w-[180px]"
        placeholder={"项目名"}
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        defaultValue={searchParams.get("query")?.toString()}
      />

      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="负责人" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="1">zhangsan</SelectItem>
            <SelectItem value="2">lisi</SelectItem>
            <SelectItem value="3">wangwu</SelectItem>
            <SelectItem value="4">maliu</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};
