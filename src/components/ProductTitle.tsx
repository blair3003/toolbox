'use client'

import { useThemeContext } from '@/context/ThemeProvider'

interface ProductTitleProps {
    title: string
}

const ProductTitle = ({ title }: ProductTitleProps) => {

    const { isDarkMode } = useThemeContext()

    return (        
        <div className={`${isDarkMode ? "text-white" : "text-black"}`}>
            <span className="sr-only">Title: </span>
            <span className="text-xs lg:text-base font-bold">{title}</span>
        </div>
    )
}

export default ProductTitle