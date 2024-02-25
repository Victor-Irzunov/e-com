import React from "react";
import { TRENDING_CATEGORIES } from "@/lib/const/products";
import ProductCategoryCard from "../ProductCategoryCard";

function TrendingCategoriesMain() {
  return (
    <div className="my-6">
      <div className="flex flex-col gap-4 sm:flex-row">
        {TRENDING_CATEGORIES.slice(0, 2).map((data) => (
          <ProductCategoryCard key={data.key} data={data} size="xl" />
        ))}
      </div>
    </div>
  );
}

export default TrendingCategoriesMain;
