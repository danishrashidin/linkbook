import type { QueryResolvers } from "./../../../types.generated";
import { PrismaClient } from "../../../../../generated/prisma";
export const link: NonNullable<QueryResolvers['link']> = async (
  _parent,
  _arg,
  _ctx
) => {
  const prisma = new PrismaClient();
  const link = prisma.link.findUnique({
    where: {
      id: _arg.id,
    },
    include: {
      createdBy: true,
      tags: true,
    },
  });

  return {
    ...link,
    createdBy: null,
    createdById: null,
  };
};
