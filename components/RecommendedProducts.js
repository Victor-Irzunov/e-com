import { RECOMMENDED_PRODUCTS } from "@/lib/const/products";
import ProductCardCompact from "./ProductCardCompact";

function RecommendedProducts() {
  return (
    <div className="xz:mt-24 sd:mt-36 mb-6">
      <h3 className="mb-4 text-xl font-medium">Рекомендованные товары</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {RECOMMENDED_PRODUCTS.map((product, idx) => (
          <ProductCardCompact key={idx} product={product} />
        ))}
      </div>
    </div>
  );
}

export default RecommendedProducts;
