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
exports.bookService = void 0;
const http_status_codes_1 = require("http-status-codes");
const AppError_1 = __importDefault(require("../../Error-Handler/AppError"));
const prisma_1 = __importDefault(require("../../shared/prisma"));
const createBookDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const createBook = yield prisma_1.default.book.create({
        data: payload,
    });
    return createBook;
});
const findAllBooksDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.book.findMany();
    return result;
});
const findSingleBooksDB = (bookId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.book.findUniqueOrThrow({
        where: {
            bookId,
        },
    });
    return result;
});
const updateSingleBooksDB = (bookId, payload) => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma_1.default.book.findUniqueOrThrow({
        where: {
            bookId,
        },
    });
    if (payload === null || payload === void 0 ? void 0 : payload.bookId) {
        throw new AppError_1.default(http_status_codes_1.StatusCodes.BAD_REQUEST, "Can't change bookId");
    }
    const result = yield prisma_1.default.book.update({
        where: {
            bookId,
        },
        data: payload,
    });
    return result;
});
const deleteBookDB = (bookId) => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma_1.default.book.findUniqueOrThrow({
        where: {
            bookId,
        },
    });
    const result = yield prisma_1.default.book.delete({
        where: {
            bookId,
        },
    });
    // return result;
});
exports.bookService = {
    createBookDB,
    findAllBooksDB,
    findSingleBooksDB,
    updateSingleBooksDB,
    deleteBookDB,
};
