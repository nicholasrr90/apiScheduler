/*
  Warnings:

  - You are about to drop the `Schedule` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `schedule` to the `Teacher` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Schedule" DROP CONSTRAINT "Schedule_teacherId_fkey";

-- AlterTable
ALTER TABLE "Teacher" ADD COLUMN     "schedule" TEXT NOT NULL;

-- DropTable
DROP TABLE "Schedule";

-- DropEnum
DROP TYPE "DayOfWeek";
