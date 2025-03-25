import { prismaClient } from "../../extras/prisma";
import { GetMeError, type GetMeResult, type userResult } from "./users-types";

export const getMe = async (parameters: { userId: string }): Promise<GetMeResult> => {
  const user = await prismaClient.user.findUnique({
    where: {
      id: parameters.userId,
    },
  });

  if (!user) {
    throw GetMeError.BAD_REQUEST;
  }

  return {
    user,
  };
};
export const getAllUsers = async (parameters: {}): Promise<userResult> => {
    const users = await prismaClient.user.findMany();
    if (!users) {
      throw GetMeError.BAD_REQUEST;
    }
    return {
      user:users,
    };
  };
  