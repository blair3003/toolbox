import { useCallback, useEffect, useRef, useState } from 'react'

const useMenu = () => {

	const [isOpen, setIsOpen] = useState(false)
	const ref = useRef<HTMLElement | null>(null)

	const open = () => setIsOpen(true)
	const close = () => setIsOpen(false)
	const toggle = () => setIsOpen(isOpen => !isOpen)

	const closeOnOutsideClick = useCallback((e: MouseEvent) => {
		if (ref.current && !ref.current.contains(e.target as Node)) {
			close()
		}
	}, [])

	const closeOnEscapeKey = useCallback((e: KeyboardEvent) => {
		if (e.key === 'Escape') {
			close()
		}
	}, [])

	useEffect(() => {
		document.addEventListener('click', closeOnOutsideClick)
		document.addEventListener('keydown', closeOnEscapeKey)

		return () => {
			document.removeEventListener('click', closeOnOutsideClick)
			document.removeEventListener('keydown', closeOnEscapeKey)			
		}		
	}, [closeOnOutsideClick, closeOnEscapeKey])

	return { isOpen, open, close, toggle, ref }
	
}

export default useMenu