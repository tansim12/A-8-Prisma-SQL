"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.borrowAndReturnRouter = void 0;
const express_1 = __importDefault(require("express"));
const validationMiddleWare_1 = __importDefault(require("../../middleware/validationMiddleWare"));
const BorrowRecord_zodValidation_1 = require("./BorrowRecord.zodValidation");
const BorrowRecord_controller_1 = require("./BorrowRecord.controller");
const router = express_1.default.Router();
router.post("/", (0, validationMiddleWare_1.default)(BorrowRecord_zodValidation_1.borrowAndReturnSchemaValidation.borrowSchema), BorrowRecord_controller_1.borrowAndReturnController.borrow);
router.get("/overdue", BorrowRecord_controller_1.borrowAndReturnController.borrowOverdue);
exports.borrowAndReturnRouter = router;
