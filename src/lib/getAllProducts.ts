const getAllProducts = async () => {

    try {
        const response = await fetch('http://localhost:3000/data/products.json')
        const products: Product[] = await response.json()
    
        return products

    } catch (err) {
        console.error(err)
    }
}

export default getAllProducts