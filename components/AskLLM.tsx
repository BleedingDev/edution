"use client"
import { Textarea } from "@shadcn/ui/textarea";
import { Button } from "@shadcn/ui/button";
import { Separator } from "@shadcn/ui/separator";
import { askLlm } from "app/[...page]/actions";
import { Typography } from "./Typography";
import { experimental_useFormState as useFormState } from 'react-dom'
import { experimental_useFormStatus as useFormStatus } from 'react-dom'

const initialState = {
    output: null,
}

interface AskLLMProps {
    predefinedPrompt?: string;
    predefinedOutput?: string;
}

export function AskLLM({ predefinedPrompt = '', predefinedOutput = '' }: AskLLMProps) {
    const [state, formAction] = useFormState(askLlm, initialState)
    const { pending } = useFormStatus()

    return (
        <div className="flex flex-col md:flex-row gap-4">
            <div className="flex flex-col gap-2 w-full md:w-1/2">
                <Typography variant="text">Prompt</Typography>
                <form className="contents" action={formAction}>
                    <Textarea name="prompt" required placeholder="Write your prompt here" className="border-2 border-gray-300 p-2 rounded-md w-full" defaultValue={predefinedPrompt}></Textarea>
                    <Button disabled={pending}>Generate</Button>
                </form>
            </div>
            <Separator orientation="vertical" className="h-auto hidden md:block" />
            <div className="flex flex-col gap-2 w-full md:w-1/2">
                <Typography variant="text">Output</Typography>
                <div className="bg-green-300">{state.output ?? predefinedOutput}</div>
            </div>
        </div>
    )
}
