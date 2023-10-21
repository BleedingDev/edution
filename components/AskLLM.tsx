"use client"

import { Button } from "@shadcn/ui/button"
import { Separator } from "@shadcn/ui/separator"
import { Textarea } from "@shadcn/ui/textarea"
import { useChat } from "ai/react"

import { Typography } from "./Typography"

interface AskLLMProps {
  predefinedPrompt?: string
  predefinedOutput?: string
  apiKey?: string
}

function getApiKey() {
  const localApiKey = localStorage.getItem("apiKey")
  if (localApiKey) {
    return localApiKey
  }

  const newApiKey = prompt("Please enter apiKey for service")
  localStorage.setItem("apiKey", `${newApiKey}`)
  return newApiKey
}

export function AskLLM({ predefinedPrompt = "", predefinedOutput = "", apiKey: courseApiKey }: AskLLMProps) {
  const { messages, isLoading, reload } = useChat({
    api: "/api/chat",
    initialInput: predefinedPrompt,
    initialMessages: [{ id: "0", role: "assistant", content: predefinedOutput }],
  })

  const handleForm: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const input = formData.get("prompt")
    const apiKey = courseApiKey ?? getApiKey()
    const inputMessages: Omit<(typeof messages)[0], "id">[] = [{ role: "user", content: input as string }]
    reload({
      options: { body: { apiKey, messages: inputMessages } },
    })
  }

  return (
    <div className='flex flex-col gap-4 md:flex-row'>
      <div className='flex w-full flex-col gap-2 md:w-1/2'>
        <Typography variant='text'>Prompt</Typography>
        <form className='contents' onSubmit={handleForm}>
          <Textarea
            name='prompt'
            required
            placeholder='Write your prompt here'
            className='h-28 w-full rounded-md border-2 border-gray-300 p-2'
            defaultValue={predefinedPrompt}
          ></Textarea>
          <Button type='submit' disabled={isLoading}>
            Generate
          </Button>
        </form>
      </div>
      <Separator orientation='vertical' className='hidden h-auto md:block' />
      <div className='flex w-full flex-col gap-2 md:w-1/2'>
        <Typography variant='text'>Output</Typography>
        <div className='max-h-40 overflow-auto p-1'>
          {messages.filter((m) => m.role === "assistant").at(-1)?.content}
        </div>
      </div>
    </div>
  )
}
