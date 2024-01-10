import { promises as fs } from 'fs'

const getAllProducts = async () => {

    try {
        const file = await fs.readFile(process.cwd() + '/data/products.json', 'utf8')
		const products: Product[] = JSON.parse(file)
    
        return products

    } catch (err) {
        console.error(err)
    }
}

export default getAllProducts