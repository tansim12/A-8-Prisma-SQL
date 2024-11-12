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
router.get("/", bookController.findAllBook);
router.get("/:bookId", bookController.findSingleBooks);
router.put(
  "/:bookId",
  validationMiddleWare(bookValidationSchema.updateBookSchema),
  bookController.updateSingleBooks
);
router.delete("/:bookId", bookController.deleteBook);

export const bookRouter = router;
