-- CreateTable
CREATE TABLE "Music" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "occasion" TEXT NOT NULL,
    "requirement" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'new',

    CONSTRAINT "Music_pkey" PRIMARY KEY ("id")
);
