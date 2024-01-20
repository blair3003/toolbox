'use client'

import { useThemeContext } from '@/context/ThemeProvider'

interface ProductTitleProps {
    title: string
    styles?: string
}

const ProductTitle = ({ title, styles = '' }: ProductTitleProps) => {

    const { isDarkMode } = useThemeContext()

    return (        
        <div className={`${styles} ${isDarkMode ? "text-white" : "text-black"}`}>
            <span className="sr-only">Title: </span>
            <span className="text-xs lg:text-base font-bold">{title}</span>
        </div>
    )
}

export default ProductTitle