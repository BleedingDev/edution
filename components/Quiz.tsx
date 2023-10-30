"use client"

import { Button } from "@shadcn/ui/button"
import { Separator } from "@shadcn/ui/separator"
import { FormEventHandler, useState } from "react"
import { Typography } from "./Typography"
import { Textarea } from "@shadcn/ui/textarea"

/**
 * Don't see a need for the { isCorrect } prop now as we don't have the answer as an array
 */
interface Props {
  question: string
  answer: string
}

function validateAnswer(answer: string) {
  return answer.replaceAll("", "").toLowerCase()
}

export function Quiz({ question, answer }: Props) {
  const [isCorrect, setIsCorrect] = useState(false)

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault()

    const userResponse = validateAnswer(event.currentTarget.quiz.value)
    const correctAnswer = validateAnswer("Coursition")

    if (userResponse !== correctAnswer) return
    setIsCorrect(true)
  }

  return (
    <div className="flex justify-between gap-4">
      <div className="flex flex-col gap-3 w-1/2">
        <Typography variant="h3">{question}</Typography>
        <form className="contents" onSubmit={handleSubmit}>
          <Textarea
            name="quiz"
            required
            placeholder="Enter your answer here"
            className="h-28 w-full rounded-md border-2 border-gray-300 p-2"
            defaultValue={answer ?? ""}
          />
          <Button>Submit</Button>
        </form>
      </div>

      <div className="flex gap-3 w-1/2">
        <Separator orientation="vertical" />
        <div className="flex flex-col w-full  border">
          <Typography variant="h3">Status</Typography>
          <div>{isCorrect ? "Correct!" : "Incorrect!"}</div>
        </div>
      </div>
    </div>
  )
}
