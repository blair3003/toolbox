import getProductsFromSearchTerm from '@/lib/getProductsFromSearchTerm'

interface SearchResultsProps {
    searchTerm: string
}

const SearchResults = async ({ searchTerm }: SearchResultsProps) => {

    const products = await getProductsFromSearchTerm(searchTerm)

    return (
        <div>
            <div>Search term: {searchTerm}</div>
            {products?.map(product =>
                <div key={product.id}>
                    <p>productId: {product.id}</p>
                    <p>productTitle: {product.title}</p>
                </div>
            )}
        </div>
    )
}

export default SearchResults