'use client'

import { useThemeContext } from '@/context/ThemeProvider'

interface ProductDescriptionProps {
    description?: string
}

const ProductDescription = ({ description }: ProductDescriptionProps) => {

    const { isDarkMode } = useThemeContext()

    return (        
        <div className={`${isDarkMode ? "text-white" : "text-black"}`}>
            <span className="sr-only">Description: </span>
            <span className="text-xs lg:text-base">{description}</span>
        </div>
    )
}

export default ProductDescription