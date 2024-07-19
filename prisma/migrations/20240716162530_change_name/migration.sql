/*
  Warnings:

  - You are about to drop the `lessons` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "lessons";

-- CreateTable
CREATE TABLE "classModule" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "classModule_pkey" PRIMARY KEY ("id")
);
