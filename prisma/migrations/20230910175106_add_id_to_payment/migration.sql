-- DropIndex
DROP INDEX "Payments_id_key";

-- AlterTable
CREATE SEQUENCE payments_id_seq;
ALTER TABLE "Payments" ALTER COLUMN "id" SET DEFAULT nextval('payments_id_seq');
ALTER SEQUENCE payments_id_seq OWNED BY "Payments"."id";
