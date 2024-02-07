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
        <form onSubmit={handleSearch} className={`w-full h-8 lg:h-12 p-1 flex items-center gap-1 rounded-full ${isDarkMode ? "bg-stone-700" : "bg-white"}`}>
            <div className="grow px-0.5 lg:px-1">
                <label htmlFor="search" className="sr-only">Search for something</label>
                <input
                    id="search"
                    type="text"
                    placeholder={`${isMobile ? 'Search' : 'Search for something'}`}
                    required
                    style={{ colorScheme: isDarkMode ? 'dark' : 'normal' }}                 
                    className={`w-full px-2 lg:px-4 text-xs lg:text-sm leading-8 lg:leading-10 font-light rounded-full bg-transparent placeholder:text-stone-400 ${isDarkMode ? "text-white" : "text-black"}`}
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                />
            </div>
            <button
                title="Search for something"
                className="h-6 w-6 lg:h-10 lg:w-10 shrink-0 grid place-content-center text-sm lg:text-3xl text-white bg-orange-600 hover:bg-orange-700 focus:bg-orange-700 rounded-full shadow"
            >
                <span className="sr-only">Search</span>
                <HiMagnifyingGlass />
            </button>
        </form>
    )

}

export default SearchBar