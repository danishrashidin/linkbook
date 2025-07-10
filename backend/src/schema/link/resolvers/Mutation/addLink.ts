import type { MutationResolvers } from "./../../../types.generated";
import { PrismaClient } from "../../../../../generated/prisma";
export const addLink: NonNullable<MutationResolvers['addLink']> = async (
  _parent,
  _arg,
  _ctx
) => {
  const prisma = new PrismaClient();
  const { input } = _arg;
  return await prisma.link.create({
    data: {
      url: input.url,
      context: input.context,
      title: input.title,
    },
  });
};
