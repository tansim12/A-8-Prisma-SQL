import express from "express";
import validationMiddleWare from "../../middleware/validationMiddleWare";
import { memberValidationSchema } from "./Member.zodValidation";
import { memberController } from "./Member.controller";

const router = express.Router();

router.post(
  "/",
  validationMiddleWare(memberValidationSchema.createMemberSchema),
  memberController.createMember
);
router.get("/", memberController.findAllMembers);
router.get("/:memberId", memberController.findSingleMember);
router.put(
  "/:memberId",
  validationMiddleWare(memberValidationSchema.updateMemberSchema),
  memberController.updateSingleMember
);
router.delete("/:memberId", memberController.deleteMember);

export const memberRouter = router;
