import { useCallback, useEffect, useState } from 'react'

const LOCAL_STORAGE_KEY = 'toolbox-dark-mode'

const useDarkMode = () => {

    const [isDarkMode, setIsDarkMode] = useState(true)

    const toggleDarkMode = useCallback(() => {
        setIsDarkMode(!isDarkMode)
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(!isDarkMode))
    }, [isDarkMode, setIsDarkMode])

    useEffect(() => {
        const initDarkMode = () => {
            const stored = localStorage.getItem(LOCAL_STORAGE_KEY)
            if (stored) {
                if (stored.toLowerCase() === 'false') setIsDarkMode(false)
            } else {
                if (window.matchMedia('(prefers-color-scheme: light)').matches) setIsDarkMode(false)
            }
        }
        initDarkMode()
    }, [])

    return { isDarkMode, toggleDarkMode }
}

export default useDarkMode