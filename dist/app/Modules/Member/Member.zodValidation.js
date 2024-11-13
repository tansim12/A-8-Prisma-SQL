"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.memberValidationSchema = void 0;
const zod_1 = require("zod");
const createMemberSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().min(1, "Name is required"),
        email: zod_1.z
            .string()
            .email("Invalid email address")
            .min(1, "Email is required")
            .max(255),
        phone: zod_1.z
            .string()
            .min(10, "Phone number must be at least 10 digits")
            .max(15, "Phone number cannot exceed 15 digits"),
        membershipDate: zod_1.z.string({ required_error: "Date Required" }),
    }),
});
const updateMemberSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().min(1, "Name is required").optional(),
        email: zod_1.z
            .string()
            .email("Invalid email address")
            .min(1, "Email is required")
            .max(255)
            .optional(),
        phone: zod_1.z
            .string()
            .min(10, "Phone number must be at least 10 digits")
            .max(15, "Phone number cannot exceed 15 digits")
            .optional(),
        membershipDate: zod_1.z.string().optional(),
    }),
});
exports.memberValidationSchema = {
    createMemberSchema,
    updateMemberSchema,
};
