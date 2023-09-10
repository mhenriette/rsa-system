/*
  Warnings:

  - Changed the type of `paidAmount` on the `Donation` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Donation"
ALTER COLUMN "paidAmount" SET DATA TYPE INTEGER
USING "paidAmount"::integer;
