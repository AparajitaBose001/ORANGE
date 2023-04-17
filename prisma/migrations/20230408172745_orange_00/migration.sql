-- AlterTable
ALTER TABLE "Cart" ADD COLUMN     "color" TEXT[];

-- CreateTable
CREATE TABLE "Payment" (
    "id" TEXT NOT NULL,
    "items" TEXT[],
    "total" TEXT NOT NULL,
    "customer" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "trixid" TEXT NOT NULL,
    "cod" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Payment_id_key" ON "Payment"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Payment_trixid_key" ON "Payment"("trixid");
