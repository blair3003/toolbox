import { useMemo } from 'react'

const useFilterList = (productList: Product[]) => {

	const categories = useMemo(() => {
		const categoriesMap = new Map<string, Category>()
		productList.forEach(product => {
			product.categories.forEach(category => {
				if (!categoriesMap.has(category.id)) {
					categoriesMap.set(category.id, category)
				}
			})
		})
		return Array.from(categoriesMap.values()) as Category[]
	}, [productList])

	return { categories }
}

export default useFilterList