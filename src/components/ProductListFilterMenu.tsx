'use client'

import useMenu from '@/hooks/useMenu'
import ProductListFilterList from './ProductListFilterList'
import ProductListFilterListToggle from './ProductListFilterListToggle'

interface ProductListFilterMenuProps {
	productList: Product[]
	addFilter: (filter: string, options: any) => void
}

const ProductListFilterMenu = ({ productList, addFilter }: ProductListFilterMenuProps) => {

	const { isOpen, close, toggle, ref } = useMenu()

	return (
		<div className="relative" ref={ref as React.MutableRefObject<HTMLDivElement>}>
			<ProductListFilterListToggle toggle={toggle} />
			<ProductListFilterList isOpen={isOpen} close={close} productList={productList} addFilter={addFilter} />
		</div>
	)
}

export default ProductListFilterMenu