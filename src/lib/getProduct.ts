const getProduct = async (id: string) => {

    try {
        const response = await fetch('http://localhost:3000/data/products.json')
        const products: Product[] = await response.json()
    
        const product = products.find(product => product.id === id)
        if (!product) return null
    
        return product

    } catch (err) {
        console.error(err)
    }
}

export default getProduct