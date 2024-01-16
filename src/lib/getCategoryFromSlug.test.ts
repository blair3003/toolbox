import getCategoryFromSlug from './getCategoryFromSlug'

const slug = 'automotive'
const unknownSlug = 'unknown'

describe('getCategoryFromSlug', () => {

    it('should return the correct category from a given slug', async () => {
        const result = await getCategoryFromSlug(slug)
        expect(result).toEqual({
            "id": "1",
            "title": "Automotive",
            "slug": "automotive" 
        })
    })

    it('should return null for un unrecognized slug', async () => {
        const result = await getCategoryFromSlug(unknownSlug)
        expect(result).toBeNull()
    })

})