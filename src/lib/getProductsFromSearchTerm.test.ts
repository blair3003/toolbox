import getProductsFromSearchTerm from './getProductsFromSearchTerm'

const singleSearchTerm = "kitchen"
const multipleSearchTerms = "kitchen drill"
const nonMatchingSearchTerm = "unknown"
const lessthan3CharSearchTerm = "ki"
const multipleLessthan3CharSearchTerms = "ki dr"

describe('getProductsFromSearchTerm', () => {

	it('should return the correct products from a single search term', async () => {
	    const result = await getProductsFromSearchTerm(singleSearchTerm)
	    expect(result).toEqual([
	        {
	            "id": "1",
	            "title": "Toothbrush",
	            "slug": "toothbrush",
	            "category": [
	                "kitchen"
	            ]
	        },
	        {
	            "id": "2",
	            "title": "Coffee",
	            "slug": "coffee",
	            "category": [
	                "kitchen"
	            ]
	        }
	    ])
	})

	it('should return the correct products from multiple search terms', async () => {
	    const result = await getProductsFromSearchTerm(multipleSearchTerms)
	    expect(result).toEqual([
		    {
		        "id": "1",
		        "title": "Toothbrush",
		        "slug": "toothbrush",
		        "category": [
		            "kitchen"
		        ]
		    },
		    {
		        "id": "2",
		        "title": "Coffee",
		        "slug": "coffee",
		        "category": [
		            "kitchen"
		        ]
		    },
		    {
		        "id": "3",
		        "title": "Electric Drill",
		        "slug": "electric-drill",
		        "category": [
		            "power-tools"
		        ]
		    }
		])
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