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
exports.memberController = void 0;
const successResponse_1 = require("../../Re-useable/successResponse");
const http_status_codes_1 = require("http-status-codes");
const Member_service_1 = require("./Member.service");
const createMember = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield Member_service_1.memberService.createMemberDB(req === null || req === void 0 ? void 0 : req.body);
        res.send((0, successResponse_1.successResponse)(result, http_status_codes_1.StatusCodes.OK, "Member create successfully done"));
    }
    catch (error) {
        next(error);
    }
});
const findAllMembers = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield Member_service_1.memberService.findAllMembersDB();
        res.send((0, successResponse_1.successResponse)(result, http_status_codes_1.StatusCodes.OK, "Member retrieved successfully"));
    }
    catch (error) {
        next(error);
    }
});
const findSingleMember = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const result = yield Member_service_1.memberService.findSingleMemberDB((_a = req === null || req === void 0 ? void 0 : req.params) === null || _a === void 0 ? void 0 : _a.memberId);
        res.send((0, successResponse_1.successResponse)(result, http_status_codes_1.StatusCodes.OK, "Member retrieved successfully"));
    }
    catch (error) {
        next(error);
    }
});
const updateSingleMember = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const result = yield Member_service_1.memberService.updateSingleMemberDB((_a = req === null || req === void 0 ? void 0 : req.params) === null || _a === void 0 ? void 0 : _a.memberId, req === null || req === void 0 ? void 0 : req.body);
        res.send((0, successResponse_1.successResponse)(result, http_status_codes_1.StatusCodes.OK, "Member updated successfully"));
    }
    catch (error) {
        next(error);
    }
});
const deleteMember = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const result = yield Member_service_1.memberService.deleteMemberDB((_a = req === null || req === void 0 ? void 0 : req.params) === null || _a === void 0 ? void 0 : _a.memberId);
        res.send((0, successResponse_1.successResponse)(result, http_status_codes_1.StatusCodes.OK, "Member successfully deleted"));
    }
    catch (error) {
        next(error);
    }
});
exports.memberController = {
    findSingleMember,
    createMember,
    findAllMembers,
    updateSingleMember,
    deleteMember,
};
