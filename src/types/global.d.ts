type Product = {
    id: string
    title: string
    description?: string
    slug?: string
    categories?: Category[]
    image?: string
    price: number
}

type Cart = {
    [item: string]: {
        product: Product
        quantity: number
    }
}

type Category = {
    id: string
    title: string
    description?: string
    slug: string
}

type Account = {
    id: string
    uid: string
    name: string
    cart: Cart
}