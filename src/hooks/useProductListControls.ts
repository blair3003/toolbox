import { useEffect, useState } from 'react'
import filterMap from '@/util/filterMap'

const useProductListControls = (products: Product[]) => {

    const [filters, setFilters] = useState(new Map())
    
    const addFilter = (filter: string, options: any) => {
        const filterFunction = filterMap.get(filter)
		if (!filterFunction) return
		const { getKey, getFilter } = filterFunction(options)
		if (!getKey || !getFilter) return
		setFilters(prevFilters => new Map(prevFilters).set(getKey, getFilter))
	}
    
    const initList = [...products]
    const productList: Product[] = [...filters.values()].reduce((list: Product[], filter: (product: Product) => boolean) => list.filter(filter), initList)

    return { productList, addFilter }
}

export default useProductListControls