import { z } from "zod";

const borrowSchema = z.object({
  body: z.object({
    bookId: z.string({ required_error: "BookId Required" }),
    memberId: z.string({ required_error: "MemberId Required" }),
  }),
});
const returnSchema = z.object({
  body: z.object({
    borrowId: z.string({ required_error: "BorrowId Required" }),
  }),
});

export const borrowAndReturnSchemaValidation = { borrowSchema, returnSchema };
