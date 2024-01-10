"use client"

import { useEffect, useState } from 'react'

const MOBILE_BREAKPOINT = 1024

const useIsMobile = () => {
	
	const [isMobile, setIsMobile] = useState(false)

	useEffect(() => {

		const handleResize = () => {
			if (isMobile && window.innerWidth >= MOBILE_BREAKPOINT) setIsMobile(false)
			if (!isMobile && window.innerWidth < MOBILE_BREAKPOINT) setIsMobile(true)
		}

		window.addEventListener('resize', handleResize)
		handleResize()

		return () => window.removeEventListener('resize', handleResize)

	}, [isMobile])

	return [isMobile]
}

export default useIsMobile