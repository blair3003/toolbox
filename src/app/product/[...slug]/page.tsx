import { notFound } from 'next/navigation'
import ProductDetails from './components/ProductDetails'
import getProduct from '@/lib/getProduct'
import getAllProducts from '@/lib/getAllProducts'

export async function generateStaticParams() {
    const products = await getAllProducts()
    return (products) ? products.map(product => ({ slug: [product.id, product.slug]})) : []
}

export default async function Product({ params }: { params: { slug: string[] } }) {

    const [productId] = params.slug

    const product = await getProduct(productId)
    if (!product) notFound()

    return (
        <ProductDetails product={product} />
    )
}