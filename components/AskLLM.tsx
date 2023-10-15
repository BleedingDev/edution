"use client";
import { Textarea } from "@shadcn/ui/textarea";
import { Button } from "@shadcn/ui/button";
import { Separator } from "@shadcn/ui/separator";
import { Typography } from "./Typography";
import { useChat } from "ai/react";

interface AskLLMProps {
  predefinedPrompt?: string;
  predefinedOutput?: string;
  apiKey?: string;
}

function getApiKey() {
  const localApiKey = localStorage.getItem("apiKey");
  if (localApiKey) {
    return localApiKey;
  }

  const newApiKey = prompt("Please enter apiKey for service");
  localStorage.setItem("apiKey", newApiKey);
  return newApiKey;
}

export function AskLLM({
  predefinedPrompt = "",
  predefinedOutput = "",
}: AskLLMProps) {
  const { messages, isLoading, reload } = useChat({
    api: "/api/chat",
    initialInput: predefinedPrompt,
    initialMessages: [
      { id: "0", role: "assistant", content: predefinedOutput },
    ],
  });

  const handleForm: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const input = formData.get("prompt");
    const apiKey = getApiKey();
    const inputMessages: Omit<(typeof messages)[0], "id">[] = [
      { role: "user", content: input as string },
    ];
    reload({
      options: { body: { apiKey, messages: inputMessages } },
    });
  };

  return (
    <div className="flex flex-col md:flex-row gap-4">
      <div className="flex flex-col gap-2 w-full md:w-1/2">
        <Typography variant="text">Prompt</Typography>
        <form className="contents" onSubmit={handleForm}>
          <Textarea
            name="prompt"
            required
            placeholder="Write your prompt here"
            className="border-2 border-gray-300 p-2 rounded-md w-full h-28"
            defaultValue={predefinedPrompt}
          ></Textarea>
          <Button type="submit" disabled={isLoading}>
            Generate
          </Button>
        </form>
      </div>
      <Separator orientation="vertical" className="h-auto hidden md:block" />
      <div className="flex flex-col gap-2 w-full md:w-1/2">
        <Typography variant="text">Output</Typography>
        <div className="max-h-40 overflow-auto p-1">
          {messages.filter((m) => m.role === "assistant").at(-1)?.content}
        </div>
      </div>
    </div>
  );
}
