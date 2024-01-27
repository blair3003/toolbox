import { HiArrowLongLeft, HiArrowLongRight, HiEllipsisHorizontal } from 'react-icons/hi2'
import PaginationButton from './PaginationButton'

interface ProductListPagination {
    page: number
    pageCount: number
    pageBlock: number
    changePage: (no: number) => void
    nextBlock: () => void
    nextPage: () => void
    prevPage: () => void
}

const ProductListPagination = ({ page, pageCount, pageBlock, changePage, nextBlock, nextPage, prevPage }: ProductListPagination) => {

    return (
        <div className="p-2 lg:p-4 flex items-center flex-nowrap gap-1 lg:gap-2">
        {/* Pagination */}
            {page > 1 ? <PaginationButton label="Previous page" onClick={prevPage}>
                <span className="sr-only">Previous page</span>
                <HiArrowLongLeft />
            </PaginationButton> : null}
            {page !== 1 ? <PaginationButton label="Page 1" onClick={() => changePage(1)}>1</PaginationButton> : null}
            {page === 3 ? <PaginationButton label="Page 2" onClick={() => changePage(2)}>2</PaginationButton> : null}
            {page > pageBlock ? <div className="w-8 h-8 py-1 px-2 grid place-content-center"><HiEllipsisHorizontal /></div> : null}
            {[...Array(pageCount)].map((_, index) => 
                (index + 1 >= page && index + 1 < page + pageBlock) ? <PaginationButton key={index} label={`Page ${index + 1}`} current={page === index + 1} onClick={() => changePage(index + 1)}>{index + 1}</PaginationButton> : null
            )}
            {page + pageBlock <= pageCount ? <PaginationButton label="Next block" onClick={nextBlock}>
                <span className="sr-only">Next block</span>
                <HiEllipsisHorizontal />
            </PaginationButton> : null}
            {page < pageCount ? <PaginationButton label="Next page" onClick={nextPage}>
                <span className="sr-only">Next page</span>
                <HiArrowLongRight />
            </PaginationButton> : null}
        
        </div>
    )
}

export default ProductListPagination