import { useMemo, useState } from 'react'

const useProductListPagination = (productList: Product[]) => {

    const [page, setPage] = useState(1)
    const [productsPerPage, setProductsPerPage] = useState(2)

    const pageCount = useMemo(() => Math.ceil(productList.length / productsPerPage), [productList, productsPerPage])

    const paginatedProducts = [...productList] // TODO

    const changePage = (no: number) => {
        setPage(no)
    }

    const nextPage = () => {
        setPage(currPage => currPage < pageCount ? currPage + 1 : pageCount)
    }

    const prevPage = () => {
        setPage(currPage => currPage > 1 ? currPage - 1 : 1)
    }

    return { paginatedProducts, page, pageCount, changePage, nextPage, prevPage }
}

export default useProductListPagination