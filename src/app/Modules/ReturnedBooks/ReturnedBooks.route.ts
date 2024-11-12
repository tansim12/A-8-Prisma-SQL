import express from "express";
import validationMiddleWare from "../../middleware/validationMiddleWare";
import { borrowAndReturnSchemaValidation } from "../BorrowRecord/BorrowRecord.zodValidation";
import { borrowAndReturnController } from "../BorrowRecord/BorrowRecord.controller";
const router = express.Router();


//! controller use borrowAndReturn. It's not good 
router.post(
  "/",
  validationMiddleWare(borrowAndReturnSchemaValidation.returnSchema),
  borrowAndReturnController.returnBook
);

export const returnRouter = router;
