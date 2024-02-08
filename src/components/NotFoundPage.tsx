'use client'

import Link from 'next/link'
import { useThemeContext } from '@/context/ThemeProvider'
import { bigShoulders } from '@/fonts/bigShoulders'

const NotFoundPage = () => {

    const { isDarkMode } = useThemeContext()

    return (
        <div className={`min-h-screen ${isDarkMode ? "text-white bg-dark-gradient" : "text-black bg-white" }`}>
            <div className="lg:max-w-screen-xl lg:mx-auto">
                <section className="p-2 lg:p-4">
                    <header className="p-2 lg:p-4 mb-2 lg:mb-4 text-left lg:text-center">
                        <h1 className={`text-xl lg:text-3xl uppercase text-orange-600 ${bigShoulders.className}`}>Not Found</h1>
                        <p>Could not find requested resource</p>
                        <Link href="/" className="underline">Return Home</Link>
                    </header>
                </section>
            </div>
        </div>
    )
}

export default NotFoundPage