const sortMap = new Map<string, { label: string; compareFn: (a: Product, b: Product) => number }>([
    ['sortAsc', {
        label: "A - Z",
        compareFn: (a: Product, b: Product) => (a.title.toUpperCase() < b.title.toUpperCase()) ? -1 : (a.title.toUpperCase() > b.title.toUpperCase()) ? 1 : 0
    }],
    ['sortDesc', {
        label: "Z - A",
        compareFn: (a: Product, b: Product) => (a.title.toUpperCase() > b.title.toUpperCase()) ? -1 : (a.title.toUpperCase() < b.title.toUpperCase()) ? 1 : 0
    }],
    ['sortPriceAsc', {
        label: "Lowest price first",
        compareFn: (a: Product, b: Product) => (a.price - b.price)
    }],
    ['sortPriceDesc', {
        label: "Highest price first",
        compareFn: (a: Product, b: Product) => (b.price - a.price)
    }]
])

export default sortMap