type Product = {
    id: string
    title: string
    description?: string
    slug?: string
    category?: string[]
    price: number
}

type Cart = {
    items: {
        product: Product
        quantity: number
    }[]
}

type Category = {
    id: string
    title: string
    slug: string
}

type Account = {
    id: string
    uid: string
    name: string
    cart: Cart
}