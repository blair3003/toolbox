import { enableFetchMocks } from 'jest-fetch-mock'
import getProductsFromCategorySlug from './getProductsFromCategorySlug'

const mockProducts = [
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
]

enableFetchMocks()

describe('getProductsFromCategorySlug', () => {

    it('should return the correct products from a given category slug', async () => {
        (fetch as any).mockResponseOnce(JSON.stringify(mockProducts))
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
        (fetch as any).mockResponseOnce(JSON.stringify(mockProducts))
        const result = await getProductsFromCategorySlug('unknown')
        expect(result).toEqual([])
    })

    it('should log errors to the console', async () => {
        (fetch as any).mockRejectOnce(new Error('Fetch error'))
        const consoleError = jest.spyOn(console, 'error').mockImplementation(() => {})
        const result = await getProductsFromCategorySlug('kitchen')
        expect(result).toBeUndefined()
        expect(consoleError).toHaveBeenCalledWith(new Error('Fetch error'))
        consoleError.mockRestore()
    })
})