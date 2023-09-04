/*
  Warnings:

  - Added the required column `password` to the `DistrictManager` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `HqAdmin` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `UnitLeader` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "DistrictManager" ADD COLUMN     "password" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "HqAdmin" ADD COLUMN     "password" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "UnitLeader" ADD COLUMN     "password" TEXT NOT NULL;
