import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@shadcn/ui/accordion"

export default async function Page() {
  return (
    <>
      <section className='mx-auto mb-0 flex w-full max-w-[1312px] flex-col self-center p-5 max-md:mb-2.5 max-md:max-w-full'>
        <div className='flex w-[768px] max-w-full flex-col items-start'>
          <h1 className='text-5xl font-bold leading-[120%] text-black max-md:max-w-full max-md:text-4xl'>FAQs</h1>
          <p className='mt-6 text-lg leading-[150%] text-black max-md:max-w-full'>
            Find answers to commonly asked questions about Coursition and its features.
          </p>
        </div>
        <div className='flex w-full flex-col items-start self-center max-md:mt-10 max-md:max-w-full'>
          <Accordion type='single' className='w-full'>
            <AccordionItem value='faq-1'>
              <AccordionTrigger className='mt-5 flex items-start justify-between gap-3 self-stretch max-md:max-w-full max-md:flex-wrap'>
                <h2 className='my-auto max-w-[1363px] shrink-0 grow basis-auto text-left text-lg font-bold leading-[150%] text-black max-md:max-w-full'>
                  How does Coursition work?
                </h2>
              </AccordionTrigger>
              <AccordionContent>
                <p>Answer to the question goes here.</p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='faq-2'>
              <AccordionTrigger className='mt-5 flex items-start justify-between gap-3 self-stretch max-md:max-w-full max-md:flex-wrap'>
                <h2 className='my-auto max-w-[1363px] shrink-0 grow basis-auto text-left text-lg font-bold leading-[150%] text-black max-md:max-w-full'>
                  What are the key features of Coursition?
                </h2>
              </AccordionTrigger>
              <AccordionContent>
                <p>Answer to the question goes here.</p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='faq-3'>
              <AccordionTrigger className='mt-5 flex items-start justify-between gap-3 self-stretch max-md:max-w-full max-md:flex-wrap'>
                <h2 className='my-auto max-w-[1363px] shrink-0 grow basis-auto text-left text-lg font-bold leading-[150%] text-black max-md:max-w-full'>
                  How can Coursition benefit enterprises?
                </h2>
              </AccordionTrigger>
              <AccordionContent>
                <p>Answer to the question goes here.</p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='faq-4'>
              <AccordionTrigger className='mt-5 flex items-start justify-between gap-3 self-stretch max-md:max-w-full max-md:flex-wrap'>
                <h2 className='my-auto max-w-[1363px] shrink-0 grow basis-auto text-left text-lg font-bold leading-[150%] text-black max-md:max-w-full'>
                  How can I integrate Coursition with other systems?
                </h2>
              </AccordionTrigger>
              <AccordionContent>
                <p>Answer to the question goes here.</p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='faq-5'>
              <AccordionTrigger className='mt-5 flex items-start justify-between gap-3 self-stretch max-md:max-w-full max-md:flex-wrap'>
                <h2 className='my-auto max-w-[1363px] shrink-0 grow basis-auto text-left text-lg font-bold leading-[150%] text-black max-md:max-w-full'>
                  How can I provide feedback on Coursition?
                </h2>
              </AccordionTrigger>
              <AccordionContent>
                <p>Answer to the question goes here.</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div className='mt-10 flex w-full max-w-full grow flex-col items-start max-md:mt-10'>
          <div className='flex w-full flex-col items-center max-md:max-w-full'>
            <h2 className='text-3xl font-bold leading-[130%] text-black max-md:max-w-full'>Still have questions?</h2>
            <p className='mt-4 text-lg leading-[150%] text-black max-md:max-w-full'>
              Contact us for further assistance.
            </p>
          </div>
          <button className='mx-auto mt-6 flex w-28 grow flex-col items-center justify-center border border-solid border-black px-5 py-3'>
            <span className='self-center text-base leading-[150%] text-black'>Button</span>
          </button>
        </div>
      </section>
    </>
  )
}
