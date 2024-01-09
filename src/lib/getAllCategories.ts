const getAllCategories = async () => {
	
	try {
		const response = await fetch('http://localhost:3000/data/categories.json')
		const categories: Category[] = await response.json()

		return categories

	} catch (err) {
		console.error(err)
	}
}

export default getAllCategories