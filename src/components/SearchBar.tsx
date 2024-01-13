'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { CiSearch } from 'react-icons/ci'
import useIsMobile from '@/hooks/useIsMobile'

const SearchBar = () => {

    const [searchTerm, setSearchTerm] = useState('')
    const router = useRouter()
    const [isMobile] = useIsMobile()

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
        <form onSubmit={handleSearch} className="flex items-center gap-1 lg:gap-2 h-7 lg:h-14 w-full p-0.5 lg:p-1 bg-white rounded-full">
            <div className="grow px-0.5 lg:px-1">
                <label htmlFor="search" className="sr-only">Search for something</label>
                <input
                    id="search"
                    type="text"
                    placeholder={`${isMobile ? 'Search' : 'Search for something'}`}
                    required                    
                    className="w-full py-1 lg:py-2 px-2 lg:px-4 text-stone-400 text-xs lg:text-lg font-light rounded-full bg-transparent"
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                />
            </div>
            <button
                title="Search for something"
                className="h-6 w-6 lg:h-12 lg:w-12 shrink-0 grid place-content-center text-sm lg:text-3xl text-white bg-orange-600 hover:bg-orange-700 focus:bg-orange-700 rounded-full shadow"
            >
                <span className="sr-only">Search</span>
                <CiSearch />
            </button>
        </form>
    )

}

export default SearchBar