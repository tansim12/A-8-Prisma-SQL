import prisma from "../../shared/prisma";
import { TBook } from "./Book.interface";

const createBookDB = async (payload: Partial<TBook>) => {
  const createBook = await prisma.book.create({
    data: payload as never,
  });
  return {
    createBook,
  };
};

export const bookService = {
  createBookDB,
};
