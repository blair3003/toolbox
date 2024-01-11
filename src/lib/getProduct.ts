import { promises as fs } from 'fs'

const getProduct = async (id: string) => {

    try {
        const file = await fs.readFile(process.cwd() + '/data/products.json', 'utf8')
		const products: Product[] = JSON.parse(file)
    
        const product = products.find(product => product.id === id)
    
        return product ?? null

    } catch (err) {
        console.error(err)
    }
}

export default getProduct