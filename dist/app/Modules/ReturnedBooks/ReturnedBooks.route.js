"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.returnRouter = void 0;
const express_1 = __importDefault(require("express"));
const validationMiddleWare_1 = __importDefault(require("../../middleware/validationMiddleWare"));
const BorrowRecord_zodValidation_1 = require("../BorrowRecord/BorrowRecord.zodValidation");
const BorrowRecord_controller_1 = require("../BorrowRecord/BorrowRecord.controller");
const router = express_1.default.Router();
//! controller use borrowAndReturn. It's not good 
router.post("/", (0, validationMiddleWare_1.default)(BorrowRecord_zodValidation_1.borrowAndReturnSchemaValidation.returnSchema), BorrowRecord_controller_1.borrowAndReturnController.returnBook);
exports.returnRouter = router;
