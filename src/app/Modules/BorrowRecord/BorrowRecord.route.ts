import express from "express";
import validationMiddleWare from "../../middleware/validationMiddleWare";
import { borrowAndReturnSchemaValidation } from "./BorrowRecord.zodValidation";
import { borrowAndReturnController } from "./BorrowRecord.controller";

const router = express.Router();

router.post(
  "/",
  validationMiddleWare(borrowAndReturnSchemaValidation.borrowSchema),
  borrowAndReturnController.borrow
);


export const borrowAndReturnRouter = router;
