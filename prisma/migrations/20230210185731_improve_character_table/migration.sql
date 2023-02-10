/*
  Warnings:

  - Added the required column `name` to the `Character` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "vocationTypes" AS ENUM ('DEPRIVED', 'WARRIOR', 'MAGE', 'CLERIC', 'NINJA', 'ARCHER');

-- AlterTable
ALTER TABLE "Character" ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "vocation" "vocationTypes" NOT NULL DEFAULT 'DEPRIVED';
