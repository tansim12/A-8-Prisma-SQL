"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookValidationSchema = void 0;
const zod_1 = require("zod");
const createBookSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string().min(1, "Title is required"),
        genre: zod_1.z.string().min(1, "Genre is required"),
        publishedYear: zod_1.z
            .number()
            .int()
            .min(1000, "Published year must be a valid year")
            .max(new Date().getFullYear(), "Published year cannot be in the future"),
        totalCopies: zod_1.z.number().int().min(1, "Total copies must be at least 1"),
        availableCopies: zod_1.z
            .number()
            .int()
            .min(0, "Available copies cannot be negative"),
    }),
});
const updateBookSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string().min(1, "Title is required").optional(),
        genre: zod_1.z.string().min(1, "Genre is required").optional(),
        publishedYear: zod_1.z
            .number()
            .int()
            .min(1000, "Published year must be a valid year")
            .max(new Date().getFullYear(), "Published year cannot be in the future").optional(),
        totalCopies: zod_1.z.number().int().min(1, "Total copies must be at least 1").optional(),
        availableCopies: zod_1.z
            .number()
            .int()
            .min(0, "Available copies cannot be negative").optional(),
    }),
});
exports.bookValidationSchema = {
    createBookSchema,
    updateBookSchema
};
