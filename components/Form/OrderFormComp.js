import { forwardRef } from "react"
import FormOrder from "./FormOrder"


const OrderFormComp = forwardRef((props, ref) => {
	return (
		<div ref={ref} className="rounded-lg border border-gray-300 p-4 bg-white flex flex-col gap-3 mb-20">
			<FormOrder />
		</div>
	)
})

export default OrderFormComp