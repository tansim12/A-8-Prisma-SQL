import { z } from "zod";

const createBookSchema = z.object({
  body: z.object({
    title: z.string().min(1, "Title is required"),
    genre: z.string().min(1, "Genre is required"),
    publishedYear: z
      .number()
      .int()
      .min(1000, "Published year must be a valid year")
      .max(new Date().getFullYear(), "Published year cannot be in the future"),
    totalCopies: z.number().int().min(1, "Total copies must be at least 1"),
    availableCopies: z
      .number()
      .int()
      .min(0, "Available copies cannot be negative"),
  }),
});
const updateBookSchema = z.object({
  body: z.object({
    title: z.string().min(1, "Title is required").optional(),
    genre: z.string().min(1, "Genre is required").optional(),
    publishedYear: z
      .number()
      .int()
      .min(1000, "Published year must be a valid year")
      .max(new Date().getFullYear(), "Published year cannot be in the future").optional(),
    totalCopies: z.number().int().min(1, "Total copies must be at least 1").optional(),
    availableCopies: z
      .number()
      .int()
      .min(0, "Available copies cannot be negative").optional(),
  }),
});

export const bookValidationSchema = {
  createBookSchema,
  updateBookSchema
};
