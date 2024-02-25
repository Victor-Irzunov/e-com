import ImgProductDetails from "./ImgProductDetails"

function ProductDetailsOverview({ product }) {

    return (
        <div>
            <ImgProductDetails product={product} />
            <div className="bg-white p-6 pt-4 rounded-lg border border-gray-300 gap-6 mt-6">
                <h2 className="mb-8 text-lg">Specifications</h2>
                <div className="flow-root">
                    <dl className="-my-3 divide-y divide-gray-100">
                        <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                            <dt className="font-medium text-gray-900">Primary Camera Available</dt>
                            <dd className="text-gray-700 sm:col-span-2">Yes</dd>
                        </div>
                        <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                            <dt className="font-medium text-gray-900">Primary Camera</dt>
                            <dd className="text-gray-700 sm:col-span-2">12MP + 12MP</dd>
                        </div>
                        <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                            <dt className="font-medium text-gray-900">Secondary Camera Available</dt>
                            <dd className="text-gray-700 sm:col-span-2">Yes</dd>
                        </div>
                        <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                            <dt className="font-medium text-gray-900">Secondary Camera</dt>
                            <dd className="text-gray-700 sm:col-span-2">8MP Front Camera</dd>
                        </div>
                        <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                            <dt className="font-medium text-gray-900">Secondary Camera Features</dt>
                            <dd className="text-gray-700 sm:col-span-2">
                                F2.4, Fixed Focus, Photo Maximum: 3264 x 2448, Video: 1080p, 30 fps
                            </dd>
                        </div>
                        <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                            <dt className="font-medium text-gray-900">Primary Camera Features</dt>
                            <dd className="text-gray-700 sm:col-span-2">
                                Co-Engineered with Leica, Light Painting (Tail Light Trails, Light Graffiti, Silky
                            </dd>
                        </div>
                    </dl>
                </div>
            </div>
        </div>
    )
}

export default ProductDetailsOverview
