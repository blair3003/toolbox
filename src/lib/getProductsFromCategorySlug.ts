import { promises as fs } from 'fs'

const getProductsFromCategorySlug = async (slug: string) => {

    try {
        const file = await fs.readFile(process.cwd() + '/data/products.json', 'utf8')
		const products: Product[] = JSON.parse(file)

        const productsFromCategorySlug = products.filter(product => product.categories?.some(category => category.slug === slug))

        return productsFromCategorySlug

    } catch (err) {
        console.error(err)
    }
}

export default getProductsFromCategorySlug