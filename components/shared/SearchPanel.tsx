import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Input } from "../ui/input";
import { debounce } from "@/lib/utils";

const formSchema = z.object({
  name: z.string(),
  personId: z.string(),
});

export const SearchPanel = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      personId: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  const onInputChangeHandler = (
    value: string,
    onChangeField: (value: string) => void
  ) => {
    console.log(value);

    return onChangeField(value);
  };

  const onSelectFieldHandler = (
    value: string,
    onChangeField: (value: string) => void
  ) => {
    console.log(value);

    return onChangeField(value);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex gap-2">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="项目名"
                  {...field}
                  onChange={(e) =>
                    onInputChangeHandler(e.target.value, field.onChange)
                  }
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="personId"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Select
                  onValueChange={(value) =>
                    onSelectFieldHandler(value, field.onChange)
                  }
                  value={field.value}
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="负责人" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value={"1"}>张三</SelectItem>
                      <SelectItem value={"2"}>李四</SelectItem>
                      <SelectItem value={"3"}>王五</SelectItem>
                      <SelectItem value={"4"}>马六</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </FormControl>
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
};
