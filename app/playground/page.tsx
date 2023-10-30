import { AskLLM } from "components/AskLLM"
import { CopyText } from "components/CopyText"
import { Quiz } from "components/Quiz"

export default async function Page() {
  return (
    <>
      <AskLLM
        predefinedPrompt="Generate a comma-separated list of 10 ice cream flavours:"
        predefinedOutput="Chocolate, Vanilla, Strawberry, Mint Chip, Rocky Road, Cookie Dough, Butter Pecan, Neapolitan, Coffee, Coconut"
      />
      <CopyText content="Testing content to copy" />

      <Quiz
        answer="Udemy"
        question="What is the best platform for building courses?"
      />
    </>
  );
}
