"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.borrowAndReturnSchemaValidation = void 0;
const zod_1 = require("zod");
const borrowSchema = zod_1.z.object({
    body: zod_1.z.object({
        bookId: zod_1.z.string({ required_error: "BookId Required" }),
        memberId: zod_1.z.string({ required_error: "MemberId Required" }),
    }),
});
const returnSchema = zod_1.z.object({
    body: zod_1.z.object({
        borrowId: zod_1.z.string({ required_error: "BorrowId Required" }),
    }),
});
exports.borrowAndReturnSchemaValidation = { borrowSchema, returnSchema };
