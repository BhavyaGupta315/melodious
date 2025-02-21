-- CreateTable
CREATE TABLE "Orders" (
    "id" SERIAL NOT NULL,
    "plan" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Orders_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Orders_email_key" ON "Orders"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Orders_phone_key" ON "Orders"("phone");
