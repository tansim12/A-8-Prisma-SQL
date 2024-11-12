import prisma from "../../shared/prisma";
import { TBook } from "./Book.interface";

const createBookDB = async (payload: Partial<TBook>) => {
  const createBook = await prisma.book.create({
    data: payload as never,
  });
  return createBook;
};
const findAllBooksDB = async () => {
  const result = await prisma.book.findMany();
  return result;
};
const findSingleBooksDB = async (bookId: string) => {
  const result = await prisma.book.findUniqueOrThrow({
    where: {
      bookId,
    },
  });
  return result;
};
const updateSingleBooksDB = async (bookId: string, payload: Partial<TBook>) => {
  await prisma.book.findUniqueOrThrow({
    where: {
      bookId,
    },
  });

  const result = await prisma.book.update({
    where: {
      bookId,
    },
    data: payload,
  });
  return result;
};

export const bookService = {
  createBookDB,
  findAllBooksDB,
  findSingleBooksDB,
  updateSingleBooksDB,
};
