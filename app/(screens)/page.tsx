import { List } from "@/components/shared/List";
import { SearchPanel } from "@/components/shared/SearchPanel";
import { Button } from "@/components/ui/button";

export default function Page() {
  return (
    <div className="p-3.5 flex w-full flex-col">
      <div className="mb-2 flex justify-between items-center">
        <h1>项目列表</h1>
        <Button variant="link">创建项目</Button>
      </div>
      <SearchPanel />
      <List />
    </div>
  );
}
