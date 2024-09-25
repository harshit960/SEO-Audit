/*
  Warnings:

  - A unique constraint covering the columns `[country]` on the table `PlanPricing` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name,country]` on the table `PlanPricing` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "PlanPricing_country_key" ON "PlanPricing"("country");

-- CreateIndex
CREATE UNIQUE INDEX "PlanPricing_name_country_key" ON "PlanPricing"("name", "country");
