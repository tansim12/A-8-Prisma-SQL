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

export const borrowAndReturnController = { borrow };
