"use client"
import Breadcrumbs from "@/components/Breadcrumbs"
import ProductDetailsOverview from "@/components/ProductDetailsOverview"
import RecommendedProducts from "@/components/RecommendedProducts"


import { useEffect, useState } from "react"

export default function ProductDetails({ params: { product, id } }) {
    const [productData, setProductData] = useState(null)

    async function fetchProduct() {
        const data = await fetch(`https://dummyjson.com/products/${id}`).then((res) => res.json())
        // console.log(data)
        setProductData(data)
    }

    useEffect(() => {
        fetchProduct()
    }, [])

    return (
        <div className='container mx-auto'>
            <Breadcrumbs />
            <div className='mt-6 mb-8 pl-3'>
                <h1 className='text-4xl'>
                    {productData?.title}
                </h1>
            </div>
            {productData ? (
                <>
                    <ProductDetailsOverview product={productData} />
                    <RecommendedProducts />
                </>
            ) : (
                <div className="p-12 flex min-h-[22rem]">
                    <span className="m-auto loading loading-ring loading-lg"></span>
                </div>
            )}
        </div>
    )
}
