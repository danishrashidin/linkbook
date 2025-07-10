import type { MutationResolvers } from "./../../../types.generated";
import { PrismaClient } from "../../../../../generated/prisma";
export const deleteLink: NonNullable<MutationResolvers["deleteLink"]> = async (
  _parent,
  _arg,
  _ctx
) => {
  const prisma = new PrismaClient();
  const { id } = _arg;
  return await prisma.link.delete({
    where: {
      id,
    },
  });
};
