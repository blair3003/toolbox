'use client'

import useMenu from '@/hooks/useMenu'
import ProductListFilterList from './ProductListFilterList'
import ProductListFilterListToggle from './ProductListFilterListToggle'

interface ProductListFilterMenuProps {
	productList: Product[]
	addFilter: (filter: string, options: any) => void
}

const ProductListFilterMenu = ({ productList, addFilter }: ProductListFilterMenuProps) => {

	const { isOpen, toggle, ref } = useMenu()

	return (
		<div className="relative">
			<ProductListFilterListToggle toggle={toggle} toggleRef={ref} />
			<ProductListFilterList isOpen={isOpen} productList={productList} addFilter={addFilter} />
		</div>
	)
}

export default ProductListFilterMenu