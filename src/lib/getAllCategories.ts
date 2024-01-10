import { promises as fs } from 'fs'

const getAllCategories = async () => {
	
	try {
		const file = await fs.readFile(process.cwd() + '/data/categories.json', 'utf8')
		const categories: Category[] = JSON.parse(file)

		return categories

	} catch (err) {
		console.error(err)
	}
}

export default getAllCategories