import getProductsFromSearchTerm from './getProductsFromSearchTerm'

const singleSearchTerm = "samsung"
const multipleSearchTerms = "samsung tree"
const nonMatchingSearchTerm = "unknown"
const lessthan3CharSearchTerm = "ki"
const multipleLessthan3CharSearchTerms = "ki dr"

describe('getProductsFromSearchTerm', () => {

	it('should return the correct products from a single search term', async () => {
	    const result = await getProductsFromSearchTerm(singleSearchTerm)
	    expect(result).toEqual([{
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
			"id": "7",
			"title": "Samsung Galaxy Book",
			"description": "Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched",
			"price": 1499,
			"stock": 50,
			"slug": "samsung-galaxy-book",
			"categories": ["laptops"],
			"image": "https://cdn.dummyjson.com/product-images/7/thumbnail.jpg"
		}])
	})

	it('should return the correct products from multiple search terms', async () => {
	    const result = await getProductsFromSearchTerm(multipleSearchTerms)
	    expect(result).toEqual([{
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
			"id": "7",
			"title": "Samsung Galaxy Book",
			"description": "Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched",
			"price": 1499,
			"stock": 50,
			"slug": "samsung-galaxy-book",
			"categories": ["laptops"],
			"image": "https://cdn.dummyjson.com/product-images/7/thumbnail.jpg"
		},
		{
			"id": "17",
			"title": "Tree Oil 30ml",
			"description": "Tea tree oil contains a number of compounds, including terpinen-4-ol, that have been shown to kill certain bacteria,",
			"price": 12,
			"stock": 78,
			"slug": "tree-oil-30ml",
			"categories": ["skincare"],
			"image": "https://cdn.dummyjson.com/product-images/17/thumbnail.jpg"
		}])
	})

	it('should return an empty array for non-matching search term', async () => {
	    const result = await getProductsFromSearchTerm(nonMatchingSearchTerm)
	    expect(result).toEqual([])
	})

	it('should return an empty array for a search term with less than 3 characters', async () => {
	    const result = await getProductsFromSearchTerm(lessthan3CharSearchTerm)
	    expect(result).toEqual([])
	})

	it('should return an empty array for multiple search terms with all less than 3 characters', async () => {
	    const result = await getProductsFromSearchTerm(multipleLessthan3CharSearchTerms)
	    expect(result).toEqual([])
	})

})