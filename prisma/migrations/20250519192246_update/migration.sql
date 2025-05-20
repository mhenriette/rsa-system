-- AlterTable
ALTER TABLE "_ActivityToMember" ADD CONSTRAINT "_ActivityToMember_AB_pkey" PRIMARY KEY ("A", "B");

-- DropIndex
DROP INDEX "_ActivityToMember_AB_unique";
