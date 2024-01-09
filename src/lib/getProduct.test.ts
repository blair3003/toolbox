import { enableFetchMocks } from 'jest-fetch-mock'
import getProduct from './getProduct'

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

describe('getProduct', () => {

    it('should return the correct product from a given ID', async () => {
        (fetch as any).mockResponseOnce(JSON.stringify(mockProducts))
        const result = await getProduct('1')
        expect(result).toEqual({
            id: '1',
            title: 'Toothbrush',
            slug: 'toothbrush',
        })
    })

    it('should return null for a non-existent ID', async () => {
        (fetch as any).mockResponseOnce(JSON.stringify(mockProducts))
        const result = await getProduct('3')
        expect(result).toBeNull()
    })

    it('should log errors to the console', async () => {
        (fetch as any).mockRejectOnce(new Error('Fetch error'))
        const consoleError = jest.spyOn(console, 'error').mockImplementation(() => {})
        const result = await getProduct('1')
        expect(result).toBeUndefined()
        expect(consoleError).toHaveBeenCalledWith(new Error('Fetch error'))
        consoleError.mockRestore()
    })
})