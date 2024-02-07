import { notFound } from 'next/navigation'
import getProduct from '@/lib/firestore/getProduct'
import getAllProducts from '@/lib/firestore/getAllProducts'
import ProductPage from '@/components/ProductPage'

export async function generateStaticParams() {
    const products = await getAllProducts()
    return (products) ? products.map(product => ({ slug: [product.id, product.slug]})) : []
}

export default async function Product({ params }: { params: { slug: string[] } }) {

    const [productId] = params.slug

    const product = await getProduct(productId)
    if (!product) notFound()

    return <ProductPage product={product} />
}