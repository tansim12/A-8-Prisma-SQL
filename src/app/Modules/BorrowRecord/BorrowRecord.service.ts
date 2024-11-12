import prisma from "../../shared/prisma";
import { TBorrow } from "./BorrowRecord.interface";

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

export const borrowAndReturnService = {
    borrowDB,
};
