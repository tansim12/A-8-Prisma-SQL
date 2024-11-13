"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookRouter = void 0;
const express_1 = __importDefault(require("express"));
const validationMiddleWare_1 = __importDefault(require("../../middleware/validationMiddleWare"));
const Book_zodValidation_1 = require("./Book.zodValidation");
const Book_controller_1 = require("./Book.controller");
const router = express_1.default.Router();
router.post("/", (0, validationMiddleWare_1.default)(Book_zodValidation_1.bookValidationSchema.createBookSchema), Book_controller_1.bookController.createBook);
router.get("/", Book_controller_1.bookController.findAllBook);
router.get("/:bookId", Book_controller_1.bookController.findSingleBooks);
router.put("/:bookId", (0, validationMiddleWare_1.default)(Book_zodValidation_1.bookValidationSchema.updateBookSchema), Book_controller_1.bookController.updateSingleBooks);
router.delete("/:bookId", Book_controller_1.bookController.deleteBook);
exports.bookRouter = router;
