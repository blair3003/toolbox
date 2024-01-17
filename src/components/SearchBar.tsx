'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { HiMagnifyingGlass } from 'react-icons/hi2'
import useIsMobile from '@/hooks/useIsMobile'
import { useThemeContext } from '@/context/ThemeProvider'

const SearchBar = () => {

    const [searchTerm, setSearchTerm] = useState('')
    const router = useRouter()
    const [isMobile] = useIsMobile()
    const { isDarkMode } = useThemeContext()

    const sanitizeSearchTerm = (searchTerm: string) => {
        const sanitizedSearchTerm = searchTerm
            .trim()
            .replace(/[;<>&'"`]/g, '')
            .slice(0, 255)
        return sanitizedSearchTerm
    }

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault()
        const params = new URLSearchParams()
        params.set('q', sanitizeSearchTerm(searchTerm))
        router.push(`/search?${params.toString()}`)
        setSearchTerm('')
    }

    return (
        <form onSubmit={handleSearch} className={`flex items-center gap-1 lg:gap-2 h-7 lg:h-14 w-full p-0.5 lg:p-1 rounded-full ${isDarkMode ? "bg-stone-700" : "bg-white"}`}>
            <div className="grow px-0.5 lg:px-1">
                <label htmlFor="search" className="sr-only">Search for something</label>
                <input
                    id="search"
                    type="text"
                    placeholder={`${isMobile ? 'Search' : 'Search for something'}`}
                    required
                    style={{ colorScheme: isDarkMode ? 'dark' : 'normal' }}                 
                    className={`w-full pb-0.5 pt-1 lg:py-2 px-2 lg:px-4 text-xs lg:text-sm font-light leading-3 lg:leading-7 placeholder:text-stone-400 rounded-full bg-transparent ${isDarkMode ? "text-white" : "text-black"}`}
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                />
            </div>
            <button
                title="Search for something"
                className="h-6 w-6 lg:h-12 lg:w-12 shrink-0 grid place-content-center text-sm lg:text-3xl text-white bg-orange-600 hover:bg-orange-700 focus:bg-orange-700 rounded-full shadow"
            >
                <span className="sr-only">Search</span>
                <HiMagnifyingGlass />
            </button>
        </form>
    )

}

export default SearchBar