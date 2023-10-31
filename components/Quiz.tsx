"use client"

import { FormEventHandler } from "react"
import { Button } from "@shadcn/ui/button"

import { Typography } from "./Typography"

type Answer = {
  text: string
  isCorrect: boolean
}

interface Props {
  question: string
  answers: Answer[]
}

export function Quiz({ question, answers }: Props) {
  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault()
  }

  const isMultipleCorrect = answers.filter((answer) => answer.isCorrect).length > 1

  const SelectAlert = () => (
    <>
      {isMultipleCorrect ? (
        <div className='absolute top-16'>
          <Typography variant='text'>Select all that apply.</Typography>
        </div>
      ) : null}
    </>
  )

  return (
    <div className='relative justify-between gap-4 selection:flex '>
      <div className='flex w-1/2 flex-col gap-3'>
        <Typography variant='h3'>{question}</Typography>
        <SelectAlert />
        <form className='mt-8 flex flex-col space-y-3' onSubmit={handleSubmit}>
          {answers.map(({ text }) => {
            const idFromText = text?.replaceAll(" ", "")
            return (
              <div className='flex items-center space-x-2' key={idFromText}>
                {/* Ensures one deselects the other by assigning one `name` to all html radios. */}
                <input type={isMultipleCorrect ? "checkbox" : "radio"} id={idFromText} value={text} name='answer' />
                <label htmlFor={idFromText}>{text}</label>
              </div>
            )
          })}
          <Button>Submit</Button>
        </form>
      </div>
    </div>
  )
}
