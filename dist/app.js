"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const globalErrorHandler_1 = __importDefault(require("./app/Error-Handler/globalErrorHandler"));
const normalMiddleware_1 = __importDefault(require("./app/middleware/normalMiddleware"));
const Book_route_1 = require("./app/Modules/Books/Book.route");
const Member_route_1 = require("./app/Modules/Member/Member.route");
const BorrowRecord_route_1 = require("./app/Modules/BorrowRecord/BorrowRecord.route");
const ReturnedBooks_route_1 = require("./app/Modules/ReturnedBooks/ReturnedBooks.route");
const app = (0, express_1.default)();
(0, normalMiddleware_1.default)(app);
app.get("/", (req, res) => {
    res.send({
        Message: "book library  server..",
    });
});
app.use("/api/books", Book_route_1.bookRouter);
app.use("/api/members", Member_route_1.memberRouter);
app.use("/api/borrow", BorrowRecord_route_1.borrowAndReturnRouter);
app.use("/api/return", ReturnedBooks_route_1.returnRouter);
app.all("*", (req, res, next) => {
    const error = new Error(`Can't find ${req.url} on the server`);
    next(error);
});
// global error handle
app.use(globalErrorHandler_1.default);
exports.default = app;
