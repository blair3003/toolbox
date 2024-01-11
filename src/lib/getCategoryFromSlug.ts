import { promises as fs } from 'fs'

const getCategoryFromSlug = async (slug: string) => {

    try {
		const file = await fs.readFile(process.cwd() + '/data/categories.json', 'utf8')
		const categories: Category[] = JSON.parse(file)

        const categoryFromSlug = categories.find(category => category.slug === slug)
        
        return categoryFromSlug ?? null

    } catch (err) {
        console.error(err)
    }
}

export default getCategoryFromSlug