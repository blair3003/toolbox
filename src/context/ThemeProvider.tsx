'use client'

import useDarkMode from '@/hooks/useDarkMode'
import { createContext, useContext } from 'react'

interface ThemeContextType {
    isDarkMode: boolean
    toggleDarkMode: () => void
}

const ThemeContext = createContext({})

export const useThemeContext = () => useContext(ThemeContext) as ThemeContextType

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    
    const theme: ThemeContextType = useDarkMode()

    return (
        <ThemeContext.Provider value={theme}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider