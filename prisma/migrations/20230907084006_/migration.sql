-- DropForeignKey
ALTER TABLE "Unit" DROP CONSTRAINT "Unit_unitLeaderId_fkey";

-- AlterTable
ALTER TABLE "Unit" ALTER COLUMN "unitLeaderId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Unit" ADD CONSTRAINT "Unit_unitLeaderId_fkey" FOREIGN KEY ("unitLeaderId") REFERENCES "UnitLeader"("id") ON DELETE SET NULL ON UPDATE CASCADE;
