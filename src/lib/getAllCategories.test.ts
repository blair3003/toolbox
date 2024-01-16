import getAllCategories from './getAllCategories'

describe('getAllCategories', () => {

    it('should return an array of categories', async () => {
        const result = await getAllCategories()
        expect(result).toHaveLength(19)
    })

})