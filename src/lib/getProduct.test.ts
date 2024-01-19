import getProduct from './getProduct'

describe('getProduct', () => {

    it('should return the correct product from a given ID', async () => {
        const result = await getProduct('1')
        expect(result).toEqual({
            "id": "1",
            "title": "iPhone 9",
            "description": "An apple mobile which is nothing like apple",
            "price": 549,
            "stock": 94,
            "slug": "iphone-9",
            "categories": [{
                "id": "12",
                "title": "Smartphones",
                "slug": "smartphones" 
            }],
            "image": "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg"
        })
    })

    it('should return null for a non-existent ID', async () => {
        const result = await getProduct('999')
        expect(result).toBeNull()
    })
})