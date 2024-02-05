import getProduct from './getProduct'

describe('getProduct', () => {

    it('should return the correct product from a given ID', async () => {
        const result = await getProduct('1')
        expect(result).toEqual({
            "id": "1",
            "title": "DeWalt DCD778M2T-SFGB 18V 2 x 4.0Ah Li-Ion XR Brushless Cordless Combi Drill",
            "description": "Ergonomic combi drill with 18V brushless motor and XR technology. Features 13mm metal chuck, spindle lock, soft grip handle and LED light for workplace illumination. Suitable for consistent screwdriving into a variety of materials with different screw sizes. Supplied with TSTAK compatible carry case and 2 x 4.0Ah batteries with battery life indicators.",
            "price": 19999,
            "discount": 0,
            "slug": "dewalt-dcd778m2t-sfgb-18v-2-x-4-0ah-li-ion-xr-brushless-cordless-combi-drill",
            "categories": [{
                "id": "1",
                "title": "Tools",
                "slug": "tools" 
            }],
            "image": "http://localhost:3000/img/1.jpg"
        })
    })

    it('should return null for a non-existent ID', async () => {
        const result = await getProduct('999')
        expect(result).toBeNull()
    })
})