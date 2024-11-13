"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.memberRouter = void 0;
const express_1 = __importDefault(require("express"));
const validationMiddleWare_1 = __importDefault(require("../../middleware/validationMiddleWare"));
const Member_zodValidation_1 = require("./Member.zodValidation");
const Member_controller_1 = require("./Member.controller");
const router = express_1.default.Router();
router.post("/", (0, validationMiddleWare_1.default)(Member_zodValidation_1.memberValidationSchema.createMemberSchema), Member_controller_1.memberController.createMember);
router.get("/", Member_controller_1.memberController.findAllMembers);
router.get("/:memberId", Member_controller_1.memberController.findSingleMember);
router.put("/:memberId", (0, validationMiddleWare_1.default)(Member_zodValidation_1.memberValidationSchema.updateMemberSchema), Member_controller_1.memberController.updateSingleMember);
router.delete("/:memberId", Member_controller_1.memberController.deleteMember);
exports.memberRouter = router;
