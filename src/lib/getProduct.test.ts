import getProduct from './getProduct'

describe('getProduct', () => {

    it('should return the correct product from a given ID', async () => {
        const result = await getProduct('1')
        expect(result).toEqual({
            "id": "1",
            "title": "Toothbrush",
            "slug": "toothbrush",
            "category": [
                "kitchen"
            ]
        })
    })

    it('should return null for a non-existent ID', async () => {
        const result = await getProduct('999')
        expect(result).toBeNull()
    })
})