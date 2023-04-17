-- CreateTable
CREATE TABLE "Customer" (
    "id" INTEGER NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "firstname" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "username" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Item" (
    "serial" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "tags" TEXT[],
    "stock" INTEGER NOT NULL,
    "price" DOUBLE PRECISION NOT NULL
);

-- CreateTable
CREATE TABLE "Admin" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "username" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Customer_email_key" ON "Customer"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Customer_username_key" ON "Customer"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Item_serial_key" ON "Item"("serial");

-- CreateIndex
CREATE UNIQUE INDEX "Admin_id_key" ON "Admin"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Admin_email_key" ON "Admin"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Admin_username_key" ON "Admin"("username");
