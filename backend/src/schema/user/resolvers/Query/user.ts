import type { QueryResolvers } from "./../../../types.generated";
import { PrismaClient } from "../../../../../generated/prisma";
export const user: NonNullable<QueryResolvers['user']> = async (
  _parent,
  _arg,
  _ctx
) => {
  const prisma = new PrismaClient();
  const { id } = _arg;
  const user = await prisma.user.findUnique({
    where: {
      id,
    },
    include: {
      links: true,
      tags: true,
    },
  });
  return {
    ...user,
  };
};
