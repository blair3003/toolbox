import Image from 'next/image'

interface ProductImageProps {
    src?: string
    alt: string
}

const ProductImage = ({ src, alt }: ProductImageProps) => {

    return (
        <div className="aspect-square overflow-hidden rounded-lg shadow-2xl">
            <Image
                src={src ?? '/img/default.jpg'}
                alt={alt}
                height={1080}
                width={1080}
                sizes="(max-width: 1024px) 100vw, 67vw"
                className="object-cover"
                priority
                placeholder="blur"
            />
        </div>
    )
}

export default ProductImage
