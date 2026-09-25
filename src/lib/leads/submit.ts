import { createServerFn } from "@tanstack/react-start";
import { leadSchema } from "./schema";

export const submitLead = createServerFn({ method: "POST" })
  .validator((input: unknown) => leadSchema.parse(input))
  .handler(async ({ data }) => {
    const { handleLead } = await import("./handle.server");
    return handleLead(data);
  });
