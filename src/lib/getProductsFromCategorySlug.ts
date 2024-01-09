const getProductsFromCategorySlug = async (slug: string) => {

    try {
        const response = await fetch('http://localhost:3000/data/products.json')
        const products: Product[] = await response.json()

        const productsFromCategorySlug = products.filter(product => product.category.includes(slug))

        return productsFromCategorySlug

    } catch (err) {
        console.error(err)
    }
}

export default getProductsFromCategorySlug