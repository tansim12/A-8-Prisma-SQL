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
const findAllBook: RequestHandler = async (req, res, next) => {
  try {
    const result = await bookService.findAllBooksDB();
    res.send(
      successResponse(result, StatusCodes.OK, "Books retrieved successfully")
    );
  } catch (error) {
    next(error);
  }
};
const findSingleBooks: RequestHandler = async (req, res, next) => {
  try {
    const result = await bookService.findSingleBooksDB(req?.params?.bookId);
    res.send(
      successResponse(result, StatusCodes.OK, "Books retrieved successfully")
    );
  } catch (error) {
    next(error);
  }
};

export const bookController = {
  createBook,
  findAllBook,
  findSingleBooks,
};
