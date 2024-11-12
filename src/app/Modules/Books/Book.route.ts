import express from "express";
import validationMiddleWare from "../../middleware/validationMiddleWare";
import { bookValidationSchema } from "./Book.zodValidation";
import { bookController } from "./Book.controller";

const router = express.Router();

router.post(
  "/",
  validationMiddleWare(bookValidationSchema.createBookSchema),
  bookController.createBook
);

export const bookRouter = router;
