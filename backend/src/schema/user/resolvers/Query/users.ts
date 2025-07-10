import type { QueryResolvers } from "./../../../types.generated";
import { PrismaClient } from "../../../../../generated/prisma";
export const users: NonNullable<QueryResolvers["users"]> = async (
  _parent,
  _arg,
  _ctx
) => {
  const prisma = new PrismaClient();
  return await prisma.user.findMany();
};
