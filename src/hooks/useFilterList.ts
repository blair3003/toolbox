import { useMemo } from 'react'
import formatPrice from '@/lib/util/formatPrice'

const useFilterList = (productList: Product[]) => {

	const categories = useMemo(() => {
		const categoriesMap = new Map<string, Category>()
		productList.forEach(product => {
			product.categories?.forEach(category => {
				if (!categoriesMap.has(category.id)) {
					categoriesMap.set(category.id, category)
				}
			})
		})
		return Array.from(categoriesMap.values()) as Category[]
	}, [productList])

	const priceRanges = useMemo(() => {		
		if (productList.length < 2) return []
		const priceList = productList.map(product => product.price).sort((a,b) => a - b)
		const midPrice = priceList[Math.floor(priceList.length / 2)]
		const midPriceRounded = Math.ceil(midPrice / 100) * 100
		return [
			{
				label: `Price Range: $0 - ${formatPrice(midPriceRounded)}`,
				low: 0,
				high: midPriceRounded
			},
			{
				label: `Price Range: More than ${formatPrice(midPriceRounded)}`,
				low: midPriceRounded,
				high: Infinity
			}
		]
	}, [productList])

	return { categories, priceRanges }
}

export default useFilterList