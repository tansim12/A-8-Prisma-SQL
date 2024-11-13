"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.borrowAndReturnService = void 0;
const http_status_codes_1 = require("http-status-codes");
const AppError_1 = __importDefault(require("../../Error-Handler/AppError"));
const prisma_1 = __importDefault(require("../../shared/prisma"));
const borrowDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma_1.default.book.findUniqueOrThrow({
        where: {
            bookId: payload === null || payload === void 0 ? void 0 : payload.bookId,
        },
    });
    yield prisma_1.default.member.findUniqueOrThrow({
        where: {
            memberId: payload === null || payload === void 0 ? void 0 : payload.memberId,
        },
    });
    const result = yield prisma_1.default.borrowRecord.create({
        data: payload,
    });
    return result;
});
const returnDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const borrow = yield prisma_1.default.borrowRecord.findUniqueOrThrow({
        where: {
            borrowId: payload === null || payload === void 0 ? void 0 : payload.borrowId,
        },
    });
    if ((borrow === null || borrow === void 0 ? void 0 : borrow.returnDate) !== null) {
        throw new AppError_1.default(http_status_codes_1.StatusCodes.BAD_REQUEST, "This book already returned");
    }
    const result = yield prisma_1.default.borrowRecord.update({
        where: {
            borrowId: payload === null || payload === void 0 ? void 0 : payload.borrowId,
        },
        data: {
            returnDate: new Date(),
        },
    });
    return result;
});
const borrowOverdueDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const dayDiffer = new Date();
    dayDiffer.setDate(dayDiffer.getDate() - 14);
    console.log(dayDiffer);
    // Find all overdue borrow records
    const findOverdueRecords = yield prisma_1.default.borrowRecord.findMany({
        where: {
            borrowDate: {
                lte: dayDiffer,
            },
            returnDate: null,
        },
        include: {
            book: {
                select: { title: true },
            },
            member: {
                select: { name: true },
            },
        },
    });
    // Map the results to calculate overdue days and format response
    const result = findOverdueRecords === null || findOverdueRecords === void 0 ? void 0 : findOverdueRecords.map((item) => {
        const overdueDays = Math.ceil((new Date().getTime() - new Date(item.borrowDate).getTime()) /
            (1000 * 60 * 60 * 24)) - 14;
        return {
            borrowId: item.borrowId,
            bookTitle: item.book.title,
            borrowerName: item.member.name,
            overdueDays,
        };
    });
    return result;
});
exports.borrowAndReturnService = {
    borrowDB,
    returnDB,
    borrowOverdueDB,
};
