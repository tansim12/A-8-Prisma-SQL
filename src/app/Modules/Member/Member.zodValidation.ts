import { z } from "zod";

const createMemberSchema = z.object({
  body: z.object({
    name: z.string().min(1, "Name is required"),
    email: z
      .string()
      .email("Invalid email address")
      .min(1, "Email is required")
      .max(255),
    phone: z
      .string()
      .min(10, "Phone number must be at least 10 digits")
      .max(15, "Phone number cannot exceed 15 digits"),
    membershipDate: z.string({required_error:"Date Required"}),
  }),
});
const updateMemberSchema = z.object({
  body: z.object({
    name: z.string().min(1, "Name is required").optional(),
    email: z
      .string()
      .email("Invalid email address")
      .min(1, "Email is required")
      .max(255)
      .optional(),
    phone: z
      .string()
      .min(10, "Phone number must be at least 10 digits")
      .max(15, "Phone number cannot exceed 15 digits")
      .optional(),
    membershipDate: z.string().optional(),
  }),
});

export const memberValidationSchema = {
  createMemberSchema,
  updateMemberSchema,
};
