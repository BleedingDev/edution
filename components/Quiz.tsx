"use client"

import { Button } from "@shadcn/ui/button"
import { Checkbox } from "@shadcn/ui/checkbox"
import { Label } from "@shadcn/ui/label"
import { RadioGroup, RadioGroupItem } from "@shadcn/ui/radio-group"
import { Separator } from "@shadcn/ui/separator"

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
  const correctAnswers = answers.filter((answer) => answer.isCorrect).map((answer) => answer.text)
  const isMultipleCorrect = answers.filter((answer) => answer.isCorrect).length > 1

  async function onSubmit(formdata: FormData) {
    const selectedAnswers = Array.from(formdata.getAll("answer"))

    const correctCount = correctAnswers.length
    const selectedCount = selectedAnswers.length

    if (correctCount === selectedCount && correctAnswers.every((answer) => selectedAnswers.includes(answer))) {
      alert("Correct!")
    }
    alert("Incorrect!")
  }


  return (
    <div className='relative flex justify-between gap-4 '>
      <div className='flex w-1/2 flex-col gap-3'>
        <Typography variant='h3'>{question}</Typography>

        {isMultipleCorrect && (
          <div className='absolute top-16'>
            <Typography variant='text'>Select all that apply.</Typography>
          </div>
        )}

        <form className='mt-8 flex flex-col space-y-3' action={onSubmit}>
          {isMultipleCorrect ? (
            <div className='grid grid-cols-1 gap-2'>
              {answers.map(({ text }) => (
                <div className='flex items-center gap-2' key={text?.replaceAll(" ", "")}>
                  <Checkbox name={"answer"} value={text} id={text.replaceAll(" ", "")} />
                  <Label htmlFor={text?.replaceAll(" ", "")}>{text}</Label>
                </div>
              ))}
            </div>
          ) : (
            <RadioGroup name='answer'>
              {answers.map(({ text }) => (
                <div className='flex items-center gap-2' key={text?.replaceAll(" ", "")}>
                  <RadioGroupItem value={text} id={text?.replaceAll(" ", "")} required />
                  <Label htmlFor={text?.replaceAll(" ", "")}>{text}</Label>
                </div>
              ))}
            </RadioGroup>
          )}

          <Button>Submit</Button>
        </form>
      </div>

      <div className='flex w-1/2'>
        <Separator orientation='vertical' />
        <Typography variant='h2'>Status</Typography>
        <div>{"results"}</div>
      </div>
    </div>
  )
}
