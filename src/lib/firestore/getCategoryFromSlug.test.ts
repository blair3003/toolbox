import getCategoryFromSlug from './getCategoryFromSlug'

const slug = 'tools'
const unknownSlug = 'unknown'

describe('getCategoryFromSlug', () => {

    it('should return the correct category from a given slug', async () => {
        const result = await getCategoryFromSlug(slug)
        expect(result).toEqual({
            "id": "1",
            "title": "Tools",
            "slug": "tools",
            "description": "Tools are vital to all commercial trades and domestic users undertaking projects at home. Without a good tool shop it would be difficult to complete both simple and more complex construction or home improvements. Anyone serious about manual labour would need the basic tools for trade and can progressively invest in additional equipment and accessories as jobs require it."
        })
    })

    it('should return null for un unrecognized slug', async () => {
        const result = await getCategoryFromSlug(unknownSlug)
        expect(result).toBeNull()
    })

})