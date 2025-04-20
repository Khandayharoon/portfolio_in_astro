// import { sendEmail } from "@/lib/send-mail";
// import { defineAction } from "astro:actions";
// import { z } from "astro:schema";

// export const server = {
//   contact: defineAction({
//     accept: "form",
//     input: z.object({
//       name: z.string(),
//       email: z.string().email(),
//       msg: z.string(),
//     }),
//     handler: async (input, context) => {
//       await sendEmail(input);

//       return `Hello, ${input.name}!`;
//     },
//   }),
// };
