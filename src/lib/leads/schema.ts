import { z } from "zod";

export const leadSchema = z.object({
  name: z.string().trim().min(2, "Enter your full name").max(80),
  email: z.string().trim().email("Enter a valid email").max(120),
  phone: z.string().trim().min(7, "Enter a phone number").max(30),
  address: z.string().trim().min(5, "Enter the property address").max(200),
  service: z.enum([
    "repair",
    "replacement",
    "storm",
    "hail",
    "leak",
    "inspection",
    "other",
  ]),
  message: z.string().trim().max(2000).optional().or(z.literal("")),
});

export type LeadInput = z.infer<typeof leadSchema>;

export const serviceLabels: Record<LeadInput["service"], string> = {
  repair: "Roof Repair",
  replacement: "Roof Replacement",
  storm: "Storm Damage",
  hail: "Hail Damage",
  leak: "Leak",
  inspection: "Inspection",
  other: "Other",
};
