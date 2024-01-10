import getAllProducts from './getAllProducts'

describe('getAllProducts', () => {

    it('should return an array of products', async () => {
        const result = await getAllProducts()
        expect(result).toEqual([
            {
                "id": "1",
                "title": "Toothbrush",
                "slug": "toothbrush",
                "category": [
                    "kitchen"
                ]
            },
            {
                "id": "2",
                "title": "Coffee",
                "slug": "coffee",
                "category": [
                    "kitchen"
                ]
            },
            {
                "id": "3",
                "title": "Electric Drill",
                "slug": "electric-drill",
                "category": [
                    "power-tools"
                ]
            }
        ])
    })

})