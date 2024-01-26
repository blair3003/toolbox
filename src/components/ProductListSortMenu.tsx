'use client'

import useMenu from '@/hooks/useMenu'
import ProductListSortList from './ProductListSortList'
import ProductListSortListToggle from './ProductListSortListToggle'

interface ProductListControlsProps {
	sort: string
    sorts: { key: string; label: string; }[]
    selectSort: (key: string) => void
    clearSort: () => void
}

const ProductListSortMenu = ({ sort, sorts, selectSort, clearSort }: ProductListControlsProps) => {

	const { isOpen, close, toggle, ref } = useMenu()

	return (
		<div className="relative" ref={ref as React.MutableRefObject<HTMLDivElement>}>
			<ProductListSortListToggle toggle={toggle} sortLabel={sorts.find(s => s.key === sort)?.label} />
			<ProductListSortList isOpen={isOpen} close={close} sort={sort} sorts={sorts} selectSort={selectSort} clearSort={clearSort} />
		</div>
	)
}

export default ProductListSortMenu