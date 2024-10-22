import { v } from "convex/values";
import OpenAI from "openai";
import { action } from "./_generated/server";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const askQuestion = action({
  args: { question: v.string() },
  handler: async (ctx, args) => {
    const textCompletion = await openai.chat.completions.create({
      messages: [
        {
          role: "system",
          content: `You are a frontend code generator, i will give you a question and just output the .tsx file using tailwind and shadcn, attention, don't write anything else than code. i need to copy paste it like it is: ${args.question}`,
        },
      ],
      model: "gpt-3.5-turbo",
    });

    const response =
      textCompletion.choices[0].message.content ?? "I don't know";
    console.log("this is response", response);

    return response;
  },
});
