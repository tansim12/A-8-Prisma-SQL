import { StatusCodes } from "http-status-codes";
import AppError from "../../Error-Handler/AppError";
import prisma from "../../shared/prisma";
import { TBorrow, TReturn } from "./BorrowRecord.interface";

const borrowDB = async (payload: TBorrow) => {
  await prisma.book.findUniqueOrThrow({
    where: {
      bookId: payload?.bookId,
    },
  });
  await prisma.member.findUniqueOrThrow({
    where: {
      memberId: payload?.memberId,
    },
  });
  const result = await prisma.borrowRecord.create({
    data: payload,
  });
  return result;
};
const returnDB = async (payload: TReturn) => {
  const borrow = await prisma.borrowRecord.findUniqueOrThrow({
    where: {
      borrowId: payload?.borrowId,
    },
  });

  if (borrow?.returnDate !== null) {
    throw new AppError(StatusCodes.BAD_REQUEST, "This book already returned")
  }

  const result = await prisma.borrowRecord.update({
    where: {
      borrowId: payload?.borrowId,
    },
    data: {
      returnDate: new Date(),
    },
  });
  return result;
};

export const borrowAndReturnService = {
  borrowDB,
  returnDB,
};
