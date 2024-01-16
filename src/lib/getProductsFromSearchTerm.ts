import { promises as fs } from 'fs'

const getProductsFromSearchTerm = async (searchTerm: string) => {

	const searchTermArr = [...new Set(searchTerm.split(' '))]
	if (!searchTermArr.some(searchTerm => searchTerm.length > 2)) return []

	try {
        const file = await fs.readFile(process.cwd() + '/data/products.json', 'utf8')
		const products: Product[] = JSON.parse(file)

		const productsFromSearchTerm = products.filter(product =>

			searchTermArr.some(searchTerm =>

				product.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
				product.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
				product.categories?.some(category => category.toLowerCase().includes(searchTerm.toLowerCase()))
			)
		)

		return productsFromSearchTerm

	} catch (err) {
		console.error(err)
	}
}

export default getProductsFromSearchTerm