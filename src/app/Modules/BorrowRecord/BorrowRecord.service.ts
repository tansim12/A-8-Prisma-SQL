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
    throw new AppError(StatusCodes.BAD_REQUEST, "This book already returned");
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

const borrowOverdueDB = async () => {
  const dayDiffer = new Date();
  dayDiffer.setDate(dayDiffer.getDate() - 14);
  console.log(dayDiffer);

  // Find all overdue borrow records
  const findOverdueRecords = await prisma.borrowRecord.findMany({
    where: {
      borrowDate: {
        lte: dayDiffer,
      },
      returnDate: null,
    },
    include: {
      book: {
        select: { title: true },
      },
      member: {
        select: { name: true },
      },
    },
  });


  // Map the results to calculate overdue days and format response
  const result = findOverdueRecords?.map((item) => {
    const overdueDays =
      Math.ceil(
        (new Date().getTime() - new Date(item.borrowDate).getTime()) /
          (1000 * 60 * 60 * 24)
      ) - 14;

    return {
      borrowId: item.borrowId,
      bookTitle: item.book.title,
      borrowerName: item.member.name,
      overdueDays,
    };
  });
  return result;
};

export const borrowAndReturnService = {
  borrowDB,
  returnDB,
  borrowOverdueDB,
};
