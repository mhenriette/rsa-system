-- CreateTable
CREATE TABLE "Payments" (
    "id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "contact" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "ref" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL,
    "processed_at" TIMESTAMP(3) NOT NULL,
    "type" TEXT NOT NULL,
    "donation_id" TEXT,
    "status" TEXT NOT NULL,

    CONSTRAINT "Payments_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Payments_id_key" ON "Payments"("id");
