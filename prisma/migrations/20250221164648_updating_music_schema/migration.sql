/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `Music` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `email` to the `Music` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Music" ADD COLUMN     "email" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Music_email_key" ON "Music"("email");
