import getAllCategories from './getAllCategories'

describe('getAllCategories', () => {

    it('should return an array of categories', async () => {
        const result = await getAllCategories()
        expect(result).toEqual([
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
        ])
    })

})