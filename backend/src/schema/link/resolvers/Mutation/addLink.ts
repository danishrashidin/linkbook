import type { MutationResolvers } from "./../../../types.generated";
import { PrismaClient } from "../../../../../generated/prisma";
import validator from "validator";
export const addLink: NonNullable<MutationResolvers["addLink"]> = async (
  _parent,
  _arg,
  _ctx
) => {
  const prisma = new PrismaClient();
  const { input } = _arg;

  // Validate link
  const isLinkValid = validator.isURL(input.url, {
    require_protocol: true,
  });
  if (!isLinkValid) throw "URL is not a valid link";

  return await prisma.link.create({
    data: {
      url: input.url,
      context: input.context,
      title: input.title,
    },
  });
};
