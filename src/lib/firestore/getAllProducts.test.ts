import getAllProducts from '../firestore/getAllProducts'

describe('getAllProducts', () => {

    it('should return an array of products', async () => {
        const result = await getAllProducts()
        expect(result).toHaveLength(100)
    })

})