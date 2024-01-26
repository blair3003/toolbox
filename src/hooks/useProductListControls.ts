import { useCallback, useMemo, useState } from 'react'
import filterBuilderMap from '@/util/filterBuilderMap'
import sortMap from '@/util/sortMap'

const useProductListControls = (products: Product[]) => {

    const [sort, setSort] = useState('')
    const [filterMap, setFilters] = useState(new Map<string, (product: Product) => boolean>())
    
    const addFilter = useCallback((filter: string, options: any) => {
        const filterFunction = filterBuilderMap.get(filter)
		if (!filterFunction) return
		const { getKey, getFilter } = filterFunction(options)
		if (!getKey || !getFilter) return
		setFilters(prevFilters => new Map(prevFilters).set(getKey, getFilter))
	}, [setFilters])

    const removeFilter = useCallback((filter: string) => {
        if (!filterMap.has(filter)) return
        setFilters(prevFilters => {
            const map = new Map(prevFilters)
            map.delete(filter)
            return map
        })
    }, [filterMap, setFilters])

    const clearSort = useCallback(() => setSort(''), [setSort])

    const selectSort = useCallback((key: string) => {
        if (sortMap.has(key)) {
            setSort(key)
        }
    }, [setSort])
    
    const sorts = useMemo(() => [...sortMap].map(([key, { label }]) => ({ key, label })), [])
    const filters = useMemo(() => [...filterMap.keys()], [filterMap])

    const initList: Product[] = useMemo(() => [...products], [products])
    const filteredList: Product[] = useMemo(() => [...filterMap.values()].reduce((list: Product[], filter: (product: Product) => boolean) => list.filter(filter), initList), [filterMap, initList])
    const productList: Product[] = useMemo(() => sort ? [...filteredList].sort(sortMap.get(sort)?.compareFn) : filteredList, [sort, filteredList])

    return { productList, filters, addFilter, removeFilter, sort, sorts, selectSort, clearSort }
}

export default useProductListControls