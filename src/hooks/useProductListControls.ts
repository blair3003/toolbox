import { useCallback, useState } from 'react'
import filterBuilderMap from '@/util/filterBuilderMap'

const useProductListControls = (products: Product[]) => {

    const [filterMap, setFilters] = useState<FilterMap>(new Map())
    
    const addFilter = useCallback((filter: string, options: any) => {
        const filterFunction = filterBuilderMap.get(filter)
		if (!filterFunction) return
		const { getKey, getFilter } = filterFunction(options)
		if (!getKey || !getFilter) return
		setFilters(prevFilters => new Map(prevFilters).set(getKey, getFilter))
	}, [filterBuilderMap, setFilters])

    const removeFilter = useCallback((filter: string) => {
        if (!filterMap.has(filter)) return
        setFilters(prevFilters => {
            const map = new Map(prevFilters)
            map.delete(filter)
            return map
        })
    }, [filterMap, setFilters])
    
    const initList = [...products]
    const productList: Product[] = [...filterMap.values()].reduce((list: Product[], filter: (product: Product) => boolean) => list.filter(filter), initList)
    const filters = Array.from(filterMap.keys())

    return { productList, filters, addFilter, removeFilter }
}

export default useProductListControls