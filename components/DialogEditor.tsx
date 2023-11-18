import { Dialog, DialogContent, DialogDescription, DialogTrigger } from "@shadcn/ui/dialog"

export function DialogEditor({ description, children }) {
  return (
    <div>
      <Dialog>
        <DialogTrigger className='w-full border py-2'>Open Editor</DialogTrigger>
        <DialogContent className='flex h-screen w-screen max-w-none flex-col items-center'>
          <DialogDescription>{description}</DialogDescription>
          {children}
        </DialogContent>
      </Dialog>
    </div>
  )
}
