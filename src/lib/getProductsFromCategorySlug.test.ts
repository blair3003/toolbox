import getProductsFromCategorySlug from './getProductsFromCategorySlug'

describe('getProductsFromCategorySlug', () => {

    it('should return the correct products from a given category slug', async () => {
        const result = await getProductsFromCategorySlug('heating-plumbing')
        expect(result).toEqual([{
            "id": "11",
            "title": "Flomasta Type 22 Double-Panel Double Convector Radiator 600mm x 1200mm White 6998BTU",
            "description": "Traffic white paint finish (RAL 9016).",
            "price": 7099,
            "discount": 0,
            "slug": "flomasta-type-22-double-panel-double-convector-radiator-600mm-x-1200mm-white-6998btu",
            "categories": [{
                "id": "2",
                "title": "Heating & Plumbing",
                "slug": "heating-plumbing" 
            }],
            "image": "http://localhost:3000/img/11.jpg"
        },
        {
            "id": "12",
            "title": "Danfoss RAS-C² White Angled Thermostatic TRV & Lockshield 15mm x 1/2\"",
            "description": "Offers frost protection. Positive shut-off.",
            "price": 2499,
            "discount": 0,
            "slug": "danfoss-ras-c-white-angled-thermostatic-trv-lockshield-15mm-x-1-2-",
            "categories": [{
                "id": "2",
                "title": "Heating & Plumbing",
                "slug": "heating-plumbing" 
            }],
            "image": "http://localhost:3000/img/12.jpg"
        },
        {
            "id": "13",
            "title": "Google Nest 3rd Gen Pro Wireless Heating & Hot Water Smart Thermostat",
            "description": "Smart thermostat with energy-saving Auto-Schedule and TruRadiant technology, learns about the home and user temperature preferences to create a schedule, using energy only when needed to help save money. Features Home/Away assist which provides automatic adjustment to temperature and hot water if the home is empty.",
            "price": 18899,
            "discount": 0,
            "slug": "google-nest-3rd-gen-pro-wireless-heating-hot-water-smart-thermostat",
            "categories": [{
                "id": "2",
                "title": "Heating & Plumbing",
                "slug": "heating-plumbing" 
            }],
            "image": "http://localhost:3000/img/13.jpg"
        },
        {
            "id": "14",
            "title": "Klima 825502 Intelligent Control Digital Electric Underfloor Heating Thermostat",
            "description": "Advanced, self-learning, digital clock thermostat with floor sensor. For programming electrical underfloor heating. Compatible with Klima electrical underfloor heating products.",
            "price": 7999,
            "discount": 0,
            "slug": "klima-825502-intelligent-control-digital-electric-underfloor-heating-thermostat",
            "categories": [{
                "id": "2",
                "title": "Heating & Plumbing",
                "slug": "heating-plumbing" 
            }],
            "image": "http://localhost:3000/img/14.jpg"
        },
        {
            "id": "15",
            "title": "Flomasta Twistloc Plastic Push-Fit Equal 90° Elbow 15mm 10 Pack",
            "description": "One-step, fully demountable and reusable. Combining push-fit and twist-locking technology to offer a secure, leak-free joint which incorporates pressure and combination systems. Suitable for plumbing, local / home hot water supply and central heating systems. Highly visible green band disappears when properly connected. Works with different piping materials such as copper, PB and PEX pipe, making it easy to combine different types of pipe for repairs or new installations.",
            "price": 1140,
            "discount": 0,
            "slug": "flomasta-twistloc-plastic-push-fit-equal-90-elbow-15mm-10-pack",
            "categories": [{
                "id": "2",
                "title": "Heating & Plumbing",
                "slug": "heating-plumbing" 
            }],
            "image": "http://localhost:3000/img/15.jpg"
        },
        {
            "id": "16",
            "title": "Wednesbury Copper Pipe 15mm x 3m",
            "description": "Table X. Half hard.",
            "price": 998,
            "discount": 0,
            "slug": "wednesbury-copper-pipe-15mm-x-3m",
            "categories": [{
                "id": "2",
                "title": "Heating & Plumbing",
                "slug": "heating-plumbing" 
            }],
            "image": "http://localhost:3000/img/16.jpg"
        },
        {
            "id": "17",
            "title": "FloPlast Half Round Gutter Black 112mm x 3m",
            "description": "High quality black uPVC system that is practical and easy to install.",
            "price": 729,
            "discount": 0,
            "slug": "floplast-half-round-gutter-black-112mm-x-3m",
            "categories": [{
                "id": "2",
                "title": "Heating & Plumbing",
                "slug": "heating-plumbing" 
            }],
            "image": "http://localhost:3000/img/17.jpg"
        },
        {
            "id": "18",
            "title": "FloPlast Push-Fit Plain-End Underground Drainage Pipe 110mm x 3m",
            "description": "Plain-ended. Silicone lubricant should be applied to the seals on any fittings and the pipe to help facilitate the joint.",
            "price": 1348,
            "discount": 0,
            "slug": "floplast-push-fit-plain-end-underground-drainage-pipe-110mm-x-3m",
            "categories": [{
                "id": "2",
                "title": "Heating & Plumbing",
                "slug": "heating-plumbing" 
            }],
            "image": "http://localhost:3000/img/18.jpg"
        },
        {
            "id": "19",
            "title": "Blyss WDH-316DB 16Ltr Dehumidifier",
            "description": "Ideal for removing excess moisture and controlling damp and condensation. Features automatic shut down, carry handle, LED display and reusable air filter. Suitable for rooms from 30 to 35m³.",
            "price": 16999,
            "discount": 0,
            "slug": "blyss-wdh-316db-16ltr-dehumidifier",
            "categories": [{
                "id": "2",
                "title": "Heating & Plumbing",
                "slug": "heating-plumbing" 
            }],
            "image": "http://localhost:3000/img/19.jpg"
        },
        {
            "id": "20",
            "title": "Freestanding 9-Fin Oil-Filled Radiator 2000W",
            "description": "Oil-filled radiator with wheels for easy movement. Features 3 heat settings, adjustable thermostat and tip-over safety switch. Suitable for domestic and office environments.",
            "price": 3499,
            "discount": 0,
            "slug": "freestanding-9-fin-oil-filled-radiator-2000w",
            "categories": [{
                "id": "2",
                "title": "Heating & Plumbing",
                "slug": "heating-plumbing" 
            }],
            "image": "http://localhost:3000/img/20.jpg"
        }])
    })

    it('should return an empty array for a non-existent slug', async () => {
        const result = await getProductsFromCategorySlug('unknown')
        expect(result).toEqual([])
    })
})