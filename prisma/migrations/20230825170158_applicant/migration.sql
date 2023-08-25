-- CreateTable
CREATE TABLE "Applicants" (
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

    CONSTRAINT "Applicants_pkey" PRIMARY KEY ("id")
);
