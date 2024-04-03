"use client"

import * as z from "zod";
import { useForm } from "react-hook-form";
import React, { useState } from "react"; // useStateをインポート
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/app/components/ui/form";
import { Input } from "@/app/components/ui/input";
import { toast } from "@/app/components/ui/use-toast";
import { Button } from "@/app/components/ui/button";
import { Textarea } from "@/app/components/ui/textarea";
import {
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectItem,
  Select,
} from "@/app/components/ui/select";
import { Card } from "./ui/card";

const emailSchema = z.object({
  emailAddress: z.string().email().optional(),
});

const discordSchema = z.object({
  discord: z.string().min(2).optional(),
});

const formSchema = z.object({
  username: z.string(),
  accountType: z.enum(["email", "discord"]).optional(),
  bio: z.string()
    .min(10, {
      message: "Bio must be at least 10 characters.",
    })
    .max(160, {
      message: "Bio must not be longer than 160 characters.",
    }),
}).merge(emailSchema).merge(discordSchema).refine(
  (data) =>
    (data.accountType === "email" && data.emailAddress) ||
    (data.accountType === "discord" && data.discord),
  {
    message: "You must provide either an email address or a Discord account.",
    path: ["emailAddress", "discord"],
  }
);

export function Inquery() {
  const [accountType, setAccountType] = useState("email"); // useStateでaccountTypeを管理
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      accountType: "email",
      bio: "",
      emailAddress: "",
      discord: "",
    },
  });


  async function sendToDiscordWebhook(data: z.infer<typeof formSchema>) {
    const webhookUrl =
      "https://ptb.discord.com/api/webhooks/1219519085650645034/0UUtZx6weGk1zrZnv1uS-s0qlr6EPC9aEEd3eCn6-AARIqbng6XUuP73AKpa-0JsYMbr";
    const message = `UserName: ${data.username}\nEmail Address: ${
      data.emailAddress ?? "Not provided"
    }\nDiscord: ${data.discord ?? "Not provided"}\nInquiry Text: ${data.bio}`;

    try {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          content: message,
        }),
      });

      if (response.ok) {
        console.log("Message sent to Discord successfully!");
      } else {
        console.error("Failed to send message to Discord.");
      }
    } catch (error) {
      console.error("Error sending message to Discord:", error);
    }
  }

  function onSubmit(value: z.infer<typeof formSchema>) {
    console.log(value);
    sendToDiscordWebhook(value);
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(value, null, 2)}</code>
        </pre>
      ),
    });
  }
  function handleButtonClick() {
    if (accountType === "discord") {
      // accountType が "discord" の場合、email のフィールドに "example@gmail.com" を設定
      form.setValue("emailAddress", "example@gmail.com");
    }
    if (accountType === "email") {
      // accountType が "discord" の場合、email のフィールドに "example@gmail.com" を設定
      form.setValue("discord", "SelectedEmail");
    }
  }
  
  function handleAccountTypeChange(newValue) {
    if (accountType === "discord" && newValue === "email") {
      // accountType が "discord" から "email" に変更された場合、email フィールドのデータを削除
      form.setValue("emailAddress", "");
    }
    if (accountType === "email" && newValue === "discord") {
      // accountType が "discord" から "email" に変更された場合、email フィールドのデータを削除
      form.setValue("discord", "");
    }
    setAccountType(newValue); // accountTypeの状態を更新
  }

  return (
    <main className="container mx-auto flex justify-center items-center min-h-screen p-24">
      <Card className="max-w-screen-md w-full md:w-1/2 p-10">
        <h1 className="text-2xl font-bold mb-8 text-center">
          お問い合わせフォーム
        </h1>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full flex flex-col gap-10"
          >
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>UserName</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Type your nickname or username"
                        type="username"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
            <FormField
              control={form.control}
              name="accountType"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>Account type</FormLabel>
                    <Select onValueChange={(newValue) => {
                      handleAccountTypeChange(newValue);
                      field.onChange(newValue);
                    }}>
                      <FormControl>
                        <SelectTrigger className="text-black transition-all dark:text-white">
                          <SelectValue placeholder="Select Email or DiscordAccount" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="email">Email</SelectItem>
                        <SelectItem value="discord">Discord</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
            {accountType === "email" && (
              <FormField
                control={form.control}
                name="emailAddress"
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        <Input placeholder="Email Address" {...field}
                         />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />
            )}
            {accountType === "discord" && (
              <FormField
                control={form.control}
                name="discord"
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormLabel>Discord Account</FormLabel>
                      <FormControl>
                        <Input placeholder="Discord Account" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />
            )}
            <FormField
              control={form.control}
              name="bio"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>Inquiry Text</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Type your inquiry message here"
                        className="resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
            <Button type="submit" className="w-full" onClick={handleButtonClick}>
              Submit
            </Button>
          </form>
        </Form>
      </Card>
    </main>
  );
}

export default Inquery;
