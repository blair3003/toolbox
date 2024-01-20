const filterBuilderMap = new Map<string, (options: any) => {
    getKey: string
    getFilter: (product: Product) => boolean
}>([
    ['category', ({ category: { title, slug } }: CategoryFilter) => ({
        getKey: `Category: ${title}`,
        getFilter: (product: Product) => product.categories.some(category => category.slug === slug) ?? false
    })],
    ['priceRange', ({ low, high }: PriceRangeFilter) => ({
        getKey: `Price Range: ${low} - ${high}`,
        getFilter: (product: Product) => product.price > low && product.price < high
    })]
])

export default filterBuilderMap