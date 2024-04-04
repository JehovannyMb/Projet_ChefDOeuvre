-- CreateTable
CREATE TABLE "Num" (
    "id" INTEGER NOT NULL,

    CONSTRAINT "Num_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Num_id_key" ON "Num"("id");
