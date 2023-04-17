/*
  Warnings:

  - You are about to drop the column `id` on the `Admin` table. All the data in the column will be lost.
  - You are about to alter the column `email` on the `Admin` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(35)`.
  - You are about to alter the column `name` on the `Admin` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(35)`.
  - You are about to alter the column `username` on the `Admin` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(20)`.
  - You are about to alter the column `password` on the `Customer` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(65)`.
  - You are about to alter the column `firstname` on the `Customer` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(25)`.
  - You are about to alter the column `lastname` on the `Customer` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(25)`.
  - You are about to alter the column `address` on the `Customer` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(35)`.

*/
-- DropIndex
DROP INDEX "Admin_id_key";

-- AlterTable
ALTER TABLE "Admin" DROP COLUMN "id",
ALTER COLUMN "email" SET DATA TYPE VARCHAR(35),
ALTER COLUMN "name" SET DATA TYPE VARCHAR(35),
ALTER COLUMN "username" SET DATA TYPE VARCHAR(20);

-- AlterTable
ALTER TABLE "Customer" ALTER COLUMN "password" SET DATA TYPE VARCHAR(65),
ALTER COLUMN "firstname" SET DATA TYPE VARCHAR(25),
ALTER COLUMN "lastname" SET DATA TYPE VARCHAR(25),
ALTER COLUMN "address" SET DATA TYPE VARCHAR(35);
