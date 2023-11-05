"use client"

import { Button } from "@shadcn/ui/button"
import { Checkbox } from "@shadcn/ui/checkbox"
import { Label } from "@shadcn/ui/label"
import { RadioGroup, RadioGroupItem } from "@shadcn/ui/radio-group"

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
  const isMultipleCorrect = answers.filter((answer) => answer.isCorrect).length > 1

  async function onSubmit(formdata: FormData) {
    const selectedAnswers = Array.from(formdata.getAll("answer"))

    /**
     * Return if no value is selected
     */
    if (selectedAnswers.length < 1) return

    const correctAnswers = answers.filter((answer) => answer.isCorrect).map((answer) => answer.text)

    /**
     * If answers are more than 1.
     */
    if (isMultipleCorrect) {
      const corretAnswerCount = correctAnswers.length
      const selectedAnswerCount = selectedAnswers.length

      if (
        corretAnswerCount === selectedAnswerCount &&
        correctAnswers.every((answer) => selectedAnswers.includes(answer))
      ) {
        alert("Correct!")
      } else {
        alert("Incorrect!")
      }
      return
    } else {
      if (correctAnswers.includes(selectedAnswers[0] as string)) {
        alert("Correct!")
      } else {
        alert("Incorrect!")
      }
    }
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

          <Button type='submit'>Submit</Button>
        </form>
      </div>
    </div>
  )
}
