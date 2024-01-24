import { formatPrice } from './formatPrice'

describe('formatPrice', () => {

    it('should return a correctly formatted string in dollars from a value in cents', async () => {
        const dollars = formatPrice(1234)
        expect(dollars).toBe("$12.34")
    })

    it('should return a string with zero dollars for a value of 0 cents', async () => {
        const dollars = formatPrice(0)
        expect(dollars).toBe("$0")
    })

})