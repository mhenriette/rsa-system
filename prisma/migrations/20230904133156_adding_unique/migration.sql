/*
  Warnings:

  - A unique constraint covering the columns `[username]` on the table `DistrictManager` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[username]` on the table `HqAdmin` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[username]` on the table `UnitLeader` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "DistrictManager_username_key" ON "DistrictManager"("username");

-- CreateIndex
CREATE UNIQUE INDEX "HqAdmin_username_key" ON "HqAdmin"("username");

-- CreateIndex
CREATE UNIQUE INDEX "UnitLeader_username_key" ON "UnitLeader"("username");
