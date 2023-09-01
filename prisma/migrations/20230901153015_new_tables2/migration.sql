-- DropForeignKey
ALTER TABLE "HqAdmin" DROP CONSTRAINT "HqAdmin_unitId_fkey";

-- AlterTable
ALTER TABLE "HqAdmin" ALTER COLUMN "unitId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "HqAdmin" ADD CONSTRAINT "HqAdmin_unitId_fkey" FOREIGN KEY ("unitId") REFERENCES "Unit"("id") ON DELETE SET NULL ON UPDATE CASCADE;
