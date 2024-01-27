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
        <div className="bg-purple-800 flex items-center">
        {/* Pagination */} 
            <p>Page: {page} of {pageCount}</p>   
            {page > 1 ? <button onClick={prevPage} className="w-8 h-8 grid place-content-center bg-green-800 py-1 px-2 rounded-full">←</button> : null}
            {page !== 1 ? <button onClick={() => changePage(1)} className="w-8 h-8 grid place-content-center bg-green-800 py-1 px-2 rounded-full">1</button> : null}
            {page === 3 ? <button onClick={() => changePage(2)} className="w-8 h-8 grid place-content-center bg-green-800 py-1 px-2 rounded-full">2</button> : null}
            {page > pageBlock ? <span className="w-8 h-8 grid place-content-center py-1 px-2 rounded-full">...</span> : null}
            {[...Array(pageCount)].map((_, index) => 
                (index + 1 >= page && index + 1 < page + pageBlock) ? <button key={index} onClick={() => changePage(index + 1)} className="w-8 h-8 grid place-content-center bg-green-800 py-1 px-2 rounded-full">{index + 1}</button> : null
            )}
            {page + pageBlock <= pageCount ? <button onClick={nextBlock} className="w-8 h-8 grid place-content-center bg-green-800 py-1 px-2 rounded-full">...</button> : null}
            {page < pageCount ? <button onClick={nextPage} className="w-8 h-8 grid place-content-center bg-green-800 py-1 px-2 rounded-full">→</button> : null}
        
        </div>
    )
}

export default ProductListPagination