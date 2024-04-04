import { $authHost, $host } from "./index"


export const searchProduct = async ({searchTerm}) => {
	const { data } = await $host.get('api/product/search', {
		params: {
			searchTerm
		}
	});
	return data
}

