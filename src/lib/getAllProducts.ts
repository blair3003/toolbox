const getAllProducts = async () => {

    try {
        const result = await fetch('http://localhost:3000/data/products.json')
        const products: Product[] = await result.json()
    
        return products

    } catch (err) {
        console.error(err)
        return []
    }
}

export default getAllProducts