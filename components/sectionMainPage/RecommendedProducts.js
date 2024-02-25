import React from "react";
import { RECOMMENDED_PRODUCTS } from "@/lib/const/products";
import ProductCardCompact from "../ProductCardCompact";

function RecommendedProducts() {
  return (
    <div className="my-6">
      <h3 className="mb-4 text-xl font-medium">Recommended Products</h3>
      <div className="grid grid-cols-1 xz:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {RECOMMENDED_PRODUCTS.map((product, idx) => (
          <ProductCardCompact key={idx} product={product} />
        ))}
      </div>
    </div>
  );
}

export default RecommendedProducts;
