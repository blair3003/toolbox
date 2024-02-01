export const formatPrice = (cents: number, includeZeroCents?: boolean) => {
	if (cents === 0) return `$0`

	let dollars = (cents / 100).toFixed(2)
	
	if (!includeZeroCents && dollars.endsWith('.00')) {
		dollars = dollars.substring(0, dollars.length - 3)
	}

	return `$${dollars}`
}