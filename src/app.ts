import express, { Application, Request, Response } from "express";

import globalErrorHandler from "./app/Error-Handler/globalErrorHandler";
import normalMiddleware from "./app/middleware/normalMiddleware";
import { bookRouter } from "./app/Modules/Books/Book.route";
import { memberRouter } from "./app/Modules/Member/Member.route";
import { borrowAndReturnRouter } from "./app/Modules/BorrowRecord/BorrowRecord.route";
import { returnRouter } from "./app/Modules/ReturnedBooks/ReturnedBooks.route";

const app: Application = express();
normalMiddleware(app);

app.get("/", (req: Request, res: Response) => {
  res.send({
    Message: "Ph health care server..",
  });
});

app.use("/api/books", bookRouter);
app.use("/api/members", memberRouter);
app.use("/api/borrow", borrowAndReturnRouter);
app.use("/api/return", returnRouter);

app.all("*", (req: Request, res: Response, next) => {
  const error = new Error(`Can't find ${req.url} on the server`);
  next(error);
});

// global error handle
app.use(globalErrorHandler);

export default app;
