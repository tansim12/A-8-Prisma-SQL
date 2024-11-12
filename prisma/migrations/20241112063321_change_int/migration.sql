/*
  Warnings:

  - Changed the type of `publishedYear` on the `books` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `totalCopies` on the `books` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `availableCopies` on the `books` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "books" DROP COLUMN "publishedYear",
ADD COLUMN     "publishedYear" INTEGER NOT NULL,
DROP COLUMN "totalCopies",
ADD COLUMN     "totalCopies" INTEGER NOT NULL,
DROP COLUMN "availableCopies",
ADD COLUMN     "availableCopies" INTEGER NOT NULL;
