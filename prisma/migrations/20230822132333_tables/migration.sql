/*
  Warnings:

  - You are about to drop the `member` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "member";

-- CreateTable
CREATE TABLE "Member" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "First_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "member_id" TEXT NOT NULL,
    "contact" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "hasCard" BOOLEAN NOT NULL,
    "joined_at" TIMESTAMP(3) NOT NULL,
    "unit_name" TEXT NOT NULL,
    "district" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "occupation" TEXT NOT NULL,

    CONSTRAINT "Member_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Activity" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "venue" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "organizer" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL,
    "admin_id" INTEGER NOT NULL,

    CONSTRAINT "Activity_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Payment" (
    "id" SERIAL NOT NULL,
    "amount" TEXT NOT NULL,
    "payer_names" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "reason" TIMESTAMP(3) NOT NULL,
    "member_id" INTEGER NOT NULL,

    CONSTRAINT "Payment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Announcements" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "communique" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL,
    "status" TEXT NOT NULL,
    "Author" TEXT NOT NULL,
    "admin_id" INTEGER NOT NULL,

    CONSTRAINT "Announcements_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Report" (
    "id" SERIAL NOT NULL,
    "author" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL,
    "type" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "admin_id" INTEGER NOT NULL,

    CONSTRAINT "Report_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Admin" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "contact" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "unit" TEXT NOT NULL,
    "district" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Admin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Donation" (
    "id" SERIAL NOT NULL,
    "about" TEXT NOT NULL,
    "target" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL,
    "admin_id" INTEGER NOT NULL,

    CONSTRAINT "Donation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ActivityToMember" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Activity_admin_id_key" ON "Activity"("admin_id");

-- CreateIndex
CREATE UNIQUE INDEX "Payment_member_id_key" ON "Payment"("member_id");

-- CreateIndex
CREATE UNIQUE INDEX "Announcements_admin_id_key" ON "Announcements"("admin_id");

-- CreateIndex
CREATE UNIQUE INDEX "Report_admin_id_key" ON "Report"("admin_id");

-- CreateIndex
CREATE UNIQUE INDEX "Donation_admin_id_key" ON "Donation"("admin_id");

-- CreateIndex
CREATE UNIQUE INDEX "_ActivityToMember_AB_unique" ON "_ActivityToMember"("A", "B");

-- CreateIndex
CREATE INDEX "_ActivityToMember_B_index" ON "_ActivityToMember"("B");

-- AddForeignKey
ALTER TABLE "Activity" ADD CONSTRAINT "Activity_admin_id_fkey" FOREIGN KEY ("admin_id") REFERENCES "Admin"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Payment" ADD CONSTRAINT "Payment_member_id_fkey" FOREIGN KEY ("member_id") REFERENCES "Member"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Announcements" ADD CONSTRAINT "Announcements_admin_id_fkey" FOREIGN KEY ("admin_id") REFERENCES "Admin"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Report" ADD CONSTRAINT "Report_admin_id_fkey" FOREIGN KEY ("admin_id") REFERENCES "Admin"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Donation" ADD CONSTRAINT "Donation_admin_id_fkey" FOREIGN KEY ("admin_id") REFERENCES "Admin"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ActivityToMember" ADD CONSTRAINT "_ActivityToMember_A_fkey" FOREIGN KEY ("A") REFERENCES "Activity"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ActivityToMember" ADD CONSTRAINT "_ActivityToMember_B_fkey" FOREIGN KEY ("B") REFERENCES "Member"("id") ON DELETE CASCADE ON UPDATE CASCADE;
