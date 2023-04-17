-- CreateTable
CREATE TABLE "Cart" (
    "username" TEXT NOT NULL,
    "items" TEXT[],
    "total" DOUBLE PRECISION NOT NULL,
    "quantity" INTEGER[]
);

-- CreateIndex
CREATE UNIQUE INDEX "Cart_username_key" ON "Cart"("username");
