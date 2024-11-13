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
Object.defineProperty(exports, "__esModule", { value: true });
exports.borrowAndReturnController = void 0;
const BorrowRecord_service_1 = require("./BorrowRecord.service");
const successResponse_1 = require("../../Re-useable/successResponse");
const http_status_codes_1 = require("http-status-codes");
const borrow = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield BorrowRecord_service_1.borrowAndReturnService.borrowDB(req.body);
        res.send((0, successResponse_1.successResponse)(result, http_status_codes_1.StatusCodes.OK, "Book borrowed successfully"));
    }
    catch (error) {
        next(error);
    }
});
const returnBook = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield BorrowRecord_service_1.borrowAndReturnService.returnDB(req.body);
        res.send((0, successResponse_1.successResponse)(result, http_status_codes_1.StatusCodes.OK, "Book returned successfully"));
    }
    catch (error) {
        next(error);
    }
});
const borrowOverdue = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield BorrowRecord_service_1.borrowAndReturnService.borrowOverdueDB();
        res.send((0, successResponse_1.successResponse)(result, http_status_codes_1.StatusCodes.OK, "Overdue borrow list fetched"));
    }
    catch (error) {
        next(error);
    }
});
exports.borrowAndReturnController = { borrow, returnBook, borrowOverdue };
