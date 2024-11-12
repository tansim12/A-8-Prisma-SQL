import { StatusCodes } from "http-status-codes";
import AppError from "../../Error-Handler/AppError";
import prisma from "../../shared/prisma";
import { TMember } from "./Member.interface";

const createMemberDB = async (payload: Partial<TMember>) => {
  const createMember = await prisma.member.create({
    data: payload as never,
  });
  return createMember;
};
const findAllMembersDB = async () => {
  const result = await prisma.member.findMany();
  return result;
};
const findSingleMemberDB = async (memberId: string) => {
  const result = await prisma.member.findUniqueOrThrow({
    where: {
      memberId,
    },
  });
  return result;
};
const updateSingleMemberDB = async (
  memberId: string,
  payload: Partial<TMember>
) => {
  await prisma.member.findUniqueOrThrow({
    where: {
      memberId,
    },
  });

  if (payload?.memberId) {
    throw new AppError(StatusCodes.BAD_REQUEST, "Can't change memberId");
  }

  const result = await prisma.member.update({
    where: {
      memberId,
    },
    data: payload,
  });
  return result;
};
const deleteMemberDB = async (memberId: string) => {
  await prisma.member.findUniqueOrThrow({
    where: {
      memberId,
    },
  });

  const result = await prisma.member.delete({
    where: {
      memberId,
    },
  });
  // return result;
};

export const memberService = {
  createMemberDB,
  findAllMembersDB,
  findSingleMemberDB,
  updateSingleMemberDB,
  deleteMemberDB,
};
