import Image from 'next/image'

interface ProductImageProps {
    src: string
    alt: string
}

const ProductImage = ({ src, alt }: ProductImageProps) => {

    return (
        <div className="relative aspect-[5/4] overflow-hidden rounded-lg shadow-2xl">
            <Image
                src={src}
                alt={alt}
                fill={true}
                sizes="(max-width: 1024px) 100vw, 67vw"
                className="object-cover"
            />
        </div>
    )
}

export default ProductImage