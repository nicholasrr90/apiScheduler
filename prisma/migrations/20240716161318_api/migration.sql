-- CreateTable
CREATE TABLE "teacher" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "schedule" BOOLEAN[],

    CONSTRAINT "teacher_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "student" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "student_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "lessons" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "lessons_pkey" PRIMARY KEY ("id")
);
