import React from "react";
import { RECOMMENDED_PRODUCTS } from "@/lib/const/products";

function TrendingProducts() {
  return (
    <div className="my-6 border border-gray-300 bg-white rounded-lg flex flex-col overflow-hidden sm:flex-row">
      <div
        className="p-3 sm:pr-12 sm:w-[18rem] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/offer-bg-2.png')" }}
      >
        <h3 className="text-xl font-medium mb-4">Casual, Formal & Trending Clothes</h3>
        <button className="btn btn-sm btn-secondary capitalize">Купить сейчас</button>
      </div>
      <div className="flex-1">
        <div className="grid grid-cols-1 sm:grid-cols-4">
          {RECOMMENDED_PRODUCTS.slice(0, 4).map((product) => (
            <div key={product.id} className="relative min-h-[8rem] p-4 xz:border-b xz:border-b-gray-300 sd:border-l sd:border-l-gray-300">
              <h2 className="pb-1">{product.name}</h2>
              <span className="text-gray-400 font-normal">
                From <br /> {product.price}
              </span>
              <img src={product.image} className="absolute w-[5rem] right-1 bottom-1" alt={product.name} />
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-4">
          {RECOMMENDED_PRODUCTS.slice(4, 8).map((product) => (
            <div key={product.id} className="relative min-h-[8rem] p-4 sd:border-l xz:border-l-0 xz:border-t sd:border-t-0 border-gray-300">
              <h2 className="pb-1">{product.name}</h2>
              <span className="text-gray-400 font-normal">
                From <br /> {product.price}
              </span>
              <img src={product.image} className="absolute w-[5rem] right-1 bottom-1" alt={product.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TrendingProducts;
