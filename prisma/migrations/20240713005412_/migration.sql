/*
  Warnings:

  - The `schedule` column on the `teacher` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "teacher" DROP COLUMN "schedule",
ADD COLUMN     "schedule" TEXT[];
