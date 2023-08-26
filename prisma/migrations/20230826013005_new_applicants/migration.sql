-- CreateTable
CREATE TABLE "Applicants" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "First_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "applicant_id" TEXT NOT NULL,
    "contact" TEXT NOT NULL,
    "district" TEXT NOT NULL,
    "Sector" TEXT NOT NULL,
    "occupation" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "age" TEXT NOT NULL,
    "reason" TEXT NOT NULL,
    "joined_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Applicants_pkey" PRIMARY KEY ("id")
);
