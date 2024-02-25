"use client"
import Breadcrumbs from "@/components/Breadcrumbs";
import UserCart from "@/components/UserCart";
import { useEffect, useState } from "react";

export default function Cart() {
	const [data, setData] = useState(null);

	useEffect(() => {
		if (typeof window !== "undefined") {
			fetchProducts();
		}
	}, []);

	const fetchProducts = async () => {
		try {
		  const cartData = JSON.parse(localStorage.getItem("cart")) || [];
		  const promises = cartData.map(async (item) => {
			 const response = await fetch(`https://dummyjson.com/products/${item.id}`);
			 const productData = await response.json();
			 return { ...productData, quantity: item.quantity }; // Include quantity from local storage
		  });
  
		  const productsData = await Promise.all(promises);
		  console.log(productsData);
  
		  if (productsData.length > 0) {
			 setData(productsData);
		  }
		} catch (error) {
		  console.error("Error fetching products:", error);
		}
	 };
  

	return (
		<div className="container mx-auto">
			<Breadcrumbs />
			{
				data ?
				<UserCart data={data} setData={setData} />
					:
					<div className="hero min-h-screen" style={{ backgroundImage: `url("/images/korzina.webp")` }}>
						<div className=""></div>
						<div className="hero-content text-center text-neutral-content">
							<div className="max-w-md text-white bg-black/50 px-5 py-4 rounded-md">
								<h1 className="mb-5 text-5xl font-bold uppercase">Пусто</h1>
								<p className="mb-5">
									Пока в вашей корзине нет товаров
								</p>
							</div>
						</div>
					</div>
			}

		</div>
	);
}

