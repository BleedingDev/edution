import { AskLLM } from "components/AskLLM";
import { ClientProxy } from "components/ClientProxy";
import { Code } from "components/Code";
import { CopyText } from "components/CopyText";

const code = `import { AskLLM } from "components/AskLLM";
import { Code } from "components/Code";
import { CopyText } from "components/CopyText";

export default async function Page() {
  return (
    <>
      <AskLLM
        predefinedPrompt="Generate a comma-separated list of 10 ice cream flavours:"
        predefinedOutput="Chocolate, Vanilla, Strawberry, Mint Chip, Rocky Road, Cookie Dough, Butter Pecan, Neapolitan, Coffee, Coconut"
      />
      <CopyText content="Testing content to copy" />
    </>
  );
}`;

export default async function Page() {
  return (
    <>
      <ClientProxy>
        <Code showLines code={code} lang="typescript" />
      </ClientProxy>
      <AskLLM
        predefinedPrompt="Generate a comma-separated list of 10 ice cream flavours:"
        predefinedOutput="Chocolate, Vanilla, Strawberry, Mint Chip, Rocky Road, Cookie Dough, Butter Pecan, Neapolitan, Coffee, Coconut"
      />
      <CopyText content="Testing content to copy" />
    </>
  );
}
