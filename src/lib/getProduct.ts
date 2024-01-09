const getProduct = async (id: string) => {

    try {
        const result = await fetch('http://localhost:3000/data/products.json')
        const products: Product[] = await result.json()
    
        const product = products.find(product => product.id === id)
        if (!product) return null
    
        return product

    } catch (err) {
        console.error(err)
    }
}

export default getProduct