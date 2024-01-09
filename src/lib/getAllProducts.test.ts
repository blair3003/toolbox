import { enableFetchMocks } from 'jest-fetch-mock'
import getAllProducts from './getAllProducts'

const mockProducts = [
    {
        "id": "1",
        "title": "Toothbrush",
        "slug": "toothbrush" 
    },
    {
        "id": "2",
        "title": "Coffee",
        "slug": "coffee"
    }
]

enableFetchMocks()

describe('getAllProducts', () => {

    it('should return an array of products', async () => {
        (fetch as any).mockResponseOnce(JSON.stringify(mockProducts))
        const result = await getAllProducts()
        expect(result).toEqual(mockProducts)
    })

    it('should log errors to the console', async () => {
        (fetch as any).mockRejectOnce(new Error('Fetch error'))
        const consoleError = jest.spyOn(console, 'error').mockImplementation()
        const result = await getAllProducts()
        expect(result).toBeUndefined()
        expect(consoleError).toHaveBeenCalledWith(new Error('Fetch error'))
        consoleError.mockRestore()
    })

})