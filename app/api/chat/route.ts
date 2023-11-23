import { OpenAIStream, StreamingTextResponse } from "ai"
import OpenAI from "openai"
import { ChatCompletionMessageParam } from "openai/resources"

// Optional, but recommended: run on the edge runtime.
// See https://vercel.com/docs/concepts/functions/edge-functions
export const runtime = "edge"

export async function POST(req: Request) {
  // Extract the `messages` from the body of the request
  // TODO: Validate JSON
  const {
    messages,
    model = "gpt-3.5-turbo",
    apiKey = process.env.OPENAI_API_KEY,
  } = (await req.json()) as { messages: ChatCompletionMessageParam[]; model: string; apiKey?: string }

  const openai = new OpenAI({
    apiKey,
  })

  // Request the OpenAI API for the response based on the prompt
  const response = await openai.chat.completions.create({
    model,
    stream: true,
    messages,
  })

  // Convert the response into a friendly text-stream
  const stream = OpenAIStream(response)

  // Respond with the stream
  return new StreamingTextResponse(stream)
}
