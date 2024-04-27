/*
  Warnings:

  - A unique constraint covering the columns `[num]` on the table `Num` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `num` to the `Num` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Num_id_key";

-- AlterTable
ALTER TABLE "Num" ADD COLUMN     "num" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Num_num_key" ON "Num"("num");
