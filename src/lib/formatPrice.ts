export const formatPrice = (cents: number) => {
	let dollars = (cents / 100).toFixed(2)
	if (dollars.endsWith('.00')) {
		dollars = dollars.substring(0, dollars.length - 3)
	}
	return `$${dollars}`
}