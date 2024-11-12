import { RequestHandler } from "express";
import { borrowAndReturnService } from "./BorrowRecord.service";
import { successResponse } from "../../Re-useable/successResponse";
import { StatusCodes } from "http-status-codes";

const borrow: RequestHandler = async (req, res, next) => {
  try {
    const result = await borrowAndReturnService.borrowDB(req.body);
    res.send(
      successResponse(result, StatusCodes.OK, "Book borrowed successfully")
    );
  } catch (error) {
    next(error);
  }
};
const returnBook: RequestHandler = async (req, res, next) => {
  try {
    const result = await borrowAndReturnService.returnDB(req.body);
    res.send(
      successResponse(result, StatusCodes.OK, "Book returned successfully")
    );
  } catch (error) {
    next(error);
  }
};
const borrowOverdue: RequestHandler = async (req, res, next) => {
  try {
    const result = await borrowAndReturnService.borrowOverdueDB();
    res.send(
      successResponse(result, StatusCodes.OK, "Overdue borrow list fetched")
    );
  } catch (error) {
    next(error);
  }
};

export const borrowAndReturnController = { borrow, returnBook,borrowOverdue};
