'use client'

import { HiMiniMoon, HiMiniSun } from 'react-icons/hi2'
import { useThemeContext } from '@/context/ThemeProvider'

const DarkModeToggle = () => {

    const { isDarkMode, toggleDarkMode } = useThemeContext()

    return (
        <button
            onClick={toggleDarkMode}
            type="button"
            title="Toggle Dark Mode"
            className={`block w-full px-4 py-2 text-nowrap text-black hover:bg-stone-200 focus:bg-stone-200 ${isDarkMode ? 'text-white hover:bg-stone-700 focus:bg-stone-700' : ''}`}
        >
            <div className="flex items-center gap-2">
                <div className="h-8 w-8 text-2xl grid place-content-center">
                    {isDarkMode ? <HiMiniSun /> : <HiMiniMoon />}
                </div>						
                <span className="">{isDarkMode ? 'Switch to Light' : 'Switch to Dark'}</span>
            </div>
            
            
        </button>
    )


}

export default DarkModeToggle