import React from "react";
import { QUICK_OFFERS } from "@/lib/const/products";
import CountdownTimer from "../CountdownTimer";
import ProductCardWithDiscount from "../ProductCardWithDiscount";

function QuickDeals() {
  return (
    <div className="my-6 border border-gray-300 bg-white rounded-lg overflow-hidden flex sd:flex-row xz:flex-col">
      <div
        className="p-3 min-h-[14rem] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/offer-bg.png')" }}
      >
        <h3 className="text-xl font-medium">Deals and offers</h3>
        <p className="leading-tight text-gray-400 font-normal">Hygiene equipments</p>
        <div className="pt-6">
          <CountdownTimer />
        </div>
      </div>
      <div className="flex-1 flex sd:flex-row xz:flex-col items-center sd:divide-x xz:divide-y divide-gray-300">
        {QUICK_OFFERS.map((product) => (
          <ProductCardWithDiscount key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default QuickDeals;
