'use client'

import { useThemeContext } from '@/context/ThemeProvider'
import { formatPrice } from '@/lib/formatPrice'

interface ProductPriceProps {
    price: number
}

const ProductPrice = ({ price }: ProductPriceProps) => {

    const { isDarkMode } = useThemeContext()

    return (        
        <div className={`${isDarkMode ? "text-white" : "text-black"}`}>
            <span className="sr-only">Price: </span>
            <span className="text-xl lg:text-3xl">{formatPrice(price)}</span>
        </div>
    )
}

export default ProductPrice