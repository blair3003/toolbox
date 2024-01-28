import { useEffect, useMemo, useState } from 'react'

const useProductListPagination = (productList: Product[]) => {

    const [page, setPage] = useState(1)
    const [productsPerPage, setProductsPerPage] = useState(8)
    const pageBlock = 3 

    useEffect(() => setPage(1), [productList])

    const pageCount = useMemo(() => Math.ceil(productList.length / productsPerPage), [productList, productsPerPage])

    const paginatedProducts = useMemo(() => (
        productList.reduce((paginated, product, index) => {
            const page = Math.floor(index / productsPerPage) + 1
            paginated.set(page, [...(paginated.get(page) || []), product])
            return paginated
        }, new Map())
    ), [productsPerPage, productList])

    const changePage = (pageNo: number) => {
        setPage(Math.min(Math.max(pageNo, 1), pageCount))
    }

    const nextBlock = () => {
        setPage(currPage => Math.min(Math.max(currPage + pageBlock, 1), pageCount))
    }

    const nextPage = () => {
        setPage(currPage => currPage < pageCount ? currPage + 1 : pageCount)
    }

    const prevPage = () => {
        setPage(currPage => currPage > 1 ? currPage - 1 : 1)
    }

    return { paginatedProducts, page, pageBlock, pageCount, changePage, nextBlock, nextPage, prevPage }
}

export default useProductListPagination