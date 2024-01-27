interface ProductListPagination {
    page: number
    pageCount: number
    changePage: (no: number) => void
    nextPage: () => void
    prevPage: () => void
}

const ProductListPagination = ({ page, pageCount, changePage, nextPage, prevPage }: ProductListPagination) => {

    return (
        <div className="bg-purple-800">
        {/* Pagination */} 
            <p>Page: {page} of {pageCount}</p>   
            <button onClick={prevPage} className="bg-green-800 py-1 px-2 rounded-full">Prev page</button>
            {[...Array(pageCount)].map((_, index) => 
                <button key={index} onClick={() => changePage(index + 1)} className="bg-green-800 py-1 px-2 rounded-full">Page {index + 1}</button>
            )}
            <button onClick={nextPage} className="bg-green-800 py-1 px-2 rounded-full">Next page</button>
        
        </div>
    )
}

export default ProductListPagination