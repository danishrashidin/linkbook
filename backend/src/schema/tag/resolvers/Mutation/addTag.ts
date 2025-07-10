import type { MutationResolvers } from "./../../../types.generated";
import { PrismaClient } from "../../../../../generated/prisma";
export const addTag: NonNullable<MutationResolvers['addTag']> = async (
  _parent,
  _arg,
  _ctx
) => {
  const prisma = new PrismaClient();
  const tag = await prisma.tag.create({
    data: {
      ..._arg.input,
    },
  });
  return tag;
};
