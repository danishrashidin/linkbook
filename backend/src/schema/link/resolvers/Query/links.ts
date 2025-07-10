import type { QueryResolvers } from "./../../../types.generated";
import { PrismaClient } from "../../../../../generated/prisma";
export const links: NonNullable<QueryResolvers['links']> = async (
  _parent,
  _arg,
  _ctx
) => {
  const prisma = new PrismaClient();
  return await prisma.link.findMany();
};
