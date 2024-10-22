"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "./ui/form";
import { useAction } from "convex/react";
import { api } from "../../convex/_generated/api";

const formSchema = z.object({
  text: z.string().min(1).max(1000),
});

export default function ChatBox() {
  const askQuestion = useAction(api.chats.askQuestion);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      text: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const text = values.text;
    askQuestion({ question: text }).then((response) => {console.log("this is response", response)});
    form.reset();
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 flex flex-1"
      >
        <FormField
          control={form.control}
          name="text"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormControl>
                <div className="w-full">
                  <textarea
                    {...field}
                    onKeyDown={(event) => {
                      if (event.key === "Enter" && !event.shiftKey) {
                        event.preventDefault();
                        form.handleSubmit(onSubmit)();
                      }
                    }}
                    className="w-full h-[150px] p-4 text-lg text-zinc-200 bg-[#141415] border border-[#313131] rounded-lg focus:outline-none focus:ring-2 focus:ring-zinc-600 focus:border-transparent resize-none"
                    placeholder="Type here..."
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}
