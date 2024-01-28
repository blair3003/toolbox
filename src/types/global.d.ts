type Product = {
    id: string
    title: string
    price: number
    slug: string
    image: string
    description?: string
    categories?: Category[]
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
    favorites: Product[]
    cart: Cart
}
