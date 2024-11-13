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
exports.memberService = void 0;
const http_status_codes_1 = require("http-status-codes");
const AppError_1 = __importDefault(require("../../Error-Handler/AppError"));
const prisma_1 = __importDefault(require("../../shared/prisma"));
const createMemberDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const createMember = yield prisma_1.default.member.create({
        data: payload,
    });
    return createMember;
});
const findAllMembersDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.member.findMany();
    return result;
});
const findSingleMemberDB = (memberId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.member.findUniqueOrThrow({
        where: {
            memberId,
        },
    });
    return result;
});
const updateSingleMemberDB = (memberId, payload) => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma_1.default.member.findUniqueOrThrow({
        where: {
            memberId,
        },
    });
    if (payload === null || payload === void 0 ? void 0 : payload.memberId) {
        throw new AppError_1.default(http_status_codes_1.StatusCodes.BAD_REQUEST, "Can't change memberId");
    }
    const result = yield prisma_1.default.member.update({
        where: {
            memberId,
        },
        data: payload,
    });
    return result;
});
const deleteMemberDB = (memberId) => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma_1.default.member.findUniqueOrThrow({
        where: {
            memberId,
        },
    });
    const result = yield prisma_1.default.member.delete({
        where: {
            memberId,
        },
    });
    // return result;
});
exports.memberService = {
    createMemberDB,
    findAllMembersDB,
    findSingleMemberDB,
    updateSingleMemberDB,
    deleteMemberDB,
};
