import { formatPrice } from './formatPrice'

describe('formatPrice', () => {

    it('should return a correctly formatted string in dollars from a value in cents', async () => {
        const dollars = formatPrice(1234)
        expect(dollars).toBe("$12.34")
    })

    it('should return a string with zero dollars and cents for a value of 0 cents', async () => {
        const dollars = formatPrice(0)
        expect(dollars).toBe("$0.00")
    })

    it('should return a string with a comma for a value of over a thousand dollars', async () => {
        const dollars = formatPrice(100000)
        expect(dollars).toBe("$1,000.00")
    })

})