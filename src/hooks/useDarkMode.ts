import { useCallback, useEffect, useState } from 'react'

const LOCAL_STORAGE_KEY = 'darkMode'

const useDarkMode = () => {

    const [isDarkMode, setIsDarkMode] = useState(false)

    const toggleDarkMode = useCallback(() => {
        setIsDarkMode(!isDarkMode)
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(!isDarkMode))
    }, [isDarkMode, setIsDarkMode])

    useEffect(() => {
        const initDarkMode = () => {
            const stored = localStorage.getItem(LOCAL_STORAGE_KEY)
            if (stored) {
                if (stored.toLowerCase() === 'true') setIsDarkMode(true)
            } else {
                if (window.matchMedia('(prefers-color-scheme: dark)').matches) setIsDarkMode(true)
            }
        }
        initDarkMode()
    }, [])

    return { isDarkMode, toggleDarkMode }
}

export default useDarkMode