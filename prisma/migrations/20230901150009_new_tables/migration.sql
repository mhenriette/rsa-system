/*
  Warnings:

  - You are about to drop the column `image` on the `Activity` table. All the data in the column will be lost.
  - You are about to drop the column `organizer` on the `Activity` table. All the data in the column will be lost.
  - You are about to drop the column `Author` on the `Announcements` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `Announcements` table. All the data in the column will be lost.
  - You are about to drop the `Admin` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Payment` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Report` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `requeste_unit` to the `Applicants` table without a default value. This is not possible if the table is not empty.
  - Added the required column `paidAmount` to the `Donation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `Donation` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Activity" DROP CONSTRAINT "Activity_admin_id_fkey";

-- DropForeignKey
ALTER TABLE "Announcements" DROP CONSTRAINT "Announcements_admin_id_fkey";

-- DropForeignKey
ALTER TABLE "Donation" DROP CONSTRAINT "Donation_admin_id_fkey";

-- DropForeignKey
ALTER TABLE "Payment" DROP CONSTRAINT "Payment_member_id_fkey";

-- DropForeignKey
ALTER TABLE "Report" DROP CONSTRAINT "Report_admin_id_fkey";

-- AlterTable
ALTER TABLE "Activity" DROP COLUMN "image",
DROP COLUMN "organizer",
ADD COLUMN     "districtManagerId" INTEGER,
ADD COLUMN     "unitLeaderId" INTEGER;

-- AlterTable
ALTER TABLE "Announcements" DROP COLUMN "Author",
DROP COLUMN "status",
ADD COLUMN     "districtManagerId" INTEGER,
ADD COLUMN     "unitLeaderId" INTEGER;

-- AlterTable
ALTER TABLE "Applicants" ADD COLUMN     "requeste_unit" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Donation" ADD COLUMN     "paidAmount" TEXT NOT NULL,
ADD COLUMN     "title" TEXT NOT NULL,
ALTER COLUMN "created_at" SET DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "Member" ADD COLUMN     "unitId" INTEGER,
ALTER COLUMN "joined_at" SET DEFAULT CURRENT_TIMESTAMP;

-- DropTable
DROP TABLE "Admin";

-- DropTable
DROP TABLE "Payment";

-- DropTable
DROP TABLE "Report";

-- CreateTable
CREATE TABLE "HqAdmin" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "contact" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "role" TEXT NOT NULL DEFAULT 'admin',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "unitId" INTEGER NOT NULL,

    CONSTRAINT "HqAdmin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DistrictManager" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "contact" TEXT NOT NULL,
    "district" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "role" TEXT NOT NULL DEFAULT 'districtManager',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "DistrictManager_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UnitLeader" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "contact" TEXT NOT NULL,
    "district" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "role" TEXT NOT NULL DEFAULT 'UnitLeader',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "unitId" INTEGER NOT NULL,

    CONSTRAINT "UnitLeader_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Unit" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "districtManagerId" INTEGER NOT NULL,
    "unitLeaderId" INTEGER NOT NULL,
    "district" TEXT NOT NULL,
    "hqAdminId" INTEGER NOT NULL,

    CONSTRAINT "Unit_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "HqAdmin_unitId_key" ON "HqAdmin"("unitId");

-- CreateIndex
CREATE UNIQUE INDEX "UnitLeader_unitId_key" ON "UnitLeader"("unitId");

-- CreateIndex
CREATE UNIQUE INDEX "Unit_unitLeaderId_key" ON "Unit"("unitLeaderId");

-- CreateIndex
CREATE UNIQUE INDEX "Unit_hqAdminId_key" ON "Unit"("hqAdminId");

-- AddForeignKey
ALTER TABLE "HqAdmin" ADD CONSTRAINT "HqAdmin_unitId_fkey" FOREIGN KEY ("unitId") REFERENCES "Unit"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Member" ADD CONSTRAINT "Member_unitId_fkey" FOREIGN KEY ("unitId") REFERENCES "Unit"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Unit" ADD CONSTRAINT "Unit_districtManagerId_fkey" FOREIGN KEY ("districtManagerId") REFERENCES "DistrictManager"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Unit" ADD CONSTRAINT "Unit_unitLeaderId_fkey" FOREIGN KEY ("unitLeaderId") REFERENCES "UnitLeader"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Activity" ADD CONSTRAINT "Activity_admin_id_fkey" FOREIGN KEY ("admin_id") REFERENCES "HqAdmin"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Activity" ADD CONSTRAINT "Activity_districtManagerId_fkey" FOREIGN KEY ("districtManagerId") REFERENCES "DistrictManager"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Activity" ADD CONSTRAINT "Activity_unitLeaderId_fkey" FOREIGN KEY ("unitLeaderId") REFERENCES "UnitLeader"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Announcements" ADD CONSTRAINT "Announcements_admin_id_fkey" FOREIGN KEY ("admin_id") REFERENCES "HqAdmin"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Announcements" ADD CONSTRAINT "Announcements_districtManagerId_fkey" FOREIGN KEY ("districtManagerId") REFERENCES "DistrictManager"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Announcements" ADD CONSTRAINT "Announcements_unitLeaderId_fkey" FOREIGN KEY ("unitLeaderId") REFERENCES "UnitLeader"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Donation" ADD CONSTRAINT "Donation_admin_id_fkey" FOREIGN KEY ("admin_id") REFERENCES "HqAdmin"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
