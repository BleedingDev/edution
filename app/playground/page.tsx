import { AskLLM } from "components/AskLLM";

export default async function Page() {
  return (
    <>
      <AskLLM
        predefinedPrompt="Generate a comma-separated list of 10 ice cream flavours:"
        predefinedOutput="Chocolate, Vanilla, Strawberry, Mint Chip, Rocky Road, Cookie Dough, Butter Pecan, Neapolitan, Coffee, Coconut"
      />
    </>
  );
}
