/*
  Warnings:

  - The primary key for the `Payments` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[ref]` on the table `Payments` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Payments" DROP CONSTRAINT "Payments_pkey",
ADD CONSTRAINT "Payments_pkey" PRIMARY KEY ("ref");

-- CreateIndex
CREATE UNIQUE INDEX "Payments_ref_key" ON "Payments"("ref");
