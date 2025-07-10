-- DropForeignKey
ALTER TABLE "link" DROP CONSTRAINT "link_createdById_fkey";

-- DropForeignKey
ALTER TABLE "tag" DROP CONSTRAINT "tag_createdById_fkey";

-- AlterTable
ALTER TABLE "link" ALTER COLUMN "createdById" DROP NOT NULL;

-- AlterTable
ALTER TABLE "tag" ALTER COLUMN "createdById" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "link" ADD CONSTRAINT "link_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tag" ADD CONSTRAINT "tag_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;
