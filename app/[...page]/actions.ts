"use server"

export async function askLlm(prevState: unknown, formData: FormData) {
  try {
    const data = formData.get("prompt")
    return { output: "Test" }
  } catch (e) {
    return { output: "AI Generation has failed, please try again later." }
  }
}
