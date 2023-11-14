"use client"

import { useEffect, useState } from "react"
import { FieldLabel } from "@measured/puck"
import { Separator } from "@shadcn/ui/separator"
import { supportedLangs } from "puck.config"
import { bundledLanguages, getHighlighter } from "shikiji"

const theme = "dark-plus"

const highlighter = getHighlighter({
  themes: [theme],
  langs: Object.keys(bundledLanguages),
})

type InputValues = { raw: string; lang: string; processed: string }

export function CodeInput({ onChange, value }: { value: InputValues; onChange: (values: InputValues) => void }) {
  const [code, setCode] = useState(value)

  useEffect(() => {
    async function highlightCode() {
      const shiki = await highlighter

      const html = shiki.codeToHtml(code.raw, {
        lang: code.lang,
        theme,
      })
      onChange({ raw: code.raw, processed: html, lang: code.lang })
    }

    highlightCode()
  }, [code.raw, code.lang])

  return (
    <div className='flex flex-col gap-4'>
      <FieldLabel label='Code'>
        <textarea
          className='h-36 w-full p-1'
          placeholder='Enter code...'
          name='code'
          defaultValue={value.raw}
          onChange={(e) =>
            setCode({
              raw: e.currentTarget.value,
              processed: code.processed,
              lang: code.lang,
            })
          }
        />
      </FieldLabel>
      <Separator className='w-full' />
      <FieldLabel label='Language'>
        <input
          id='language'
          list='languages'
          className='w-full p-1'
          placeholder='Choose language...'
          name='language'
          defaultValue={value.lang}
          onChange={(e) =>
            setCode({
              raw: code.raw,
              processed: code.processed,
              lang: e.currentTarget.value,
            })
          }
        />
        <datalist id='languages'>
          {supportedLangs.map((l) => (
            <option key={l} value={l} />
          ))}
        </datalist>
      </FieldLabel>
    </div>
  )
}
