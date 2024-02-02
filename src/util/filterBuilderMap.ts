import { formatPrice } from '@/lib/formatPrice';

const filterBuilderMap = new Map<string, (options: any) => {
    getKey: string
    getFilter: (product: Product) => boolean
}>([
    ['category', ({ category: { title, slug } }: { category: Category }) => ({
        getKey: `Category: ${title}`,
        getFilter: (product: Product) => product.categories?.some(category => category.slug === slug) ?? false
    })],
    ['priceRange', ({ low, high }: { low: number; high: number }) => ({
        getKey: `Price Range: ${high === Infinity ? `More than ${formatPrice(low)}` : `${formatPrice(low)} - ${formatPrice(high)}`}`,
        getFilter: (product: Product) => product.price > low && product.price < high
    })]
])

export default filterBuilderMap