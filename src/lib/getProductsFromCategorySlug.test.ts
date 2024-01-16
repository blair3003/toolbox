import getProductsFromCategorySlug from './getProductsFromCategorySlug'

describe('getProductsFromCategorySlug', () => {

    it('should return the correct products from a given category slug', async () => {
        const result = await getProductsFromCategorySlug('smartphones')
        expect(result).toEqual([{
            "id": "1",
            "title": "iPhone 9",
            "description": "An apple mobile which is nothing like apple",
            "price": 549,
            "stock": 94,
            "slug": "iphone-9",
            "categories": ["smartphones"],
            "image": "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg"
        },
        {
            "id": "2",
            "title": "iPhone X",
            "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
            "price": 899,
            "stock": 34,
            "slug": "iphone-x",
            "categories": ["smartphones"],
            "image": "https://cdn.dummyjson.com/product-images/2/thumbnail.jpg"
        },
        {
            "id": "3",
            "title": "Samsung Universe 9",
            "description": "Samsung's new variant which goes beyond Galaxy to the Universe",
            "price": 1249,
            "stock": 36,
            "slug": "samsung-universe-9",
            "categories": ["smartphones"],
            "image": "https://cdn.dummyjson.com/product-images/3/thumbnail.jpg"
        },
        {
            "id": "4",
            "title": "OPPOF19",
            "description": "OPPO F19 is officially announced on April 2021.",
            "price": 280,
            "stock": 123,
            "slug": "oppof19",
            "categories": ["smartphones"],
            "image": "https://cdn.dummyjson.com/product-images/4/thumbnail.jpg"
        },
        {
            "id": "5",
            "title": "Huawei P30",
            "description": "Huawei's re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
            "price": 499,
            "stock": 32,
            "slug": "huawei-p30",
            "categories": ["smartphones"],
            "image": "https://cdn.dummyjson.com/product-images/5/thumbnail.jpg"
        }])
    })

    it('should return an empty array for a non-existent slug', async () => {
        const result = await getProductsFromCategorySlug('unknown')
        expect(result).toEqual([])
    })
})