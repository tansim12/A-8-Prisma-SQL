import { RequestHandler } from "express";

import { successResponse } from "../../Re-useable/successResponse";
import { StatusCodes } from "http-status-codes";
import { memberService } from "./Member.service";

const createMember: RequestHandler = async (req, res, next) => {
  try {
    const result = await memberService.createMemberDB(req?.body);
    res.send(
      successResponse(result, StatusCodes.OK, "Member create successfully done")
    );
  } catch (error) {
    next(error);
  }
};
const findAllMembers: RequestHandler = async (req, res, next) => {
  try {
    const result = await memberService.findAllMembersDB();
    res.send(
      successResponse(result, StatusCodes.OK, "Member retrieved successfully")
    );
  } catch (error) {
    next(error);
  }
};
const findSingleMember: RequestHandler = async (req, res, next) => {
  try {
    const result = await memberService.findSingleMemberDB(req?.params?.memberId);
    res.send(
      successResponse(result, StatusCodes.OK, "Member retrieved successfully")
    );
  } catch (error) {
    next(error);
  }
};
const updateSingleMember: RequestHandler = async (req, res, next) => {
  try {
    const result = await memberService.updateSingleMemberDB(
      req?.params?.memberId,
      req?.body
    );
    res.send(
      successResponse(result, StatusCodes.OK, "Member updated successfully")
    );
  } catch (error) {
    next(error);
  }
};
const deleteMember: RequestHandler = async (req, res, next) => {
  try {
    const result = await memberService.deleteMemberDB(req?.params?.memberId);
    res.send(
      successResponse(result, StatusCodes.OK, "Member successfully deleted")
    );
  } catch (error) {
    next(error);
  }
};

export const memberController = {
  findSingleMember,
  createMember,
  findAllMembers,
  updateSingleMember,
  deleteMember,
};
