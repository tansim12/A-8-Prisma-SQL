import { RequestHandler } from "express";
import { bookService } from "./Book.service";
import { successResponse } from "../../Re-useable/successResponse";
import { StatusCodes } from "http-status-codes";

const createBook: RequestHandler = async (req, res, next) => {
  try {
    const result = await bookService.createBookDB(req?.body);
    res.send(
      successResponse(result, StatusCodes.OK, "Book create successfully done")
    );
  } catch (error) {
    next(error);
  }
};

export const bookController = {
  createBook,
};
