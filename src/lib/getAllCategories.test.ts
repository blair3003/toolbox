import { enableFetchMocks } from 'jest-fetch-mock'
import getAllCategories from './getAllCategories'

const mockCategories = [
    {
        "id": "1",
        "title": "Kitchen",
        "slug": "kitchen" 
    },
    {
        "id": "2",
        "title": "Power Tools",
        "slug": "power-tools"
    }
]

enableFetchMocks()

describe('getAllCategories', () => {

    it('should return an array of categories', async () => {
        (fetch as any).mockResponseOnce(JSON.stringify(mockCategories))
        const result = await getAllCategories()
        expect(result).toEqual(mockCategories)
    })

    it('should log errors to the console', async () => {
        (fetch as any).mockRejectOnce(new Error('Fetch error'))
        const consoleError = jest.spyOn(console, 'error').mockImplementation()
        const result = await getAllCategories()
        expect(result).toBeUndefined()
        expect(consoleError).toHaveBeenCalledWith(new Error('Fetch error'))
        consoleError.mockRestore()
    })

})