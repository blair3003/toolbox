import getAccountFromUID from './getAccountFromUID'

describe('getAccountFromUID', () => {

    it('should return the correct account from a given UID', async () => {
        const result = await getAccountFromUID('1')
        expect(result).toEqual({
            "id": "1",
            "uid": "1",
            "name": "Blair",
            "cart": {}
        })
    })

    it('should return null for a non-existent UID', async () => {
        const result = await getAccountFromUID('999')
        expect(result).toBeNull()
    })
})