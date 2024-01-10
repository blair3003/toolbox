import getProductsFromCategorySlug from './getProductsFromCategorySlug'

describe('getProductsFromCategorySlug', () => {

    it('should return the correct products from a given category slug', async () => {
        const result = await getProductsFromCategorySlug('kitchen')
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
            }
        ])
    })

    it('should return an empty array for a non-existent slug', async () => {
        const result = await getProductsFromCategorySlug('unknown')
        expect(result).toEqual([])
    })
})