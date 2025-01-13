import { defineStore } from "pinia"
import { orderBy } from "lodash"

export const useProductStore = defineStore('product', {
    getters: {
    },
    actions: {
        getProductsByBrand(brandname){
            return this.products.filter((product) => product.group === brandname)
        },
        getProductsByCategory(categoryId){
            return this.products.filter((product) => product.categoryId === categoryId)
        },
        sortProductsByAscPrice(productsArray){
            return orderBy(productsArray, ['price'], ['asc'])
        },
        sortProductsByDescPrice(productsArray){
            return orderBy(productsArray, ['price'], ['desc'])
        },
        sortProductsByPopularity(productsArray){
            return orderBy(productsArray, ['countSold'], ['desc'])
        },
        sortProductsByRating(productsArray){
            return orderBy(productsArray, ['rating'], ['desc'])
        },
        sortProductsByAlpabetAZ(productsArray){
            return orderBy(productsArray, ['name'], ['asc'])
        },
        sortProductsByAlpabetZA(productsArray){
            return orderBy(productsArray, ['name'], ['desc'])
        },
        getProductImgs(){
            for(let product of this.products){
                let imageArray = product.image.split(',')
                product.image = imageArray
            }
            console.log("Img Array Retrieved!")
        }


    },
    state(){
        return{
            products: [],
            categories: [],
            previews: [
                {
                    id : 1,
                    description: "Melt-In Moisture Cleansing Balm: A cleanser packed with powerful greens and rich Avocado Oil to melt away all impurities and refresh the skin. Its unique formula effectively cleanses without irritation, delivering a dose of hydration, leaving behind only a balanced, satisfied, and glowing skin. Indulge in the Moment: Rich and buttery, this balm turns cleansing from a routine to a ritual. The smooth and lush texture quickly melts into the skin, easily emulsifying to dissolve impurities without irritation. Gentle on Skin: Using only the gentlest ingredients, the PURITO From Green Avocado Cleansing Balm can be used without the fear of dryness or irritation Nourish with Nature: Formulated with Kale Leaf, Spinach Leaf, Broccoli, Mugwort Leaf, and Cabbage Leaf extracts, the balm is made to soothe the skin and boost its elasticity to reveal a soft and supple, radiant complexion.",
                    ingredients: 'Avocado Oil, Green Flora Complex and Watermelon Seed & Baobab Seed Oil Blend work together to gently dissolve makeup, dirt, sunscreen and other impurities.',
                    usage: '',
                    reviews: [
                        {
                            profile: 'https://d2gwgwt9a7yxle.cloudfront.net/what_is_user_id_in_net_banking_mobile_871b681e52.jpg',
                            name: 'Pov Pov',
                            date: 'November 6, 2024 8:26 PM',
                            comment: "I use this in the morning and at night and for the price it's great! Doesn't have a strong smell and keeps my skin hydrated all day. My skin tone seems more even and my skin isn't greasy after using it. I will counting to buy this as long as it's available!",
                            rating: 4,
                        },
                        {
                            profile: 'https://cdn.gobankingrates.com/wp-content/uploads/2024/02/a-happy-woman-checks-her-phone-iStock-1494296241.jpg?w=675&quality=75&webp=1',
                            name: 'Kim Jenny',
                            date: 'October 31, 2024 1:52 AM',
                            comment: "I was influenced to try this after watching a couple of YouTube dermatologists. I like the packaging--it's very satisfying to see that I have used up the entire product. It feels nice going on and there's no fragrance. I would say it's moisturizing, but I don't think it's amazing. For $20.00, (which is fairly expensive for a this in the morning and at night and for the price it's great! Doesn't have a strong smell and keeps my skin hydrated all day. My skin tone seems more even and my skin isn't greasy after using it. I will counting to buy this as long as it's available!",
                            rating: 3,
                        },
                        {
                            profile: 'https://cdn.gobankingrates.com/wp-content/uploads/2024/01/a-woman-smiles-at-work-while-look-at-her-phone-iStock-1460124878.jpg?w=675&quality=75&webp=1',
                            name: 'Li Emma',
                            date: 'October 30, 2024 1:50 AM',
                            comment: "You only need one squirt! It has light coverage, and my skin reacted well to it. I am on automatic delivery, which should indicate it's a good product.",
                            rating: 1,
                        },
            
                    ],
                },
                {
                    id : 2,
                    description: "A moisturizer-like sunscreen offers SPF50+ PA++++ sun protection with a non-sticky texture, made for sensitive skin. Korean Centella Asiatica offers skin soothing, Brown Algae Extract offers anti-pollution, and Hyaluronic Acid maintains hydration.A fast-absorbing, weightless formula that leaves the skin moisturized and dewy without any greasy residue. Crafted to shield the skin from urban stressors, it effectively blocks harmful UV rays while creating a barrier against pollutants like fine dust. SPF/PA Clinical Study Results for sun protector factor and strong urban defense with the fine dust adhesion prevention test and two skin irritation tests completed. Ultralight, moisturizer-like daily sunscreen with a non-sticky texture that leaves the skin moisturized and dewy, without any greasy residue. Thriving in Korea's four seasons, Korean Centella brings stronger calming benefits. Enduring the Korean winter boosts the plant's active compounds, making its soothing effect even more powerful.",
                    ingredients: 'Avocado Oil, Green Flora Complex and Watermelon Seed & Baobab Seed Oil Blend work together to gently dissolve makeup, dirt, sunscreen and other impurities.',
                    usage: '1. Apply generously 15 minutes before sun exposure.\n2. Reapply every two hours or as necessary and immediately after extensive sweating.',
                    reviews: [
                        {
                            profile: '',
                            name: 'Pov Pov',
                            date: 'November 6, 2024 8:26 PM',
                            comment: "I use this in the morning and at night and for the price it's great! Doesn't have a strong smell and keeps my skin hydrated all day. My skin tone seems more even and my skin isn't greasy after using it. I will counting to buy this as long as it's available!",
                            rating: 4,
                        },
                        {
                            profile: '',
                            name: 'Kim Jenny',
                            date: 'October 31, 2024 1:52 AM',
                            comment: "I was influenced to try this after watching a couple of YouTube dermatologists. I like the packaging--it's very satisfying to see that I have used up the entire product. It feels nice going on and there's no fragrance. I would say it's moisturizing, but I don't think it's amazing. For $20.00, (which is fairly expensive for a this in the morning and at night and for the price it's great! Doesn't have a strong smell and keeps my skin hydrated all day. My skin tone seems more even and my skin isn't greasy after using it. I will counting to buy this as long as it's available!",
                            rating: 3,
                        },
                        {
                            profile: '',
                            name: 'Li Emma',
                            date: 'October 30, 2024 1:50 AM',
                            comment: "You only need one squirt! It has light coverage, and my skin reacted well to it. I am on automatic delivery, which should indicate it's a good product.",
                            rating: 1,
                        },
            
                    ],
                },
                {
                    id : 3,
                    description: "Refreshing gel cream with nourishing Avena Sativa (Oat) Seed Water instantly calms dry and sensitive skin. The lightweight clear texture softly melts on the skin, easily seeping into its layers. This gel cream improves skin's moisture level, and soothes hypersensitivity, keeping the skin balanced and vibrant. The combination of oat and panthenol provides a refreshing splash of hydration and additional nutrients while creating a protective barrier. Avena Sativa (Oat) Seed Water(77%) is a gentle ingredient that calms irritated skin. Rich in antioxidants and hydrating properties, this ingredient instantly improves the skin's moisture barrier. It is particularly suitable for sensitive skin. Squalane rapidly penetrates the skin to instantly hydrate and lock in moisture. This replenishing facial oil works to boost elasticity, nourish, soothe, and smooth out dehydration lines. Beta-Glucan is a humectant that effectively soothes and calms sensitive skin. It smoothes fine lines, providing hydrating and plumping benefits to the skin. This ingredient is also enriched with antioxidant properties to counteract environmental stressors.",
                    ingredients: '',
                    usage: '',
                    reviews: [
                        {
                            profile: '',
                            name: 'Pov Pov',
                            date: 'November 6, 2024 8:26 PM',
                            comment: "I use this in the morning and at night and for the price it's great! Doesn't have a strong smell and keeps my skin hydrated all day. My skin tone seems more even and my skin isn't greasy after using it. I will counting to buy this as long as it's available!",
                            rating: 4,
                        },
                        {
                            profile: '',
                            name: 'Kim Jenny',
                            date: 'October 31, 2024 1:52 AM',
                            comment: "I was influenced to try this after watching a couple of YouTube dermatologists. I like the packaging--it's very satisfying to see that I have used up the entire product. It feels nice going on and there's no fragrance. I would say it's moisturizing, but I don't think it's amazing. For $20.00, (which is fairly expensive for a this in the morning and at night and for the price it's great! Doesn't have a strong smell and keeps my skin hydrated all day. My skin tone seems more even and my skin isn't greasy after using it. I will counting to buy this as long as it's available!",
                            rating: 4,
                        },
                        {
                            profile: '',
                            name: 'Li Emma',
                            date: 'October 30, 2024 1:50 AM',
                            comment: "You only need one squirt! It has light coverage, and my skin reacted well to it. I am on automatic delivery, which should indicate it's a good product.",
                            rating: 4,
                        },
            
                    ],
                },
                {
                    description: '',
                    ingredients: '',
                    usage: '',
                    reviews: [
                        {
                            profile: '',
                            name: 'Pov Pov',
                            date: 'November 6, 2024 8:26 PM',
                            comment: "I use this in the morning and at night and for the price it's great! Doesn't have a strong smell and keeps my skin hydrated all day. My skin tone seems more even and my skin isn't greasy after using it. I will counting to buy this as long as it's available!",
                            rating: 4,
                        },
                        {
                            profile: '',
                            name: 'Kim Jenny',
                            date: 'October 31, 2024 1:52 AM',
                            comment: "I was influenced to try this after watching a couple of YouTube dermatologists. I like the packaging--it's very satisfying to see that I have used up the entire product. It feels nice going on and there's no fragrance. I would say it's moisturizing, but I don't think it's amazing. For $20.00, (which is fairly expensive for a this in the morning and at night and for the price it's great! Doesn't have a strong smell and keeps my skin hydrated all day. My skin tone seems more even and my skin isn't greasy after using it. I will counting to buy this as long as it's available!",
                            rating: 4,
                        },
                        {
                            profile: '',
                            name: 'Li Emma',
                            date: 'October 30, 2024 1:50 AM',
                            comment: "You only need one squirt! It has light coverage, and my skin reacted well to it. I am on automatic delivery, which should indicate it's a good product.",
                            rating: 4,
                        },
            
                    ],
                }
                
            ]
        }
    },
    
  })  