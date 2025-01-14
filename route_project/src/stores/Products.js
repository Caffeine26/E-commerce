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
        getProductsByBrand2(query){
            console.log('hello')
            console.log(this.products)
            return this.products.filter(product => {
                console.log(product.group)
                product.group === query
            }
              
            );
        },
        getProductsByName(query){
            return this.products.filter(product =>
                product.name === query
            );
        },
        async getProductImgs() {
            for (let product of this.products) {
                if (product.image) { // Check if product.image exists and is not null/undefined
                    let imageArray = product.image.split(',');
                    product.image = imageArray;
                } else {
                    // Handle the case where product.image is null or undefined
                    console.warn(`Product image is null or undefined for product:`, product);
                    product.image = []; // Or another appropriate default value
                }
            }
            console.log("Img Array Retrieved!");
        },
        emptyCart(){
            this.cart = []
        }
    },

    state(){
        return{
            products: [],
            categories: [
                { id: 1, name: "Toners", image: "/src/assets/img/toner.png" },
                { id: 2, name: "Hair Products", image: "/src/assets/img/hair.png" },
                { id: 3, name: "Shower", image: "/src/assets/img/Shower.png" },
                { id: 4, name: "Moisturizer", image: "/src/assets/img/moisturizer.png" },
                { id: 5, name: "Pimple Patches", image: "/src/assets/img/patch.png" },
                { id: 6, name: "Sunscreen", image: "/src/assets/img/sunscreen.png" },
                { id: 7, name: "Make Up", image: "/src/assets/img/makeup.png" },
                { id: 8, name: "Cleansers", image: "/src/assets/img/foam.png" },
                { id: 9, name: "Essence/Serum", image: "/src/assets/img/serum.png" },
                { id: 10, name: "Double Cleansing", image: "/src/assets/img/double.png" },
                { id: 11, name: "Masks", image: "/src/assets/img/mask.png" },
                { id: 12, name: "Skincare Set", image: "/src/assets/img/set.png" },
            ],
            concerns: [
                {
                    id: 1,
                    name: 'Brightening/Scar',
                    image: 'https://glistenblossom.com/_next/image?url=https%3A%2F%2Fapi.krubkrong.com%2Fcdn%2Fimage%2F201fba6a-82fd-4568-8d45-130c630eb7a8.png&w=1920&q=100'
                },
                {
                    id:2,
                    name:'Broken Skin Barrier',
                    image: 'https://glistenblossom.com/_next/image?url=https%3A%2F%2Fapi.krubkrong.com%2Fcdn%2Fimage%2F97a2ad1f-5106-4bdd-904c-8b7e9f0abc70.png&w=1920&q=100'
                },
                {
                    id:3,
                    name:'Exfoliating Products',
                    image: 'https://glistenblossom.com/_next/image?url=https%3A%2F%2Fapi.krubkrong.com%2Fcdn%2Fimage%2F9d62eb1b-c166-4853-8ece-74b23fd96deb.png&w=1920&q=100'
                },
                {
                    id:4,
                    name: 'Non-Comedogenic',
                    image:'https://glistenblossom.com/_next/image?url=https%3A%2F%2Fapi.krubkrong.com%2Fcdn%2Fimage%2Fad883c54-3a16-4263-b507-ed35d3bbd4cb.png&w=1920&q=100'
                },
                {
                    id:5,
                    name:'Acne Redness',
                    image:'https://cdn-eoehb.nitrocdn.com/cfSPvyHKEtMsvCMTjkTxfmPwxSBojDGz/assets/images/optimized/rev-edf89cc/sozoclinic.sg/wp-content/uploads/young-woman-closed-eyes-touching-1170x650.jpg'
                },
                {
                    id:6,
                    name:'Sensitive Skin',
                    image:'https://glistenblossom.com/_next/image?url=https%3A%2F%2Fapi.krubkrong.com%2Fcdn%2Fimage%2F026bdd4d-61a6-4320-ad16-091cb2429ea4.webp&w=1920&q=100'
                }
            ],
            cart: [],
            previews: [
                {
                    id : 1,
                    description: "Melt-In Moisture Cleansing Balm: A cleanser packed with powerful greens and rich Avocado Oil to melt away all impurities and refresh the skin. Its unique formula effectively cleanses without irritation, delivering a dose of hydration, leaving behind only a balanced, satisfied, and glowing skin. Indulge in the Moment: Rich and buttery, this balm turns cleansing from a routine to a ritual. The smooth and lush texture quickly melts into the skin, easily emulsifying to dissolve impurities without irritation. Gentle on Skin: Using only the gentlest ingredients, the PURITO From Green Avocado Cleansing Balm can be used without the fear of dryness or irritation Nourish with Nature: Formulated with Kale Leaf, Spinach Leaf, Broccoli, Mugwort Leaf, and Cabbage Leaf extracts, the balm is made to soothe the skin and boost its elasticity to reveal a soft and supple, radiant complexion.",
                    ingredients: 'Avocado Oil, Green Flora Complex and Watermelon Seed & Baobab Seed Oil Blend work together to gently dissolve makeup, dirt, sunscreen and other impurities.',
                    usage: 'Apply evenly to your face, body, or any other areas that need sun protection before sun exposure. Reapply every 2-3 hours, especially after sweating, swimming, or towel drying.',
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
                            rating: 2,
                        },
            
                    ],
                },
                {
                    id : 3,
                    description: "Refreshing gel cream with nourishing Avena Sativa (Oat) Seed Water instantly calms dry and sensitive skin. The lightweight clear texture softly melts on the skin, easily seeping into its layers. This gel cream improves skin's moisture level, and soothes hypersensitivity, keeping the skin balanced and vibrant. The combination of oat and panthenol provides a refreshing splash of hydration and additional nutrients while creating a protective barrier. Avena Sativa (Oat) Seed Water(77%) is a gentle ingredient that calms irritated skin. Rich in antioxidants and hydrating properties, this ingredient instantly improves the skin's moisture barrier. It is particularly suitable for sensitive skin. Squalane rapidly penetrates the skin to instantly hydrate and lock in moisture. This replenishing facial oil works to boost elasticity, nourish, soothe, and smooth out dehydration lines. Beta-Glucan is a humectant that effectively soothes and calms sensitive skin. It smoothes fine lines, providing hydrating and plumping benefits to the skin. This ingredient is also enriched with antioxidant properties to counteract environmental stressors.",
                    ingredients: 'Water, Oryza Sativa (Rice) Extract (30%), Dibutyl Adipate, Propanediol, Diethylamino Hydroxybenzoyl Hexyl Benzoate, Polymethylsilsesquioxane, Ethylhexyl Triazone, Niacinamide, Methylene Bis-benzotriazolyl Tetramethylbutylphenol, Coco-caprylate/Caprate, Caprylyl Methicone, Diethylhexyl Butamido Triazone, Glycerin, Butylene Glycol, Oryza Sativa (Rice) Germ Extract, Camellia Sinensis Leaf Extract, Lactobacillus/Pumpkin Ferment Extract, Bacillus/Soybean Ferment Extract, Saccharum Officinarum (Sugarcane) Extract, Macrocystis Pyrifera (Kelp) Extract, Cocos Nucifera (Coconut) Fruit Extract, Panax Ginseng Root Extract, Camellia Sinensis Leaf Extract, Monascus/Rice Ferment, Pentylene Glycol, Behenyl Alcohol, Poly C10-30 Alkyl Acrylate, Polyglyceryl-3 Methylglucose Distearate, Decyl Glucoside, Tromethamine, Carbomer, Acrylates/C10-30 Alkyl Acrylate Crosspolymer, 1,2-Hexanediol,Sodium Stearoyl Glutamate, Polyacrylate Crosspolymer-6',
                    usage: 'Take an appropirate amount of sunscreen and apply it onto your face and neck',
                    reviews: [
                        {
                            profile: 'https://d2gwgwt9a7yxle.cloudfront.net/what_is_user_id_in_net_banking_mobile_871b681e52.jp',
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
                            rating: 4,
                        },
                        {
                            profile: 'https://cdn.gobankingrates.com/wp-content/uploads/2024/01/a-woman-smiles-at-work-while-look-at-her-phone-iStock-1460124878.jpg?w=675&quality=75&webp=1',
                            name: 'Li Emma',
                            date: 'October 30, 2024 1:50 AM',
                            comment: "You only need one squirt! It has light coverage, and my skin reacted well to it. I am on automatic delivery, which should indicate it's a good product.",
                            rating: 4,
                        },
            
                    ],
                },
                {
                    id: 4,
                    description: 'A hypoallergenic and pore clarifying 3-in-1 cleansing balm formulated especially for oily and breakout prone skin to target clogged pores, excess oil and waterproof makeup while deeply cleansing and replenishing moisture levels. FOR ACNE PRONE & OILY SKIN TYPES - Formulated with jojoba oil and a blend of AHA, BHA, LHA to gently remove exfoliate away excess dead skin cells and cleanse pores for a truly deep cleanse.',
                    ingredients: 'CETYL ETHYLHEXANOATE, TRIETHYLHEXANOIN, POLYGLYCERYL-10 DIOLEATE, C12-15 ALKYL BENZOATE, HYDROGENATED POLY(C6-14OLEFIN), PEG-8 GLYCERYL ISOSTEARATE, CAPRYLIC/CAPRIC TRIGLYCERIDE, PENTAERYTHRITYL TETRAETHYLHEXANOATE, PENTAERYTHRITYL TETRAISOSTEARATE, HYDROGENATED POLYISOBUTENE, COCOS NUCIFERA (COCONUT) OIL, PYRUS MALUS (APPLE ) SEED OIL(99.5ppm), PYRUS MALUS (APPLE) FRUIT EXTRACT, CITRUS UNSHIU PEEL EXTRACT, ORCHID EXTRACT, CAMELLIA SINENSIS LEAF EXTRACT, CAMELLIA JAPONICA LEAF EXTRACT, OPUNTIA COCCINELLIFERA , FRUIT EXTRACT, BUTYLENE GLYCOL, COCO-CAPRYLATE/CAPRATE, FRAGRANCE',
                    usage: 'When first trying the product, it is recommended to use it once or twice a week for one minute. The frequency of use can be gradually increased depending on the skin condition. \n1. After cleansing, lightly pat your skin dry. \n2. Apply 2 drops of product on the entire face or on the areas of concern and leave it for 1 minute. Gently massage onto face with fingers. \n3. After 1 minute, rinse thoroughly with lukewarm water. After cleansing, apply the skincare you normally use to prevent the skin from drying out. ',
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
                    id : 5,
                    description: "Melt-In Moisture Cleansing Balm: A cleanser packed with powerful greens and rich Avocado Oil to melt away all impurities and refresh the skin. Its unique formula effectively cleanses without irritation, delivering a dose of hydration, leaving behind only a balanced, satisfied, and glowing skin. Indulge in the Moment: Rich and buttery, this balm turns cleansing from a routine to a ritual. The smooth and lush texture quickly melts into the skin, easily emulsifying to dissolve impurities without irritation. Gentle on Skin: Using only the gentlest ingredients, the PURITO From Green Avocado Cleansing Balm can be used without the fear of dryness or irritation Nourish with Nature: Formulated with Kale Leaf, Spinach Leaf, Broccoli, Mugwort Leaf, and Cabbage Leaf extracts, the balm is made to soothe the skin and boost its elasticity to reveal a soft and supple, radiant complexion.",
                    ingredients: 'Avocado Oil, Green Flora Complex and Watermelon Seed & Baobab Seed Oil Blend work together to gently dissolve makeup, dirt, sunscreen and other impurities.',
                    usage: 'Apply evenly to your face, body, or any other areas that need sun protection before sun exposure. Reapply every 2-3 hours, especially after sweating, swimming, or towel drying.',
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
                    id : 6,
                    description: "A moisturizer-like sunscreen offers SPF50+ PA++++ sun protection with a non-sticky texture, made for sensitive skin. Korean Centella Asiatica offers skin soothing, Brown Algae Extract offers anti-pollution, and Hyaluronic Acid maintains hydration.A fast-absorbing, weightless formula that leaves the skin moisturized and dewy without any greasy residue. Crafted to shield the skin from urban stressors, it effectively blocks harmful UV rays while creating a barrier against pollutants like fine dust. SPF/PA Clinical Study Results for sun protector factor and strong urban defense with the fine dust adhesion prevention test and two skin irritation tests completed. Ultralight, moisturizer-like daily sunscreen with a non-sticky texture that leaves the skin moisturized and dewy, without any greasy residue. Thriving in Korea's four seasons, Korean Centella brings stronger calming benefits. Enduring the Korean winter boosts the plant's active compounds, making its soothing effect even more powerful.",
                    ingredients: 'Avocado Oil, Green Flora Complex and Watermelon Seed & Baobab Seed Oil Blend work together to gently dissolve makeup, dirt, sunscreen and other impurities.',
                    usage: '1. Apply generously 15 minutes before sun exposure.\n2. Reapply every two hours or as necessary and immediately after extensive sweating.',
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
                            rating: 2,
                        },
            
                    ],
                },
                {
                    id : 7,
                    description: "Refreshing gel cream with nourishing Avena Sativa (Oat) Seed Water instantly calms dry and sensitive skin. The lightweight clear texture softly melts on the skin, easily seeping into its layers. This gel cream improves skin's moisture level, and soothes hypersensitivity, keeping the skin balanced and vibrant. The combination of oat and panthenol provides a refreshing splash of hydration and additional nutrients while creating a protective barrier. Avena Sativa (Oat) Seed Water(77%) is a gentle ingredient that calms irritated skin. Rich in antioxidants and hydrating properties, this ingredient instantly improves the skin's moisture barrier. It is particularly suitable for sensitive skin. Squalane rapidly penetrates the skin to instantly hydrate and lock in moisture. This replenishing facial oil works to boost elasticity, nourish, soothe, and smooth out dehydration lines. Beta-Glucan is a humectant that effectively soothes and calms sensitive skin. It smoothes fine lines, providing hydrating and plumping benefits to the skin. This ingredient is also enriched with antioxidant properties to counteract environmental stressors.",
                    ingredients: 'Water, Oryza Sativa (Rice) Extract (30%), Dibutyl Adipate, Propanediol, Diethylamino Hydroxybenzoyl Hexyl Benzoate, Polymethylsilsesquioxane, Ethylhexyl Triazone, Niacinamide, Methylene Bis-benzotriazolyl Tetramethylbutylphenol, Coco-caprylate/Caprate, Caprylyl Methicone, Diethylhexyl Butamido Triazone, Glycerin, Butylene Glycol, Oryza Sativa (Rice) Germ Extract, Camellia Sinensis Leaf Extract, Lactobacillus/Pumpkin Ferment Extract, Bacillus/Soybean Ferment Extract, Saccharum Officinarum (Sugarcane) Extract, Macrocystis Pyrifera (Kelp) Extract, Cocos Nucifera (Coconut) Fruit Extract, Panax Ginseng Root Extract, Camellia Sinensis Leaf Extract, Monascus/Rice Ferment, Pentylene Glycol, Behenyl Alcohol, Poly C10-30 Alkyl Acrylate, Polyglyceryl-3 Methylglucose Distearate, Decyl Glucoside, Tromethamine, Carbomer, Acrylates/C10-30 Alkyl Acrylate Crosspolymer, 1,2-Hexanediol,Sodium Stearoyl Glutamate, Polyacrylate Crosspolymer-6',
                    usage: 'Take an appropirate amount of sunscreen and apply it onto your face and neck',
                    reviews: [
                        {
                            profile: 'https://d2gwgwt9a7yxle.cloudfront.net/what_is_user_id_in_net_banking_mobile_871b681e52.jp',
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
                            rating: 4,
                        },
                        {
                            profile: 'https://cdn.gobankingrates.com/wp-content/uploads/2024/01/a-woman-smiles-at-work-while-look-at-her-phone-iStock-1460124878.jpg?w=675&quality=75&webp=1',
                            name: 'Li Emma',
                            date: 'October 30, 2024 1:50 AM',
                            comment: "You only need one squirt! It has light coverage, and my skin reacted well to it. I am on automatic delivery, which should indicate it's a good product.",
                            rating: 4,
                        },
            
                    ],
                },
                {
                    id: 8,
                    description: 'A hypoallergenic and pore clarifying 3-in-1 cleansing balm formulated especially for oily and breakout prone skin to target clogged pores, excess oil and waterproof makeup while deeply cleansing and replenishing moisture levels. FOR ACNE PRONE & OILY SKIN TYPES - Formulated with jojoba oil and a blend of AHA, BHA, LHA to gently remove exfoliate away excess dead skin cells and cleanse pores for a truly deep cleanse.',
                    ingredients: 'CETYL ETHYLHEXANOATE, TRIETHYLHEXANOIN, POLYGLYCERYL-10 DIOLEATE, C12-15 ALKYL BENZOATE, HYDROGENATED POLY(C6-14OLEFIN), PEG-8 GLYCERYL ISOSTEARATE, CAPRYLIC/CAPRIC TRIGLYCERIDE, PENTAERYTHRITYL TETRAETHYLHEXANOATE, PENTAERYTHRITYL TETRAISOSTEARATE, HYDROGENATED POLYISOBUTENE, COCOS NUCIFERA (COCONUT) OIL, PYRUS MALUS (APPLE ) SEED OIL(99.5ppm), PYRUS MALUS (APPLE) FRUIT EXTRACT, CITRUS UNSHIU PEEL EXTRACT, ORCHID EXTRACT, CAMELLIA SINENSIS LEAF EXTRACT, CAMELLIA JAPONICA LEAF EXTRACT, OPUNTIA COCCINELLIFERA , FRUIT EXTRACT, BUTYLENE GLYCOL, COCO-CAPRYLATE/CAPRATE, FRAGRANCE',
                    usage: 'When first trying the product, it is recommended to use it once or twice a week for one minute. The frequency of use can be gradually increased depending on the skin condition. \n1. After cleansing, lightly pat your skin dry. \n2. Apply 2 drops of product on the entire face or on the areas of concern and leave it for 1 minute. Gently massage onto face with fingers. \n3. After 1 minute, rinse thoroughly with lukewarm water. After cleansing, apply the skincare you normally use to prevent the skin from drying out. ',
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
                    id : 9,
                    description: "Melt-In Moisture Cleansing Balm: A cleanser packed with powerful greens and rich Avocado Oil to melt away all impurities and refresh the skin. Its unique formula effectively cleanses without irritation, delivering a dose of hydration, leaving behind only a balanced, satisfied, and glowing skin. Indulge in the Moment: Rich and buttery, this balm turns cleansing from a routine to a ritual. The smooth and lush texture quickly melts into the skin, easily emulsifying to dissolve impurities without irritation. Gentle on Skin: Using only the gentlest ingredients, the PURITO From Green Avocado Cleansing Balm can be used without the fear of dryness or irritation Nourish with Nature: Formulated with Kale Leaf, Spinach Leaf, Broccoli, Mugwort Leaf, and Cabbage Leaf extracts, the balm is made to soothe the skin and boost its elasticity to reveal a soft and supple, radiant complexion.",
                    ingredients: 'Avocado Oil, Green Flora Complex and Watermelon Seed & Baobab Seed Oil Blend work together to gently dissolve makeup, dirt, sunscreen and other impurities.',
                    usage: 'Apply evenly to your face, body, or any other areas that need sun protection before sun exposure. Reapply every 2-3 hours, especially after sweating, swimming, or towel drying.',
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
                    id : 10,
                    description: "A moisturizer-like sunscreen offers SPF50+ PA++++ sun protection with a non-sticky texture, made for sensitive skin. Korean Centella Asiatica offers skin soothing, Brown Algae Extract offers anti-pollution, and Hyaluronic Acid maintains hydration.A fast-absorbing, weightless formula that leaves the skin moisturized and dewy without any greasy residue. Crafted to shield the skin from urban stressors, it effectively blocks harmful UV rays while creating a barrier against pollutants like fine dust. SPF/PA Clinical Study Results for sun protector factor and strong urban defense with the fine dust adhesion prevention test and two skin irritation tests completed. Ultralight, moisturizer-like daily sunscreen with a non-sticky texture that leaves the skin moisturized and dewy, without any greasy residue. Thriving in Korea's four seasons, Korean Centella brings stronger calming benefits. Enduring the Korean winter boosts the plant's active compounds, making its soothing effect even more powerful.",
                    ingredients: 'Avocado Oil, Green Flora Complex and Watermelon Seed & Baobab Seed Oil Blend work together to gently dissolve makeup, dirt, sunscreen and other impurities.',
                    usage: '1. Apply generously 15 minutes before sun exposure.\n2. Reapply every two hours or as necessary and immediately after extensive sweating.',
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
                            rating: 2,
                        },
            
                    ],
                },
                {
                    id : 11,
                    description: "Refreshing gel cream with nourishing Avena Sativa (Oat) Seed Water instantly calms dry and sensitive skin. The lightweight clear texture softly melts on the skin, easily seeping into its layers. This gel cream improves skin's moisture level, and soothes hypersensitivity, keeping the skin balanced and vibrant. The combination of oat and panthenol provides a refreshing splash of hydration and additional nutrients while creating a protective barrier. Avena Sativa (Oat) Seed Water(77%) is a gentle ingredient that calms irritated skin. Rich in antioxidants and hydrating properties, this ingredient instantly improves the skin's moisture barrier. It is particularly suitable for sensitive skin. Squalane rapidly penetrates the skin to instantly hydrate and lock in moisture. This replenishing facial oil works to boost elasticity, nourish, soothe, and smooth out dehydration lines. Beta-Glucan is a humectant that effectively soothes and calms sensitive skin. It smoothes fine lines, providing hydrating and plumping benefits to the skin. This ingredient is also enriched with antioxidant properties to counteract environmental stressors.",
                    ingredients: 'Water, Oryza Sativa (Rice) Extract (30%), Dibutyl Adipate, Propanediol, Diethylamino Hydroxybenzoyl Hexyl Benzoate, Polymethylsilsesquioxane, Ethylhexyl Triazone, Niacinamide, Methylene Bis-benzotriazolyl Tetramethylbutylphenol, Coco-caprylate/Caprate, Caprylyl Methicone, Diethylhexyl Butamido Triazone, Glycerin, Butylene Glycol, Oryza Sativa (Rice) Germ Extract, Camellia Sinensis Leaf Extract, Lactobacillus/Pumpkin Ferment Extract, Bacillus/Soybean Ferment Extract, Saccharum Officinarum (Sugarcane) Extract, Macrocystis Pyrifera (Kelp) Extract, Cocos Nucifera (Coconut) Fruit Extract, Panax Ginseng Root Extract, Camellia Sinensis Leaf Extract, Monascus/Rice Ferment, Pentylene Glycol, Behenyl Alcohol, Poly C10-30 Alkyl Acrylate, Polyglyceryl-3 Methylglucose Distearate, Decyl Glucoside, Tromethamine, Carbomer, Acrylates/C10-30 Alkyl Acrylate Crosspolymer, 1,2-Hexanediol,Sodium Stearoyl Glutamate, Polyacrylate Crosspolymer-6',
                    usage: 'Take an appropirate amount of sunscreen and apply it onto your face and neck',
                    reviews: [
                        {
                            profile: 'https://d2gwgwt9a7yxle.cloudfront.net/what_is_user_id_in_net_banking_mobile_871b681e52.jp',
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
                            rating: 4,
                        },
                        {
                            profile: 'https://cdn.gobankingrates.com/wp-content/uploads/2024/01/a-woman-smiles-at-work-while-look-at-her-phone-iStock-1460124878.jpg?w=675&quality=75&webp=1',
                            name: 'Li Emma',
                            date: 'October 30, 2024 1:50 AM',
                            comment: "You only need one squirt! It has light coverage, and my skin reacted well to it. I am on automatic delivery, which should indicate it's a good product.",
                            rating: 4,
                        },
            
                    ],
                },
                {
                    id: 12,
                    description: 'A hypoallergenic and pore clarifying 3-in-1 cleansing balm formulated especially for oily and breakout prone skin to target clogged pores, excess oil and waterproof makeup while deeply cleansing and replenishing moisture levels. FOR ACNE PRONE & OILY SKIN TYPES - Formulated with jojoba oil and a blend of AHA, BHA, LHA to gently remove exfoliate away excess dead skin cells and cleanse pores for a truly deep cleanse.',
                    ingredients: 'CETYL ETHYLHEXANOATE, TRIETHYLHEXANOIN, POLYGLYCERYL-10 DIOLEATE, C12-15 ALKYL BENZOATE, HYDROGENATED POLY(C6-14OLEFIN), PEG-8 GLYCERYL ISOSTEARATE, CAPRYLIC/CAPRIC TRIGLYCERIDE, PENTAERYTHRITYL TETRAETHYLHEXANOATE, PENTAERYTHRITYL TETRAISOSTEARATE, HYDROGENATED POLYISOBUTENE, COCOS NUCIFERA (COCONUT) OIL, PYRUS MALUS (APPLE ) SEED OIL(99.5ppm), PYRUS MALUS (APPLE) FRUIT EXTRACT, CITRUS UNSHIU PEEL EXTRACT, ORCHID EXTRACT, CAMELLIA SINENSIS LEAF EXTRACT, CAMELLIA JAPONICA LEAF EXTRACT, OPUNTIA COCCINELLIFERA , FRUIT EXTRACT, BUTYLENE GLYCOL, COCO-CAPRYLATE/CAPRATE, FRAGRANCE',
                    usage: 'When first trying the product, it is recommended to use it once or twice a week for one minute. The frequency of use can be gradually increased depending on the skin condition. \n1. After cleansing, lightly pat your skin dry. \n2. Apply 2 drops of product on the entire face or on the areas of concern and leave it for 1 minute. Gently massage onto face with fingers. \n3. After 1 minute, rinse thoroughly with lukewarm water. After cleansing, apply the skincare you normally use to prevent the skin from drying out. ',
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
                    id : 13,
                    description: "Melt-In Moisture Cleansing Balm: A cleanser packed with powerful greens and rich Avocado Oil to melt away all impurities and refresh the skin. Its unique formula effectively cleanses without irritation, delivering a dose of hydration, leaving behind only a balanced, satisfied, and glowing skin. Indulge in the Moment: Rich and buttery, this balm turns cleansing from a routine to a ritual. The smooth and lush texture quickly melts into the skin, easily emulsifying to dissolve impurities without irritation. Gentle on Skin: Using only the gentlest ingredients, the PURITO From Green Avocado Cleansing Balm can be used without the fear of dryness or irritation Nourish with Nature: Formulated with Kale Leaf, Spinach Leaf, Broccoli, Mugwort Leaf, and Cabbage Leaf extracts, the balm is made to soothe the skin and boost its elasticity to reveal a soft and supple, radiant complexion.",
                    ingredients: 'Avocado Oil, Green Flora Complex and Watermelon Seed & Baobab Seed Oil Blend work together to gently dissolve makeup, dirt, sunscreen and other impurities.',
                    usage: 'Apply evenly to your face, body, or any other areas that need sun protection before sun exposure. Reapply every 2-3 hours, especially after sweating, swimming, or towel drying.',
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
                    id : 14,
                    description: "A moisturizer-like sunscreen offers SPF50+ PA++++ sun protection with a non-sticky texture, made for sensitive skin. Korean Centella Asiatica offers skin soothing, Brown Algae Extract offers anti-pollution, and Hyaluronic Acid maintains hydration.A fast-absorbing, weightless formula that leaves the skin moisturized and dewy without any greasy residue. Crafted to shield the skin from urban stressors, it effectively blocks harmful UV rays while creating a barrier against pollutants like fine dust. SPF/PA Clinical Study Results for sun protector factor and strong urban defense with the fine dust adhesion prevention test and two skin irritation tests completed. Ultralight, moisturizer-like daily sunscreen with a non-sticky texture that leaves the skin moisturized and dewy, without any greasy residue. Thriving in Korea's four seasons, Korean Centella brings stronger calming benefits. Enduring the Korean winter boosts the plant's active compounds, making its soothing effect even more powerful.",
                    ingredients: 'Avocado Oil, Green Flora Complex and Watermelon Seed & Baobab Seed Oil Blend work together to gently dissolve makeup, dirt, sunscreen and other impurities.',
                    usage: '1. Apply generously 15 minutes before sun exposure.\n2. Reapply every two hours or as necessary and immediately after extensive sweating.',
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
                            rating: 2,
                        },
            
                    ],
                },
                {
                    id : 15,
                    description: "Refreshing gel cream with nourishing Avena Sativa (Oat) Seed Water instantly calms dry and sensitive skin. The lightweight clear texture softly melts on the skin, easily seeping into its layers. This gel cream improves skin's moisture level, and soothes hypersensitivity, keeping the skin balanced and vibrant. The combination of oat and panthenol provides a refreshing splash of hydration and additional nutrients while creating a protective barrier. Avena Sativa (Oat) Seed Water(77%) is a gentle ingredient that calms irritated skin. Rich in antioxidants and hydrating properties, this ingredient instantly improves the skin's moisture barrier. It is particularly suitable for sensitive skin. Squalane rapidly penetrates the skin to instantly hydrate and lock in moisture. This replenishing facial oil works to boost elasticity, nourish, soothe, and smooth out dehydration lines. Beta-Glucan is a humectant that effectively soothes and calms sensitive skin. It smoothes fine lines, providing hydrating and plumping benefits to the skin. This ingredient is also enriched with antioxidant properties to counteract environmental stressors.",
                    ingredients: 'Water, Oryza Sativa (Rice) Extract (30%), Dibutyl Adipate, Propanediol, Diethylamino Hydroxybenzoyl Hexyl Benzoate, Polymethylsilsesquioxane, Ethylhexyl Triazone, Niacinamide, Methylene Bis-benzotriazolyl Tetramethylbutylphenol, Coco-caprylate/Caprate, Caprylyl Methicone, Diethylhexyl Butamido Triazone, Glycerin, Butylene Glycol, Oryza Sativa (Rice) Germ Extract, Camellia Sinensis Leaf Extract, Lactobacillus/Pumpkin Ferment Extract, Bacillus/Soybean Ferment Extract, Saccharum Officinarum (Sugarcane) Extract, Macrocystis Pyrifera (Kelp) Extract, Cocos Nucifera (Coconut) Fruit Extract, Panax Ginseng Root Extract, Camellia Sinensis Leaf Extract, Monascus/Rice Ferment, Pentylene Glycol, Behenyl Alcohol, Poly C10-30 Alkyl Acrylate, Polyglyceryl-3 Methylglucose Distearate, Decyl Glucoside, Tromethamine, Carbomer, Acrylates/C10-30 Alkyl Acrylate Crosspolymer, 1,2-Hexanediol,Sodium Stearoyl Glutamate, Polyacrylate Crosspolymer-6',
                    usage: 'Take an appropirate amount of sunscreen and apply it onto your face and neck',
                    reviews: [
                        {
                            profile: 'https://d2gwgwt9a7yxle.cloudfront.net/what_is_user_id_in_net_banking_mobile_871b681e52.jp',
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
                            rating: 4,
                        },
                        {
                            profile: 'https://cdn.gobankingrates.com/wp-content/uploads/2024/01/a-woman-smiles-at-work-while-look-at-her-phone-iStock-1460124878.jpg?w=675&quality=75&webp=1',
                            name: 'Li Emma',
                            date: 'October 30, 2024 1:50 AM',
                            comment: "You only need one squirt! It has light coverage, and my skin reacted well to it. I am on automatic delivery, which should indicate it's a good product.",
                            rating: 4,
                        },
            
                    ],
                },
                {
                    id: 16,
                    description: 'A hypoallergenic and pore clarifying 3-in-1 cleansing balm formulated especially for oily and breakout prone skin to target clogged pores, excess oil and waterproof makeup while deeply cleansing and replenishing moisture levels. FOR ACNE PRONE & OILY SKIN TYPES - Formulated with jojoba oil and a blend of AHA, BHA, LHA to gently remove exfoliate away excess dead skin cells and cleanse pores for a truly deep cleanse.',
                    ingredients: 'CETYL ETHYLHEXANOATE, TRIETHYLHEXANOIN, POLYGLYCERYL-10 DIOLEATE, C12-15 ALKYL BENZOATE, HYDROGENATED POLY(C6-14OLEFIN), PEG-8 GLYCERYL ISOSTEARATE, CAPRYLIC/CAPRIC TRIGLYCERIDE, PENTAERYTHRITYL TETRAETHYLHEXANOATE, PENTAERYTHRITYL TETRAISOSTEARATE, HYDROGENATED POLYISOBUTENE, COCOS NUCIFERA (COCONUT) OIL, PYRUS MALUS (APPLE ) SEED OIL(99.5ppm), PYRUS MALUS (APPLE) FRUIT EXTRACT, CITRUS UNSHIU PEEL EXTRACT, ORCHID EXTRACT, CAMELLIA SINENSIS LEAF EXTRACT, CAMELLIA JAPONICA LEAF EXTRACT, OPUNTIA COCCINELLIFERA , FRUIT EXTRACT, BUTYLENE GLYCOL, COCO-CAPRYLATE/CAPRATE, FRAGRANCE',
                    usage: 'When first trying the product, it is recommended to use it once or twice a week for one minute. The frequency of use can be gradually increased depending on the skin condition. \n1. After cleansing, lightly pat your skin dry. \n2. Apply 2 drops of product on the entire face or on the areas of concern and leave it for 1 minute. Gently massage onto face with fingers. \n3. After 1 minute, rinse thoroughly with lukewarm water. After cleansing, apply the skincare you normally use to prevent the skin from drying out. ',
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
                    id : 17,
                    description: "Melt-In Moisture Cleansing Balm: A cleanser packed with powerful greens and rich Avocado Oil to melt away all impurities and refresh the skin. Its unique formula effectively cleanses without irritation, delivering a dose of hydration, leaving behind only a balanced, satisfied, and glowing skin. Indulge in the Moment: Rich and buttery, this balm turns cleansing from a routine to a ritual. The smooth and lush texture quickly melts into the skin, easily emulsifying to dissolve impurities without irritation. Gentle on Skin: Using only the gentlest ingredients, the PURITO From Green Avocado Cleansing Balm can be used without the fear of dryness or irritation Nourish with Nature: Formulated with Kale Leaf, Spinach Leaf, Broccoli, Mugwort Leaf, and Cabbage Leaf extracts, the balm is made to soothe the skin and boost its elasticity to reveal a soft and supple, radiant complexion.",
                    ingredients: 'Avocado Oil, Green Flora Complex and Watermelon Seed & Baobab Seed Oil Blend work together to gently dissolve makeup, dirt, sunscreen and other impurities.',
                    usage: 'Apply evenly to your face, body, or any other areas that need sun protection before sun exposure. Reapply every 2-3 hours, especially after sweating, swimming, or towel drying.',
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
                    id : 18,
                    description: "A moisturizer-like sunscreen offers SPF50+ PA++++ sun protection with a non-sticky texture, made for sensitive skin. Korean Centella Asiatica offers skin soothing, Brown Algae Extract offers anti-pollution, and Hyaluronic Acid maintains hydration.A fast-absorbing, weightless formula that leaves the skin moisturized and dewy without any greasy residue. Crafted to shield the skin from urban stressors, it effectively blocks harmful UV rays while creating a barrier against pollutants like fine dust. SPF/PA Clinical Study Results for sun protector factor and strong urban defense with the fine dust adhesion prevention test and two skin irritation tests completed. Ultralight, moisturizer-like daily sunscreen with a non-sticky texture that leaves the skin moisturized and dewy, without any greasy residue. Thriving in Korea's four seasons, Korean Centella brings stronger calming benefits. Enduring the Korean winter boosts the plant's active compounds, making its soothing effect even more powerful.",
                    ingredients: 'Avocado Oil, Green Flora Complex and Watermelon Seed & Baobab Seed Oil Blend work together to gently dissolve makeup, dirt, sunscreen and other impurities.',
                    usage: '1. Apply generously 15 minutes before sun exposure.\n2. Reapply every two hours or as necessary and immediately after extensive sweating.',
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
                            rating: 2,
                        },
            
                    ],
                },
                {
                    id : 19,
                    description: "Refreshing gel cream with nourishing Avena Sativa (Oat) Seed Water instantly calms dry and sensitive skin. The lightweight clear texture softly melts on the skin, easily seeping into its layers. This gel cream improves skin's moisture level, and soothes hypersensitivity, keeping the skin balanced and vibrant. The combination of oat and panthenol provides a refreshing splash of hydration and additional nutrients while creating a protective barrier. Avena Sativa (Oat) Seed Water(77%) is a gentle ingredient that calms irritated skin. Rich in antioxidants and hydrating properties, this ingredient instantly improves the skin's moisture barrier. It is particularly suitable for sensitive skin. Squalane rapidly penetrates the skin to instantly hydrate and lock in moisture. This replenishing facial oil works to boost elasticity, nourish, soothe, and smooth out dehydration lines. Beta-Glucan is a humectant that effectively soothes and calms sensitive skin. It smoothes fine lines, providing hydrating and plumping benefits to the skin. This ingredient is also enriched with antioxidant properties to counteract environmental stressors.",
                    ingredients: 'Water, Oryza Sativa (Rice) Extract (30%), Dibutyl Adipate, Propanediol, Diethylamino Hydroxybenzoyl Hexyl Benzoate, Polymethylsilsesquioxane, Ethylhexyl Triazone, Niacinamide, Methylene Bis-benzotriazolyl Tetramethylbutylphenol, Coco-caprylate/Caprate, Caprylyl Methicone, Diethylhexyl Butamido Triazone, Glycerin, Butylene Glycol, Oryza Sativa (Rice) Germ Extract, Camellia Sinensis Leaf Extract, Lactobacillus/Pumpkin Ferment Extract, Bacillus/Soybean Ferment Extract, Saccharum Officinarum (Sugarcane) Extract, Macrocystis Pyrifera (Kelp) Extract, Cocos Nucifera (Coconut) Fruit Extract, Panax Ginseng Root Extract, Camellia Sinensis Leaf Extract, Monascus/Rice Ferment, Pentylene Glycol, Behenyl Alcohol, Poly C10-30 Alkyl Acrylate, Polyglyceryl-3 Methylglucose Distearate, Decyl Glucoside, Tromethamine, Carbomer, Acrylates/C10-30 Alkyl Acrylate Crosspolymer, 1,2-Hexanediol,Sodium Stearoyl Glutamate, Polyacrylate Crosspolymer-6',
                    usage: 'Take an appropirate amount of sunscreen and apply it onto your face and neck',
                    reviews: [
                        {
                            profile: 'https://d2gwgwt9a7yxle.cloudfront.net/what_is_user_id_in_net_banking_mobile_871b681e52.jp',
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
                            rating: 4,
                        },
                        {
                            profile: 'https://cdn.gobankingrates.com/wp-content/uploads/2024/01/a-woman-smiles-at-work-while-look-at-her-phone-iStock-1460124878.jpg?w=675&quality=75&webp=1',
                            name: 'Li Emma',
                            date: 'October 30, 2024 1:50 AM',
                            comment: "You only need one squirt! It has light coverage, and my skin reacted well to it. I am on automatic delivery, which should indicate it's a good product.",
                            rating: 4,
                        },
            
                    ],
                },
                {
                    id: 20,
                    description: 'A hypoallergenic and pore clarifying 3-in-1 cleansing balm formulated especially for oily and breakout prone skin to target clogged pores, excess oil and waterproof makeup while deeply cleansing and replenishing moisture levels. FOR ACNE PRONE & OILY SKIN TYPES - Formulated with jojoba oil and a blend of AHA, BHA, LHA to gently remove exfoliate away excess dead skin cells and cleanse pores for a truly deep cleanse.',
                    ingredients: 'CETYL ETHYLHEXANOATE, TRIETHYLHEXANOIN, POLYGLYCERYL-10 DIOLEATE, C12-15 ALKYL BENZOATE, HYDROGENATED POLY(C6-14OLEFIN), PEG-8 GLYCERYL ISOSTEARATE, CAPRYLIC/CAPRIC TRIGLYCERIDE, PENTAERYTHRITYL TETRAETHYLHEXANOATE, PENTAERYTHRITYL TETRAISOSTEARATE, HYDROGENATED POLYISOBUTENE, COCOS NUCIFERA (COCONUT) OIL, PYRUS MALUS (APPLE ) SEED OIL(99.5ppm), PYRUS MALUS (APPLE) FRUIT EXTRACT, CITRUS UNSHIU PEEL EXTRACT, ORCHID EXTRACT, CAMELLIA SINENSIS LEAF EXTRACT, CAMELLIA JAPONICA LEAF EXTRACT, OPUNTIA COCCINELLIFERA , FRUIT EXTRACT, BUTYLENE GLYCOL, COCO-CAPRYLATE/CAPRATE, FRAGRANCE',
                    usage: 'When first trying the product, it is recommended to use it once or twice a week for one minute. The frequency of use can be gradually increased depending on the skin condition. \n1. After cleansing, lightly pat your skin dry. \n2. Apply 2 drops of product on the entire face or on the areas of concern and leave it for 1 minute. Gently massage onto face with fingers. \n3. After 1 minute, rinse thoroughly with lukewarm water. After cleansing, apply the skincare you normally use to prevent the skin from drying out. ',
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
                    id : 21,
                    description: "Melt-In Moisture Cleansing Balm: A cleanser packed with powerful greens and rich Avocado Oil to melt away all impurities and refresh the skin. Its unique formula effectively cleanses without irritation, delivering a dose of hydration, leaving behind only a balanced, satisfied, and glowing skin. Indulge in the Moment: Rich and buttery, this balm turns cleansing from a routine to a ritual. The smooth and lush texture quickly melts into the skin, easily emulsifying to dissolve impurities without irritation. Gentle on Skin: Using only the gentlest ingredients, the PURITO From Green Avocado Cleansing Balm can be used without the fear of dryness or irritation Nourish with Nature: Formulated with Kale Leaf, Spinach Leaf, Broccoli, Mugwort Leaf, and Cabbage Leaf extracts, the balm is made to soothe the skin and boost its elasticity to reveal a soft and supple, radiant complexion.",
                    ingredients: 'Avocado Oil, Green Flora Complex and Watermelon Seed & Baobab Seed Oil Blend work together to gently dissolve makeup, dirt, sunscreen and other impurities.',
                    usage: 'Apply evenly to your face, body, or any other areas that need sun protection before sun exposure. Reapply every 2-3 hours, especially after sweating, swimming, or towel drying.',
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
                    id : 22,
                    description: "A moisturizer-like sunscreen offers SPF50+ PA++++ sun protection with a non-sticky texture, made for sensitive skin. Korean Centella Asiatica offers skin soothing, Brown Algae Extract offers anti-pollution, and Hyaluronic Acid maintains hydration.A fast-absorbing, weightless formula that leaves the skin moisturized and dewy without any greasy residue. Crafted to shield the skin from urban stressors, it effectively blocks harmful UV rays while creating a barrier against pollutants like fine dust. SPF/PA Clinical Study Results for sun protector factor and strong urban defense with the fine dust adhesion prevention test and two skin irritation tests completed. Ultralight, moisturizer-like daily sunscreen with a non-sticky texture that leaves the skin moisturized and dewy, without any greasy residue. Thriving in Korea's four seasons, Korean Centella brings stronger calming benefits. Enduring the Korean winter boosts the plant's active compounds, making its soothing effect even more powerful.",
                    ingredients: 'Avocado Oil, Green Flora Complex and Watermelon Seed & Baobab Seed Oil Blend work together to gently dissolve makeup, dirt, sunscreen and other impurities.',
                    usage: '1. Apply generously 15 minutes before sun exposure.\n2. Reapply every two hours or as necessary and immediately after extensive sweating.',
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
                            rating: 2,
                        },
            
                    ],
                },
                {
                    id : 23,
                    description: "Refreshing gel cream with nourishing Avena Sativa (Oat) Seed Water instantly calms dry and sensitive skin. The lightweight clear texture softly melts on the skin, easily seeping into its layers. This gel cream improves skin's moisture level, and soothes hypersensitivity, keeping the skin balanced and vibrant. The combination of oat and panthenol provides a refreshing splash of hydration and additional nutrients while creating a protective barrier. Avena Sativa (Oat) Seed Water(77%) is a gentle ingredient that calms irritated skin. Rich in antioxidants and hydrating properties, this ingredient instantly improves the skin's moisture barrier. It is particularly suitable for sensitive skin. Squalane rapidly penetrates the skin to instantly hydrate and lock in moisture. This replenishing facial oil works to boost elasticity, nourish, soothe, and smooth out dehydration lines. Beta-Glucan is a humectant that effectively soothes and calms sensitive skin. It smoothes fine lines, providing hydrating and plumping benefits to the skin. This ingredient is also enriched with antioxidant properties to counteract environmental stressors.",
                    ingredients: 'Water, Oryza Sativa (Rice) Extract (30%), Dibutyl Adipate, Propanediol, Diethylamino Hydroxybenzoyl Hexyl Benzoate, Polymethylsilsesquioxane, Ethylhexyl Triazone, Niacinamide, Methylene Bis-benzotriazolyl Tetramethylbutylphenol, Coco-caprylate/Caprate, Caprylyl Methicone, Diethylhexyl Butamido Triazone, Glycerin, Butylene Glycol, Oryza Sativa (Rice) Germ Extract, Camellia Sinensis Leaf Extract, Lactobacillus/Pumpkin Ferment Extract, Bacillus/Soybean Ferment Extract, Saccharum Officinarum (Sugarcane) Extract, Macrocystis Pyrifera (Kelp) Extract, Cocos Nucifera (Coconut) Fruit Extract, Panax Ginseng Root Extract, Camellia Sinensis Leaf Extract, Monascus/Rice Ferment, Pentylene Glycol, Behenyl Alcohol, Poly C10-30 Alkyl Acrylate, Polyglyceryl-3 Methylglucose Distearate, Decyl Glucoside, Tromethamine, Carbomer, Acrylates/C10-30 Alkyl Acrylate Crosspolymer, 1,2-Hexanediol,Sodium Stearoyl Glutamate, Polyacrylate Crosspolymer-6',
                    usage: 'Take an appropirate amount of sunscreen and apply it onto your face and neck',
                    reviews: [
                        {
                            profile: 'https://d2gwgwt9a7yxle.cloudfront.net/what_is_user_id_in_net_banking_mobile_871b681e52.jp',
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
                            rating: 4,
                        },
                        {
                            profile: 'https://cdn.gobankingrates.com/wp-content/uploads/2024/01/a-woman-smiles-at-work-while-look-at-her-phone-iStock-1460124878.jpg?w=675&quality=75&webp=1',
                            name: 'Li Emma',
                            date: 'October 30, 2024 1:50 AM',
                            comment: "You only need one squirt! It has light coverage, and my skin reacted well to it. I am on automatic delivery, which should indicate it's a good product.",
                            rating: 4,
                        },
            
                    ],
                },
                {
                    id: 24,
                    description: 'A hypoallergenic and pore clarifying 3-in-1 cleansing balm formulated especially for oily and breakout prone skin to target clogged pores, excess oil and waterproof makeup while deeply cleansing and replenishing moisture levels. FOR ACNE PRONE & OILY SKIN TYPES - Formulated with jojoba oil and a blend of AHA, BHA, LHA to gently remove exfoliate away excess dead skin cells and cleanse pores for a truly deep cleanse.',
                    ingredients: 'CETYL ETHYLHEXANOATE, TRIETHYLHEXANOIN, POLYGLYCERYL-10 DIOLEATE, C12-15 ALKYL BENZOATE, HYDROGENATED POLY(C6-14OLEFIN), PEG-8 GLYCERYL ISOSTEARATE, CAPRYLIC/CAPRIC TRIGLYCERIDE, PENTAERYTHRITYL TETRAETHYLHEXANOATE, PENTAERYTHRITYL TETRAISOSTEARATE, HYDROGENATED POLYISOBUTENE, COCOS NUCIFERA (COCONUT) OIL, PYRUS MALUS (APPLE ) SEED OIL(99.5ppm), PYRUS MALUS (APPLE) FRUIT EXTRACT, CITRUS UNSHIU PEEL EXTRACT, ORCHID EXTRACT, CAMELLIA SINENSIS LEAF EXTRACT, CAMELLIA JAPONICA LEAF EXTRACT, OPUNTIA COCCINELLIFERA , FRUIT EXTRACT, BUTYLENE GLYCOL, COCO-CAPRYLATE/CAPRATE, FRAGRANCE',
                    usage: 'When first trying the product, it is recommended to use it once or twice a week for one minute. The frequency of use can be gradually increased depending on the skin condition. \n1. After cleansing, lightly pat your skin dry. \n2. Apply 2 drops of product on the entire face or on the areas of concern and leave it for 1 minute. Gently massage onto face with fingers. \n3. After 1 minute, rinse thoroughly with lukewarm water. After cleansing, apply the skincare you normally use to prevent the skin from drying out. ',
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
                    id : 25,
                    description: "Melt-In Moisture Cleansing Balm: A cleanser packed with powerful greens and rich Avocado Oil to melt away all impurities and refresh the skin. Its unique formula effectively cleanses without irritation, delivering a dose of hydration, leaving behind only a balanced, satisfied, and glowing skin. Indulge in the Moment: Rich and buttery, this balm turns cleansing from a routine to a ritual. The smooth and lush texture quickly melts into the skin, easily emulsifying to dissolve impurities without irritation. Gentle on Skin: Using only the gentlest ingredients, the PURITO From Green Avocado Cleansing Balm can be used without the fear of dryness or irritation Nourish with Nature: Formulated with Kale Leaf, Spinach Leaf, Broccoli, Mugwort Leaf, and Cabbage Leaf extracts, the balm is made to soothe the skin and boost its elasticity to reveal a soft and supple, radiant complexion.",
                    ingredients: 'Avocado Oil, Green Flora Complex and Watermelon Seed & Baobab Seed Oil Blend work together to gently dissolve makeup, dirt, sunscreen and other impurities.',
                    usage: 'Apply evenly to your face, body, or any other areas that need sun protection before sun exposure. Reapply every 2-3 hours, especially after sweating, swimming, or towel drying.',
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
                    id : 26,
                    description: "A moisturizer-like sunscreen offers SPF50+ PA++++ sun protection with a non-sticky texture, made for sensitive skin. Korean Centella Asiatica offers skin soothing, Brown Algae Extract offers anti-pollution, and Hyaluronic Acid maintains hydration.A fast-absorbing, weightless formula that leaves the skin moisturized and dewy without any greasy residue. Crafted to shield the skin from urban stressors, it effectively blocks harmful UV rays while creating a barrier against pollutants like fine dust. SPF/PA Clinical Study Results for sun protector factor and strong urban defense with the fine dust adhesion prevention test and two skin irritation tests completed. Ultralight, moisturizer-like daily sunscreen with a non-sticky texture that leaves the skin moisturized and dewy, without any greasy residue. Thriving in Korea's four seasons, Korean Centella brings stronger calming benefits. Enduring the Korean winter boosts the plant's active compounds, making its soothing effect even more powerful.",
                    ingredients: 'Avocado Oil, Green Flora Complex and Watermelon Seed & Baobab Seed Oil Blend work together to gently dissolve makeup, dirt, sunscreen and other impurities.',
                    usage: '1. Apply generously 15 minutes before sun exposure.\n2. Reapply every two hours or as necessary and immediately after extensive sweating.',
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
                            rating: 2,
                        },
            
                    ],
                },
                {
                    id : 27,
                    description: "Refreshing gel cream with nourishing Avena Sativa (Oat) Seed Water instantly calms dry and sensitive skin. The lightweight clear texture softly melts on the skin, easily seeping into its layers. This gel cream improves skin's moisture level, and soothes hypersensitivity, keeping the skin balanced and vibrant. The combination of oat and panthenol provides a refreshing splash of hydration and additional nutrients while creating a protective barrier. Avena Sativa (Oat) Seed Water(77%) is a gentle ingredient that calms irritated skin. Rich in antioxidants and hydrating properties, this ingredient instantly improves the skin's moisture barrier. It is particularly suitable for sensitive skin. Squalane rapidly penetrates the skin to instantly hydrate and lock in moisture. This replenishing facial oil works to boost elasticity, nourish, soothe, and smooth out dehydration lines. Beta-Glucan is a humectant that effectively soothes and calms sensitive skin. It smoothes fine lines, providing hydrating and plumping benefits to the skin. This ingredient is also enriched with antioxidant properties to counteract environmental stressors.",
                    ingredients: 'Water, Oryza Sativa (Rice) Extract (30%), Dibutyl Adipate, Propanediol, Diethylamino Hydroxybenzoyl Hexyl Benzoate, Polymethylsilsesquioxane, Ethylhexyl Triazone, Niacinamide, Methylene Bis-benzotriazolyl Tetramethylbutylphenol, Coco-caprylate/Caprate, Caprylyl Methicone, Diethylhexyl Butamido Triazone, Glycerin, Butylene Glycol, Oryza Sativa (Rice) Germ Extract, Camellia Sinensis Leaf Extract, Lactobacillus/Pumpkin Ferment Extract, Bacillus/Soybean Ferment Extract, Saccharum Officinarum (Sugarcane) Extract, Macrocystis Pyrifera (Kelp) Extract, Cocos Nucifera (Coconut) Fruit Extract, Panax Ginseng Root Extract, Camellia Sinensis Leaf Extract, Monascus/Rice Ferment, Pentylene Glycol, Behenyl Alcohol, Poly C10-30 Alkyl Acrylate, Polyglyceryl-3 Methylglucose Distearate, Decyl Glucoside, Tromethamine, Carbomer, Acrylates/C10-30 Alkyl Acrylate Crosspolymer, 1,2-Hexanediol,Sodium Stearoyl Glutamate, Polyacrylate Crosspolymer-6',
                    usage: 'Take an appropirate amount of sunscreen and apply it onto your face and neck',
                    reviews: [
                        {
                            profile: 'https://d2gwgwt9a7yxle.cloudfront.net/what_is_user_id_in_net_banking_mobile_871b681e52.jp',
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
                            rating: 4,
                        },
                        {
                            profile: 'https://cdn.gobankingrates.com/wp-content/uploads/2024/01/a-woman-smiles-at-work-while-look-at-her-phone-iStock-1460124878.jpg?w=675&quality=75&webp=1',
                            name: 'Li Emma',
                            date: 'October 30, 2024 1:50 AM',
                            comment: "You only need one squirt! It has light coverage, and my skin reacted well to it. I am on automatic delivery, which should indicate it's a good product.",
                            rating: 4,
                        },
            
                    ],
                },
                {
                    id: 28,
                    description: 'A hypoallergenic and pore clarifying 3-in-1 cleansing balm formulated especially for oily and breakout prone skin to target clogged pores, excess oil and waterproof makeup while deeply cleansing and replenishing moisture levels. FOR ACNE PRONE & OILY SKIN TYPES - Formulated with jojoba oil and a blend of AHA, BHA, LHA to gently remove exfoliate away excess dead skin cells and cleanse pores for a truly deep cleanse.',
                    ingredients: 'CETYL ETHYLHEXANOATE, TRIETHYLHEXANOIN, POLYGLYCERYL-10 DIOLEATE, C12-15 ALKYL BENZOATE, HYDROGENATED POLY(C6-14OLEFIN), PEG-8 GLYCERYL ISOSTEARATE, CAPRYLIC/CAPRIC TRIGLYCERIDE, PENTAERYTHRITYL TETRAETHYLHEXANOATE, PENTAERYTHRITYL TETRAISOSTEARATE, HYDROGENATED POLYISOBUTENE, COCOS NUCIFERA (COCONUT) OIL, PYRUS MALUS (APPLE ) SEED OIL(99.5ppm), PYRUS MALUS (APPLE) FRUIT EXTRACT, CITRUS UNSHIU PEEL EXTRACT, ORCHID EXTRACT, CAMELLIA SINENSIS LEAF EXTRACT, CAMELLIA JAPONICA LEAF EXTRACT, OPUNTIA COCCINELLIFERA , FRUIT EXTRACT, BUTYLENE GLYCOL, COCO-CAPRYLATE/CAPRATE, FRAGRANCE',
                    usage: 'When first trying the product, it is recommended to use it once or twice a week for one minute. The frequency of use can be gradually increased depending on the skin condition. \n1. After cleansing, lightly pat your skin dry. \n2. Apply 2 drops of product on the entire face or on the areas of concern and leave it for 1 minute. Gently massage onto face with fingers. \n3. After 1 minute, rinse thoroughly with lukewarm water. After cleansing, apply the skincare you normally use to prevent the skin from drying out. ',
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
                    id : 29,
                    description: "Melt-In Moisture Cleansing Balm: A cleanser packed with powerful greens and rich Avocado Oil to melt away all impurities and refresh the skin. Its unique formula effectively cleanses without irritation, delivering a dose of hydration, leaving behind only a balanced, satisfied, and glowing skin. Indulge in the Moment: Rich and buttery, this balm turns cleansing from a routine to a ritual. The smooth and lush texture quickly melts into the skin, easily emulsifying to dissolve impurities without irritation. Gentle on Skin: Using only the gentlest ingredients, the PURITO From Green Avocado Cleansing Balm can be used without the fear of dryness or irritation Nourish with Nature: Formulated with Kale Leaf, Spinach Leaf, Broccoli, Mugwort Leaf, and Cabbage Leaf extracts, the balm is made to soothe the skin and boost its elasticity to reveal a soft and supple, radiant complexion.",
                    ingredients: 'Avocado Oil, Green Flora Complex and Watermelon Seed & Baobab Seed Oil Blend work together to gently dissolve makeup, dirt, sunscreen and other impurities.',
                    usage: 'Apply evenly to your face, body, or any other areas that need sun protection before sun exposure. Reapply every 2-3 hours, especially after sweating, swimming, or towel drying.',
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
                    id : 30,
                    description: "A moisturizer-like sunscreen offers SPF50+ PA++++ sun protection with a non-sticky texture, made for sensitive skin. Korean Centella Asiatica offers skin soothing, Brown Algae Extract offers anti-pollution, and Hyaluronic Acid maintains hydration.A fast-absorbing, weightless formula that leaves the skin moisturized and dewy without any greasy residue. Crafted to shield the skin from urban stressors, it effectively blocks harmful UV rays while creating a barrier against pollutants like fine dust. SPF/PA Clinical Study Results for sun protector factor and strong urban defense with the fine dust adhesion prevention test and two skin irritation tests completed. Ultralight, moisturizer-like daily sunscreen with a non-sticky texture that leaves the skin moisturized and dewy, without any greasy residue. Thriving in Korea's four seasons, Korean Centella brings stronger calming benefits. Enduring the Korean winter boosts the plant's active compounds, making its soothing effect even more powerful.",
                    ingredients: 'Avocado Oil, Green Flora Complex and Watermelon Seed & Baobab Seed Oil Blend work together to gently dissolve makeup, dirt, sunscreen and other impurities.',
                    usage: '1. Apply generously 15 minutes before sun exposure.\n2. Reapply every two hours or as necessary and immediately after extensive sweating.',
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
                            rating: 2,
                        },
            
                    ],
                },
                {
                    id : 31,
                    description: "Refreshing gel cream with nourishing Avena Sativa (Oat) Seed Water instantly calms dry and sensitive skin. The lightweight clear texture softly melts on the skin, easily seeping into its layers. This gel cream improves skin's moisture level, and soothes hypersensitivity, keeping the skin balanced and vibrant. The combination of oat and panthenol provides a refreshing splash of hydration and additional nutrients while creating a protective barrier. Avena Sativa (Oat) Seed Water(77%) is a gentle ingredient that calms irritated skin. Rich in antioxidants and hydrating properties, this ingredient instantly improves the skin's moisture barrier. It is particularly suitable for sensitive skin. Squalane rapidly penetrates the skin to instantly hydrate and lock in moisture. This replenishing facial oil works to boost elasticity, nourish, soothe, and smooth out dehydration lines. Beta-Glucan is a humectant that effectively soothes and calms sensitive skin. It smoothes fine lines, providing hydrating and plumping benefits to the skin. This ingredient is also enriched with antioxidant properties to counteract environmental stressors.",
                    ingredients: 'Water, Oryza Sativa (Rice) Extract (30%), Dibutyl Adipate, Propanediol, Diethylamino Hydroxybenzoyl Hexyl Benzoate, Polymethylsilsesquioxane, Ethylhexyl Triazone, Niacinamide, Methylene Bis-benzotriazolyl Tetramethylbutylphenol, Coco-caprylate/Caprate, Caprylyl Methicone, Diethylhexyl Butamido Triazone, Glycerin, Butylene Glycol, Oryza Sativa (Rice) Germ Extract, Camellia Sinensis Leaf Extract, Lactobacillus/Pumpkin Ferment Extract, Bacillus/Soybean Ferment Extract, Saccharum Officinarum (Sugarcane) Extract, Macrocystis Pyrifera (Kelp) Extract, Cocos Nucifera (Coconut) Fruit Extract, Panax Ginseng Root Extract, Camellia Sinensis Leaf Extract, Monascus/Rice Ferment, Pentylene Glycol, Behenyl Alcohol, Poly C10-30 Alkyl Acrylate, Polyglyceryl-3 Methylglucose Distearate, Decyl Glucoside, Tromethamine, Carbomer, Acrylates/C10-30 Alkyl Acrylate Crosspolymer, 1,2-Hexanediol,Sodium Stearoyl Glutamate, Polyacrylate Crosspolymer-6',
                    usage: 'Take an appropirate amount of sunscreen and apply it onto your face and neck',
                    reviews: [
                        {
                            profile: 'https://d2gwgwt9a7yxle.cloudfront.net/what_is_user_id_in_net_banking_mobile_871b681e52.jp',
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
                            rating: 4,
                        },
                        {
                            profile: 'https://cdn.gobankingrates.com/wp-content/uploads/2024/01/a-woman-smiles-at-work-while-look-at-her-phone-iStock-1460124878.jpg?w=675&quality=75&webp=1',
                            name: 'Li Emma',
                            date: 'October 30, 2024 1:50 AM',
                            comment: "You only need one squirt! It has light coverage, and my skin reacted well to it. I am on automatic delivery, which should indicate it's a good product.",
                            rating: 4,
                        },
            
                    ],
                },
                {
                    id: 32,
                    description: 'A hypoallergenic and pore clarifying 3-in-1 cleansing balm formulated especially for oily and breakout prone skin to target clogged pores, excess oil and waterproof makeup while deeply cleansing and replenishing moisture levels. FOR ACNE PRONE & OILY SKIN TYPES - Formulated with jojoba oil and a blend of AHA, BHA, LHA to gently remove exfoliate away excess dead skin cells and cleanse pores for a truly deep cleanse.',
                    ingredients: 'CETYL ETHYLHEXANOATE, TRIETHYLHEXANOIN, POLYGLYCERYL-10 DIOLEATE, C12-15 ALKYL BENZOATE, HYDROGENATED POLY(C6-14OLEFIN), PEG-8 GLYCERYL ISOSTEARATE, CAPRYLIC/CAPRIC TRIGLYCERIDE, PENTAERYTHRITYL TETRAETHYLHEXANOATE, PENTAERYTHRITYL TETRAISOSTEARATE, HYDROGENATED POLYISOBUTENE, COCOS NUCIFERA (COCONUT) OIL, PYRUS MALUS (APPLE ) SEED OIL(99.5ppm), PYRUS MALUS (APPLE) FRUIT EXTRACT, CITRUS UNSHIU PEEL EXTRACT, ORCHID EXTRACT, CAMELLIA SINENSIS LEAF EXTRACT, CAMELLIA JAPONICA LEAF EXTRACT, OPUNTIA COCCINELLIFERA , FRUIT EXTRACT, BUTYLENE GLYCOL, COCO-CAPRYLATE/CAPRATE, FRAGRANCE',
                    usage: 'When first trying the product, it is recommended to use it once or twice a week for one minute. The frequency of use can be gradually increased depending on the skin condition. \n1. After cleansing, lightly pat your skin dry. \n2. Apply 2 drops of product on the entire face or on the areas of concern and leave it for 1 minute. Gently massage onto face with fingers. \n3. After 1 minute, rinse thoroughly with lukewarm water. After cleansing, apply the skincare you normally use to prevent the skin from drying out. ',
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
                    id : 33,
                    description: "Melt-In Moisture Cleansing Balm: A cleanser packed with powerful greens and rich Avocado Oil to melt away all impurities and refresh the skin. Its unique formula effectively cleanses without irritation, delivering a dose of hydration, leaving behind only a balanced, satisfied, and glowing skin. Indulge in the Moment: Rich and buttery, this balm turns cleansing from a routine to a ritual. The smooth and lush texture quickly melts into the skin, easily emulsifying to dissolve impurities without irritation. Gentle on Skin: Using only the gentlest ingredients, the PURITO From Green Avocado Cleansing Balm can be used without the fear of dryness or irritation Nourish with Nature: Formulated with Kale Leaf, Spinach Leaf, Broccoli, Mugwort Leaf, and Cabbage Leaf extracts, the balm is made to soothe the skin and boost its elasticity to reveal a soft and supple, radiant complexion.",
                    ingredients: 'Avocado Oil, Green Flora Complex and Watermelon Seed & Baobab Seed Oil Blend work together to gently dissolve makeup, dirt, sunscreen and other impurities.',
                    usage: 'Apply evenly to your face, body, or any other areas that need sun protection before sun exposure. Reapply every 2-3 hours, especially after sweating, swimming, or towel drying.',
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
                    id : 34,
                    description: "A moisturizer-like sunscreen offers SPF50+ PA++++ sun protection with a non-sticky texture, made for sensitive skin. Korean Centella Asiatica offers skin soothing, Brown Algae Extract offers anti-pollution, and Hyaluronic Acid maintains hydration.A fast-absorbing, weightless formula that leaves the skin moisturized and dewy without any greasy residue. Crafted to shield the skin from urban stressors, it effectively blocks harmful UV rays while creating a barrier against pollutants like fine dust. SPF/PA Clinical Study Results for sun protector factor and strong urban defense with the fine dust adhesion prevention test and two skin irritation tests completed. Ultralight, moisturizer-like daily sunscreen with a non-sticky texture that leaves the skin moisturized and dewy, without any greasy residue. Thriving in Korea's four seasons, Korean Centella brings stronger calming benefits. Enduring the Korean winter boosts the plant's active compounds, making its soothing effect even more powerful.",
                    ingredients: 'Avocado Oil, Green Flora Complex and Watermelon Seed & Baobab Seed Oil Blend work together to gently dissolve makeup, dirt, sunscreen and other impurities.',
                    usage: '1. Apply generously 15 minutes before sun exposure.\n2. Reapply every two hours or as necessary and immediately after extensive sweating.',
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
                            rating: 2,
                        },
            
                    ],
                },
                {
                    id : 35,
                    description: "Refreshing gel cream with nourishing Avena Sativa (Oat) Seed Water instantly calms dry and sensitive skin. The lightweight clear texture softly melts on the skin, easily seeping into its layers. This gel cream improves skin's moisture level, and soothes hypersensitivity, keeping the skin balanced and vibrant. The combination of oat and panthenol provides a refreshing splash of hydration and additional nutrients while creating a protective barrier. Avena Sativa (Oat) Seed Water(77%) is a gentle ingredient that calms irritated skin. Rich in antioxidants and hydrating properties, this ingredient instantly improves the skin's moisture barrier. It is particularly suitable for sensitive skin. Squalane rapidly penetrates the skin to instantly hydrate and lock in moisture. This replenishing facial oil works to boost elasticity, nourish, soothe, and smooth out dehydration lines. Beta-Glucan is a humectant that effectively soothes and calms sensitive skin. It smoothes fine lines, providing hydrating and plumping benefits to the skin. This ingredient is also enriched with antioxidant properties to counteract environmental stressors.",
                    ingredients: 'Water, Oryza Sativa (Rice) Extract (30%), Dibutyl Adipate, Propanediol, Diethylamino Hydroxybenzoyl Hexyl Benzoate, Polymethylsilsesquioxane, Ethylhexyl Triazone, Niacinamide, Methylene Bis-benzotriazolyl Tetramethylbutylphenol, Coco-caprylate/Caprate, Caprylyl Methicone, Diethylhexyl Butamido Triazone, Glycerin, Butylene Glycol, Oryza Sativa (Rice) Germ Extract, Camellia Sinensis Leaf Extract, Lactobacillus/Pumpkin Ferment Extract, Bacillus/Soybean Ferment Extract, Saccharum Officinarum (Sugarcane) Extract, Macrocystis Pyrifera (Kelp) Extract, Cocos Nucifera (Coconut) Fruit Extract, Panax Ginseng Root Extract, Camellia Sinensis Leaf Extract, Monascus/Rice Ferment, Pentylene Glycol, Behenyl Alcohol, Poly C10-30 Alkyl Acrylate, Polyglyceryl-3 Methylglucose Distearate, Decyl Glucoside, Tromethamine, Carbomer, Acrylates/C10-30 Alkyl Acrylate Crosspolymer, 1,2-Hexanediol,Sodium Stearoyl Glutamate, Polyacrylate Crosspolymer-6',
                    usage: 'Take an appropirate amount of sunscreen and apply it onto your face and neck',
                    reviews: [
                        {
                            profile: 'https://d2gwgwt9a7yxle.cloudfront.net/what_is_user_id_in_net_banking_mobile_871b681e52.jp',
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
                            rating: 4,
                        },
                        {
                            profile: 'https://cdn.gobankingrates.com/wp-content/uploads/2024/01/a-woman-smiles-at-work-while-look-at-her-phone-iStock-1460124878.jpg?w=675&quality=75&webp=1',
                            name: 'Li Emma',
                            date: 'October 30, 2024 1:50 AM',
                            comment: "You only need one squirt! It has light coverage, and my skin reacted well to it. I am on automatic delivery, which should indicate it's a good product.",
                            rating: 4,
                        },
            
                    ],
                },
                {
                    id: 36,
                    description: 'A hypoallergenic and pore clarifying 3-in-1 cleansing balm formulated especially for oily and breakout prone skin to target clogged pores, excess oil and waterproof makeup while deeply cleansing and replenishing moisture levels. FOR ACNE PRONE & OILY SKIN TYPES - Formulated with jojoba oil and a blend of AHA, BHA, LHA to gently remove exfoliate away excess dead skin cells and cleanse pores for a truly deep cleanse.',
                    ingredients: 'CETYL ETHYLHEXANOATE, TRIETHYLHEXANOIN, POLYGLYCERYL-10 DIOLEATE, C12-15 ALKYL BENZOATE, HYDROGENATED POLY(C6-14OLEFIN), PEG-8 GLYCERYL ISOSTEARATE, CAPRYLIC/CAPRIC TRIGLYCERIDE, PENTAERYTHRITYL TETRAETHYLHEXANOATE, PENTAERYTHRITYL TETRAISOSTEARATE, HYDROGENATED POLYISOBUTENE, COCOS NUCIFERA (COCONUT) OIL, PYRUS MALUS (APPLE ) SEED OIL(99.5ppm), PYRUS MALUS (APPLE) FRUIT EXTRACT, CITRUS UNSHIU PEEL EXTRACT, ORCHID EXTRACT, CAMELLIA SINENSIS LEAF EXTRACT, CAMELLIA JAPONICA LEAF EXTRACT, OPUNTIA COCCINELLIFERA , FRUIT EXTRACT, BUTYLENE GLYCOL, COCO-CAPRYLATE/CAPRATE, FRAGRANCE',
                    usage: 'When first trying the product, it is recommended to use it once or twice a week for one minute. The frequency of use can be gradually increased depending on the skin condition. \n1. After cleansing, lightly pat your skin dry. \n2. Apply 2 drops of product on the entire face or on the areas of concern and leave it for 1 minute. Gently massage onto face with fingers. \n3. After 1 minute, rinse thoroughly with lukewarm water. After cleansing, apply the skincare you normally use to prevent the skin from drying out. ',
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
                    id : 37,
                    description: "Melt-In Moisture Cleansing Balm: A cleanser packed with powerful greens and rich Avocado Oil to melt away all impurities and refresh the skin. Its unique formula effectively cleanses without irritation, delivering a dose of hydration, leaving behind only a balanced, satisfied, and glowing skin. Indulge in the Moment: Rich and buttery, this balm turns cleansing from a routine to a ritual. The smooth and lush texture quickly melts into the skin, easily emulsifying to dissolve impurities without irritation. Gentle on Skin: Using only the gentlest ingredients, the PURITO From Green Avocado Cleansing Balm can be used without the fear of dryness or irritation Nourish with Nature: Formulated with Kale Leaf, Spinach Leaf, Broccoli, Mugwort Leaf, and Cabbage Leaf extracts, the balm is made to soothe the skin and boost its elasticity to reveal a soft and supple, radiant complexion.",
                    ingredients: 'Avocado Oil, Green Flora Complex and Watermelon Seed & Baobab Seed Oil Blend work together to gently dissolve makeup, dirt, sunscreen and other impurities.',
                    usage: 'Apply evenly to your face, body, or any other areas that need sun protection before sun exposure. Reapply every 2-3 hours, especially after sweating, swimming, or towel drying.',
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
                    id : 38,
                    description: "A moisturizer-like sunscreen offers SPF50+ PA++++ sun protection with a non-sticky texture, made for sensitive skin. Korean Centella Asiatica offers skin soothing, Brown Algae Extract offers anti-pollution, and Hyaluronic Acid maintains hydration.A fast-absorbing, weightless formula that leaves the skin moisturized and dewy without any greasy residue. Crafted to shield the skin from urban stressors, it effectively blocks harmful UV rays while creating a barrier against pollutants like fine dust. SPF/PA Clinical Study Results for sun protector factor and strong urban defense with the fine dust adhesion prevention test and two skin irritation tests completed. Ultralight, moisturizer-like daily sunscreen with a non-sticky texture that leaves the skin moisturized and dewy, without any greasy residue. Thriving in Korea's four seasons, Korean Centella brings stronger calming benefits. Enduring the Korean winter boosts the plant's active compounds, making its soothing effect even more powerful.",
                    ingredients: 'Avocado Oil, Green Flora Complex and Watermelon Seed & Baobab Seed Oil Blend work together to gently dissolve makeup, dirt, sunscreen and other impurities.',
                    usage: '1. Apply generously 15 minutes before sun exposure.\n2. Reapply every two hours or as necessary and immediately after extensive sweating.',
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
                            rating: 2,
                        },
            
                    ],
                },
                {
                    id : 39,
                    description: "Refreshing gel cream with nourishing Avena Sativa (Oat) Seed Water instantly calms dry and sensitive skin. The lightweight clear texture softly melts on the skin, easily seeping into its layers. This gel cream improves skin's moisture level, and soothes hypersensitivity, keeping the skin balanced and vibrant. The combination of oat and panthenol provides a refreshing splash of hydration and additional nutrients while creating a protective barrier. Avena Sativa (Oat) Seed Water(77%) is a gentle ingredient that calms irritated skin. Rich in antioxidants and hydrating properties, this ingredient instantly improves the skin's moisture barrier. It is particularly suitable for sensitive skin. Squalane rapidly penetrates the skin to instantly hydrate and lock in moisture. This replenishing facial oil works to boost elasticity, nourish, soothe, and smooth out dehydration lines. Beta-Glucan is a humectant that effectively soothes and calms sensitive skin. It smoothes fine lines, providing hydrating and plumping benefits to the skin. This ingredient is also enriched with antioxidant properties to counteract environmental stressors.",
                    ingredients: 'Water, Oryza Sativa (Rice) Extract (30%), Dibutyl Adipate, Propanediol, Diethylamino Hydroxybenzoyl Hexyl Benzoate, Polymethylsilsesquioxane, Ethylhexyl Triazone, Niacinamide, Methylene Bis-benzotriazolyl Tetramethylbutylphenol, Coco-caprylate/Caprate, Caprylyl Methicone, Diethylhexyl Butamido Triazone, Glycerin, Butylene Glycol, Oryza Sativa (Rice) Germ Extract, Camellia Sinensis Leaf Extract, Lactobacillus/Pumpkin Ferment Extract, Bacillus/Soybean Ferment Extract, Saccharum Officinarum (Sugarcane) Extract, Macrocystis Pyrifera (Kelp) Extract, Cocos Nucifera (Coconut) Fruit Extract, Panax Ginseng Root Extract, Camellia Sinensis Leaf Extract, Monascus/Rice Ferment, Pentylene Glycol, Behenyl Alcohol, Poly C10-30 Alkyl Acrylate, Polyglyceryl-3 Methylglucose Distearate, Decyl Glucoside, Tromethamine, Carbomer, Acrylates/C10-30 Alkyl Acrylate Crosspolymer, 1,2-Hexanediol,Sodium Stearoyl Glutamate, Polyacrylate Crosspolymer-6',
                    usage: 'Take an appropirate amount of sunscreen and apply it onto your face and neck',
                    reviews: [
                        {
                            profile: 'https://d2gwgwt9a7yxle.cloudfront.net/what_is_user_id_in_net_banking_mobile_871b681e52.jp',
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
                            rating: 4,
                        },
                        {
                            profile: 'https://cdn.gobankingrates.com/wp-content/uploads/2024/01/a-woman-smiles-at-work-while-look-at-her-phone-iStock-1460124878.jpg?w=675&quality=75&webp=1',
                            name: 'Li Emma',
                            date: 'October 30, 2024 1:50 AM',
                            comment: "You only need one squirt! It has light coverage, and my skin reacted well to it. I am on automatic delivery, which should indicate it's a good product.",
                            rating: 4,
                        },
            
                    ],
                },
                {
                    id: 40,
                    description: 'A hypoallergenic and pore clarifying 3-in-1 cleansing balm formulated especially for oily and breakout prone skin to target clogged pores, excess oil and waterproof makeup while deeply cleansing and replenishing moisture levels. FOR ACNE PRONE & OILY SKIN TYPES - Formulated with jojoba oil and a blend of AHA, BHA, LHA to gently remove exfoliate away excess dead skin cells and cleanse pores for a truly deep cleanse.',
                    ingredients: 'CETYL ETHYLHEXANOATE, TRIETHYLHEXANOIN, POLYGLYCERYL-10 DIOLEATE, C12-15 ALKYL BENZOATE, HYDROGENATED POLY(C6-14OLEFIN), PEG-8 GLYCERYL ISOSTEARATE, CAPRYLIC/CAPRIC TRIGLYCERIDE, PENTAERYTHRITYL TETRAETHYLHEXANOATE, PENTAERYTHRITYL TETRAISOSTEARATE, HYDROGENATED POLYISOBUTENE, COCOS NUCIFERA (COCONUT) OIL, PYRUS MALUS (APPLE ) SEED OIL(99.5ppm), PYRUS MALUS (APPLE) FRUIT EXTRACT, CITRUS UNSHIU PEEL EXTRACT, ORCHID EXTRACT, CAMELLIA SINENSIS LEAF EXTRACT, CAMELLIA JAPONICA LEAF EXTRACT, OPUNTIA COCCINELLIFERA , FRUIT EXTRACT, BUTYLENE GLYCOL, COCO-CAPRYLATE/CAPRATE, FRAGRANCE',
                    usage: 'When first trying the product, it is recommended to use it once or twice a week for one minute. The frequency of use can be gradually increased depending on the skin condition. \n1. After cleansing, lightly pat your skin dry. \n2. Apply 2 drops of product on the entire face or on the areas of concern and leave it for 1 minute. Gently massage onto face with fingers. \n3. After 1 minute, rinse thoroughly with lukewarm water. After cleansing, apply the skincare you normally use to prevent the skin from drying out. ',
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
                    id : 41,
                    description: "Melt-In Moisture Cleansing Balm: A cleanser packed with powerful greens and rich Avocado Oil to melt away all impurities and refresh the skin. Its unique formula effectively cleanses without irritation, delivering a dose of hydration, leaving behind only a balanced, satisfied, and glowing skin. Indulge in the Moment: Rich and buttery, this balm turns cleansing from a routine to a ritual. The smooth and lush texture quickly melts into the skin, easily emulsifying to dissolve impurities without irritation. Gentle on Skin: Using only the gentlest ingredients, the PURITO From Green Avocado Cleansing Balm can be used without the fear of dryness or irritation Nourish with Nature: Formulated with Kale Leaf, Spinach Leaf, Broccoli, Mugwort Leaf, and Cabbage Leaf extracts, the balm is made to soothe the skin and boost its elasticity to reveal a soft and supple, radiant complexion.",
                    ingredients: 'Avocado Oil, Green Flora Complex and Watermelon Seed & Baobab Seed Oil Blend work together to gently dissolve makeup, dirt, sunscreen and other impurities.',
                    usage: 'Apply evenly to your face, body, or any other areas that need sun protection before sun exposure. Reapply every 2-3 hours, especially after sweating, swimming, or towel drying.',
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
                    id : 42,
                    description: "A moisturizer-like sunscreen offers SPF50+ PA++++ sun protection with a non-sticky texture, made for sensitive skin. Korean Centella Asiatica offers skin soothing, Brown Algae Extract offers anti-pollution, and Hyaluronic Acid maintains hydration.A fast-absorbing, weightless formula that leaves the skin moisturized and dewy without any greasy residue. Crafted to shield the skin from urban stressors, it effectively blocks harmful UV rays while creating a barrier against pollutants like fine dust. SPF/PA Clinical Study Results for sun protector factor and strong urban defense with the fine dust adhesion prevention test and two skin irritation tests completed. Ultralight, moisturizer-like daily sunscreen with a non-sticky texture that leaves the skin moisturized and dewy, without any greasy residue. Thriving in Korea's four seasons, Korean Centella brings stronger calming benefits. Enduring the Korean winter boosts the plant's active compounds, making its soothing effect even more powerful.",
                    ingredients: 'Avocado Oil, Green Flora Complex and Watermelon Seed & Baobab Seed Oil Blend work together to gently dissolve makeup, dirt, sunscreen and other impurities.',
                    usage: '1. Apply generously 15 minutes before sun exposure.\n2. Reapply every two hours or as necessary and immediately after extensive sweating.',
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
                            rating: 2,
                        },
            
                    ],
                },
                {
                    id : 43,
                    description: "Refreshing gel cream with nourishing Avena Sativa (Oat) Seed Water instantly calms dry and sensitive skin. The lightweight clear texture softly melts on the skin, easily seeping into its layers. This gel cream improves skin's moisture level, and soothes hypersensitivity, keeping the skin balanced and vibrant. The combination of oat and panthenol provides a refreshing splash of hydration and additional nutrients while creating a protective barrier. Avena Sativa (Oat) Seed Water(77%) is a gentle ingredient that calms irritated skin. Rich in antioxidants and hydrating properties, this ingredient instantly improves the skin's moisture barrier. It is particularly suitable for sensitive skin. Squalane rapidly penetrates the skin to instantly hydrate and lock in moisture. This replenishing facial oil works to boost elasticity, nourish, soothe, and smooth out dehydration lines. Beta-Glucan is a humectant that effectively soothes and calms sensitive skin. It smoothes fine lines, providing hydrating and plumping benefits to the skin. This ingredient is also enriched with antioxidant properties to counteract environmental stressors.",
                    ingredients: 'Water, Oryza Sativa (Rice) Extract (30%), Dibutyl Adipate, Propanediol, Diethylamino Hydroxybenzoyl Hexyl Benzoate, Polymethylsilsesquioxane, Ethylhexyl Triazone, Niacinamide, Methylene Bis-benzotriazolyl Tetramethylbutylphenol, Coco-caprylate/Caprate, Caprylyl Methicone, Diethylhexyl Butamido Triazone, Glycerin, Butylene Glycol, Oryza Sativa (Rice) Germ Extract, Camellia Sinensis Leaf Extract, Lactobacillus/Pumpkin Ferment Extract, Bacillus/Soybean Ferment Extract, Saccharum Officinarum (Sugarcane) Extract, Macrocystis Pyrifera (Kelp) Extract, Cocos Nucifera (Coconut) Fruit Extract, Panax Ginseng Root Extract, Camellia Sinensis Leaf Extract, Monascus/Rice Ferment, Pentylene Glycol, Behenyl Alcohol, Poly C10-30 Alkyl Acrylate, Polyglyceryl-3 Methylglucose Distearate, Decyl Glucoside, Tromethamine, Carbomer, Acrylates/C10-30 Alkyl Acrylate Crosspolymer, 1,2-Hexanediol,Sodium Stearoyl Glutamate, Polyacrylate Crosspolymer-6',
                    usage: 'Take an appropirate amount of sunscreen and apply it onto your face and neck',
                    reviews: [
                        {
                            profile: 'https://d2gwgwt9a7yxle.cloudfront.net/what_is_user_id_in_net_banking_mobile_871b681e52.jp',
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
                            rating: 4,
                        },
                        {
                            profile: 'https://cdn.gobankingrates.com/wp-content/uploads/2024/01/a-woman-smiles-at-work-while-look-at-her-phone-iStock-1460124878.jpg?w=675&quality=75&webp=1',
                            name: 'Li Emma',
                            date: 'October 30, 2024 1:50 AM',
                            comment: "You only need one squirt! It has light coverage, and my skin reacted well to it. I am on automatic delivery, which should indicate it's a good product.",
                            rating: 4,
                        },
            
                    ],
                },
                {
                    id: 44,
                    description: 'A hypoallergenic and pore clarifying 3-in-1 cleansing balm formulated especially for oily and breakout prone skin to target clogged pores, excess oil and waterproof makeup while deeply cleansing and replenishing moisture levels. FOR ACNE PRONE & OILY SKIN TYPES - Formulated with jojoba oil and a blend of AHA, BHA, LHA to gently remove exfoliate away excess dead skin cells and cleanse pores for a truly deep cleanse.',
                    ingredients: 'CETYL ETHYLHEXANOATE, TRIETHYLHEXANOIN, POLYGLYCERYL-10 DIOLEATE, C12-15 ALKYL BENZOATE, HYDROGENATED POLY(C6-14OLEFIN), PEG-8 GLYCERYL ISOSTEARATE, CAPRYLIC/CAPRIC TRIGLYCERIDE, PENTAERYTHRITYL TETRAETHYLHEXANOATE, PENTAERYTHRITYL TETRAISOSTEARATE, HYDROGENATED POLYISOBUTENE, COCOS NUCIFERA (COCONUT) OIL, PYRUS MALUS (APPLE ) SEED OIL(99.5ppm), PYRUS MALUS (APPLE) FRUIT EXTRACT, CITRUS UNSHIU PEEL EXTRACT, ORCHID EXTRACT, CAMELLIA SINENSIS LEAF EXTRACT, CAMELLIA JAPONICA LEAF EXTRACT, OPUNTIA COCCINELLIFERA , FRUIT EXTRACT, BUTYLENE GLYCOL, COCO-CAPRYLATE/CAPRATE, FRAGRANCE',
                    usage: 'When first trying the product, it is recommended to use it once or twice a week for one minute. The frequency of use can be gradually increased depending on the skin condition. \n1. After cleansing, lightly pat your skin dry. \n2. Apply 2 drops of product on the entire face or on the areas of concern and leave it for 1 minute. Gently massage onto face with fingers. \n3. After 1 minute, rinse thoroughly with lukewarm water. After cleansing, apply the skincare you normally use to prevent the skin from drying out. ',
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
                    id : 45,
                    description: "Melt-In Moisture Cleansing Balm: A cleanser packed with powerful greens and rich Avocado Oil to melt away all impurities and refresh the skin. Its unique formula effectively cleanses without irritation, delivering a dose of hydration, leaving behind only a balanced, satisfied, and glowing skin. Indulge in the Moment: Rich and buttery, this balm turns cleansing from a routine to a ritual. The smooth and lush texture quickly melts into the skin, easily emulsifying to dissolve impurities without irritation. Gentle on Skin: Using only the gentlest ingredients, the PURITO From Green Avocado Cleansing Balm can be used without the fear of dryness or irritation Nourish with Nature: Formulated with Kale Leaf, Spinach Leaf, Broccoli, Mugwort Leaf, and Cabbage Leaf extracts, the balm is made to soothe the skin and boost its elasticity to reveal a soft and supple, radiant complexion.",
                    ingredients: 'Avocado Oil, Green Flora Complex and Watermelon Seed & Baobab Seed Oil Blend work together to gently dissolve makeup, dirt, sunscreen and other impurities.',
                    usage: 'Apply evenly to your face, body, or any other areas that need sun protection before sun exposure. Reapply every 2-3 hours, especially after sweating, swimming, or towel drying.',
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
                    id : 46,
                    description: "A moisturizer-like sunscreen offers SPF50+ PA++++ sun protection with a non-sticky texture, made for sensitive skin. Korean Centella Asiatica offers skin soothing, Brown Algae Extract offers anti-pollution, and Hyaluronic Acid maintains hydration.A fast-absorbing, weightless formula that leaves the skin moisturized and dewy without any greasy residue. Crafted to shield the skin from urban stressors, it effectively blocks harmful UV rays while creating a barrier against pollutants like fine dust. SPF/PA Clinical Study Results for sun protector factor and strong urban defense with the fine dust adhesion prevention test and two skin irritation tests completed. Ultralight, moisturizer-like daily sunscreen with a non-sticky texture that leaves the skin moisturized and dewy, without any greasy residue. Thriving in Korea's four seasons, Korean Centella brings stronger calming benefits. Enduring the Korean winter boosts the plant's active compounds, making its soothing effect even more powerful.",
                    ingredients: 'Avocado Oil, Green Flora Complex and Watermelon Seed & Baobab Seed Oil Blend work together to gently dissolve makeup, dirt, sunscreen and other impurities.',
                    usage: '1. Apply generously 15 minutes before sun exposure.\n2. Reapply every two hours or as necessary and immediately after extensive sweating.',
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
                            rating: 2,
                        },
            
                    ],
                },
                {
                    id : 47,
                    description: "Refreshing gel cream with nourishing Avena Sativa (Oat) Seed Water instantly calms dry and sensitive skin. The lightweight clear texture softly melts on the skin, easily seeping into its layers. This gel cream improves skin's moisture level, and soothes hypersensitivity, keeping the skin balanced and vibrant. The combination of oat and panthenol provides a refreshing splash of hydration and additional nutrients while creating a protective barrier. Avena Sativa (Oat) Seed Water(77%) is a gentle ingredient that calms irritated skin. Rich in antioxidants and hydrating properties, this ingredient instantly improves the skin's moisture barrier. It is particularly suitable for sensitive skin. Squalane rapidly penetrates the skin to instantly hydrate and lock in moisture. This replenishing facial oil works to boost elasticity, nourish, soothe, and smooth out dehydration lines. Beta-Glucan is a humectant that effectively soothes and calms sensitive skin. It smoothes fine lines, providing hydrating and plumping benefits to the skin. This ingredient is also enriched with antioxidant properties to counteract environmental stressors.",
                    ingredients: 'Water, Oryza Sativa (Rice) Extract (30%), Dibutyl Adipate, Propanediol, Diethylamino Hydroxybenzoyl Hexyl Benzoate, Polymethylsilsesquioxane, Ethylhexyl Triazone, Niacinamide, Methylene Bis-benzotriazolyl Tetramethylbutylphenol, Coco-caprylate/Caprate, Caprylyl Methicone, Diethylhexyl Butamido Triazone, Glycerin, Butylene Glycol, Oryza Sativa (Rice) Germ Extract, Camellia Sinensis Leaf Extract, Lactobacillus/Pumpkin Ferment Extract, Bacillus/Soybean Ferment Extract, Saccharum Officinarum (Sugarcane) Extract, Macrocystis Pyrifera (Kelp) Extract, Cocos Nucifera (Coconut) Fruit Extract, Panax Ginseng Root Extract, Camellia Sinensis Leaf Extract, Monascus/Rice Ferment, Pentylene Glycol, Behenyl Alcohol, Poly C10-30 Alkyl Acrylate, Polyglyceryl-3 Methylglucose Distearate, Decyl Glucoside, Tromethamine, Carbomer, Acrylates/C10-30 Alkyl Acrylate Crosspolymer, 1,2-Hexanediol,Sodium Stearoyl Glutamate, Polyacrylate Crosspolymer-6',
                    usage: 'Take an appropirate amount of sunscreen and apply it onto your face and neck',
                    reviews: [
                        {
                            profile: 'https://d2gwgwt9a7yxle.cloudfront.net/what_is_user_id_in_net_banking_mobile_871b681e52.jp',
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
                            rating: 4,
                        },
                        {
                            profile: 'https://cdn.gobankingrates.com/wp-content/uploads/2024/01/a-woman-smiles-at-work-while-look-at-her-phone-iStock-1460124878.jpg?w=675&quality=75&webp=1',
                            name: 'Li Emma',
                            date: 'October 30, 2024 1:50 AM',
                            comment: "You only need one squirt! It has light coverage, and my skin reacted well to it. I am on automatic delivery, which should indicate it's a good product.",
                            rating: 4,
                        },
            
                    ],
                },
                {
                    id: 48,
                    description: 'A hypoallergenic and pore clarifying 3-in-1 cleansing balm formulated especially for oily and breakout prone skin to target clogged pores, excess oil and waterproof makeup while deeply cleansing and replenishing moisture levels. FOR ACNE PRONE & OILY SKIN TYPES - Formulated with jojoba oil and a blend of AHA, BHA, LHA to gently remove exfoliate away excess dead skin cells and cleanse pores for a truly deep cleanse.',
                    ingredients: 'CETYL ETHYLHEXANOATE, TRIETHYLHEXANOIN, POLYGLYCERYL-10 DIOLEATE, C12-15 ALKYL BENZOATE, HYDROGENATED POLY(C6-14OLEFIN), PEG-8 GLYCERYL ISOSTEARATE, CAPRYLIC/CAPRIC TRIGLYCERIDE, PENTAERYTHRITYL TETRAETHYLHEXANOATE, PENTAERYTHRITYL TETRAISOSTEARATE, HYDROGENATED POLYISOBUTENE, COCOS NUCIFERA (COCONUT) OIL, PYRUS MALUS (APPLE ) SEED OIL(99.5ppm), PYRUS MALUS (APPLE) FRUIT EXTRACT, CITRUS UNSHIU PEEL EXTRACT, ORCHID EXTRACT, CAMELLIA SINENSIS LEAF EXTRACT, CAMELLIA JAPONICA LEAF EXTRACT, OPUNTIA COCCINELLIFERA , FRUIT EXTRACT, BUTYLENE GLYCOL, COCO-CAPRYLATE/CAPRATE, FRAGRANCE',
                    usage: 'When first trying the product, it is recommended to use it once or twice a week for one minute. The frequency of use can be gradually increased depending on the skin condition. \n1. After cleansing, lightly pat your skin dry. \n2. Apply 2 drops of product on the entire face or on the areas of concern and leave it for 1 minute. Gently massage onto face with fingers. \n3. After 1 minute, rinse thoroughly with lukewarm water. After cleansing, apply the skincare you normally use to prevent the skin from drying out. ',
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
                    id : 49,
                    description: "Melt-In Moisture Cleansing Balm: A cleanser packed with powerful greens and rich Avocado Oil to melt away all impurities and refresh the skin. Its unique formula effectively cleanses without irritation, delivering a dose of hydration, leaving behind only a balanced, satisfied, and glowing skin. Indulge in the Moment: Rich and buttery, this balm turns cleansing from a routine to a ritual. The smooth and lush texture quickly melts into the skin, easily emulsifying to dissolve impurities without irritation. Gentle on Skin: Using only the gentlest ingredients, the PURITO From Green Avocado Cleansing Balm can be used without the fear of dryness or irritation Nourish with Nature: Formulated with Kale Leaf, Spinach Leaf, Broccoli, Mugwort Leaf, and Cabbage Leaf extracts, the balm is made to soothe the skin and boost its elasticity to reveal a soft and supple, radiant complexion.",
                    ingredients: 'Avocado Oil, Green Flora Complex and Watermelon Seed & Baobab Seed Oil Blend work together to gently dissolve makeup, dirt, sunscreen and other impurities.',
                    usage: 'Apply evenly to your face, body, or any other areas that need sun protection before sun exposure. Reapply every 2-3 hours, especially after sweating, swimming, or towel drying.',
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
                    id : 50,
                    description: "A moisturizer-like sunscreen offers SPF50+ PA++++ sun protection with a non-sticky texture, made for sensitive skin. Korean Centella Asiatica offers skin soothing, Brown Algae Extract offers anti-pollution, and Hyaluronic Acid maintains hydration.A fast-absorbing, weightless formula that leaves the skin moisturized and dewy without any greasy residue. Crafted to shield the skin from urban stressors, it effectively blocks harmful UV rays while creating a barrier against pollutants like fine dust. SPF/PA Clinical Study Results for sun protector factor and strong urban defense with the fine dust adhesion prevention test and two skin irritation tests completed. Ultralight, moisturizer-like daily sunscreen with a non-sticky texture that leaves the skin moisturized and dewy, without any greasy residue. Thriving in Korea's four seasons, Korean Centella brings stronger calming benefits. Enduring the Korean winter boosts the plant's active compounds, making its soothing effect even more powerful.",
                    ingredients: 'Avocado Oil, Green Flora Complex and Watermelon Seed & Baobab Seed Oil Blend work together to gently dissolve makeup, dirt, sunscreen and other impurities.',
                    usage: '1. Apply generously 15 minutes before sun exposure.\n2. Reapply every two hours or as necessary and immediately after extensive sweating.',
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
                            rating: 2,
                        },
            
                    ],
                },
                {
                    id : 51,
                    description: "Refreshing gel cream with nourishing Avena Sativa (Oat) Seed Water instantly calms dry and sensitive skin. The lightweight clear texture softly melts on the skin, easily seeping into its layers. This gel cream improves skin's moisture level, and soothes hypersensitivity, keeping the skin balanced and vibrant. The combination of oat and panthenol provides a refreshing splash of hydration and additional nutrients while creating a protective barrier. Avena Sativa (Oat) Seed Water(77%) is a gentle ingredient that calms irritated skin. Rich in antioxidants and hydrating properties, this ingredient instantly improves the skin's moisture barrier. It is particularly suitable for sensitive skin. Squalane rapidly penetrates the skin to instantly hydrate and lock in moisture. This replenishing facial oil works to boost elasticity, nourish, soothe, and smooth out dehydration lines. Beta-Glucan is a humectant that effectively soothes and calms sensitive skin. It smoothes fine lines, providing hydrating and plumping benefits to the skin. This ingredient is also enriched with antioxidant properties to counteract environmental stressors.",
                    ingredients: 'Water, Oryza Sativa (Rice) Extract (30%), Dibutyl Adipate, Propanediol, Diethylamino Hydroxybenzoyl Hexyl Benzoate, Polymethylsilsesquioxane, Ethylhexyl Triazone, Niacinamide, Methylene Bis-benzotriazolyl Tetramethylbutylphenol, Coco-caprylate/Caprate, Caprylyl Methicone, Diethylhexyl Butamido Triazone, Glycerin, Butylene Glycol, Oryza Sativa (Rice) Germ Extract, Camellia Sinensis Leaf Extract, Lactobacillus/Pumpkin Ferment Extract, Bacillus/Soybean Ferment Extract, Saccharum Officinarum (Sugarcane) Extract, Macrocystis Pyrifera (Kelp) Extract, Cocos Nucifera (Coconut) Fruit Extract, Panax Ginseng Root Extract, Camellia Sinensis Leaf Extract, Monascus/Rice Ferment, Pentylene Glycol, Behenyl Alcohol, Poly C10-30 Alkyl Acrylate, Polyglyceryl-3 Methylglucose Distearate, Decyl Glucoside, Tromethamine, Carbomer, Acrylates/C10-30 Alkyl Acrylate Crosspolymer, 1,2-Hexanediol,Sodium Stearoyl Glutamate, Polyacrylate Crosspolymer-6',
                    usage: 'Take an appropirate amount of sunscreen and apply it onto your face and neck',
                    reviews: [
                        {
                            profile: 'https://d2gwgwt9a7yxle.cloudfront.net/what_is_user_id_in_net_banking_mobile_871b681e52.jp',
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
                            rating: 4,
                        },
                        {
                            profile: 'https://cdn.gobankingrates.com/wp-content/uploads/2024/01/a-woman-smiles-at-work-while-look-at-her-phone-iStock-1460124878.jpg?w=675&quality=75&webp=1',
                            name: 'Li Emma',
                            date: 'October 30, 2024 1:50 AM',
                            comment: "You only need one squirt! It has light coverage, and my skin reacted well to it. I am on automatic delivery, which should indicate it's a good product.",
                            rating: 4,
                        },
            
                    ],
                },
                {
                    id: 52,
                    description: 'A hypoallergenic and pore clarifying 3-in-1 cleansing balm formulated especially for oily and breakout prone skin to target clogged pores, excess oil and waterproof makeup while deeply cleansing and replenishing moisture levels. FOR ACNE PRONE & OILY SKIN TYPES - Formulated with jojoba oil and a blend of AHA, BHA, LHA to gently remove exfoliate away excess dead skin cells and cleanse pores for a truly deep cleanse.',
                    ingredients: 'CETYL ETHYLHEXANOATE, TRIETHYLHEXANOIN, POLYGLYCERYL-10 DIOLEATE, C12-15 ALKYL BENZOATE, HYDROGENATED POLY(C6-14OLEFIN), PEG-8 GLYCERYL ISOSTEARATE, CAPRYLIC/CAPRIC TRIGLYCERIDE, PENTAERYTHRITYL TETRAETHYLHEXANOATE, PENTAERYTHRITYL TETRAISOSTEARATE, HYDROGENATED POLYISOBUTENE, COCOS NUCIFERA (COCONUT) OIL, PYRUS MALUS (APPLE ) SEED OIL(99.5ppm), PYRUS MALUS (APPLE) FRUIT EXTRACT, CITRUS UNSHIU PEEL EXTRACT, ORCHID EXTRACT, CAMELLIA SINENSIS LEAF EXTRACT, CAMELLIA JAPONICA LEAF EXTRACT, OPUNTIA COCCINELLIFERA , FRUIT EXTRACT, BUTYLENE GLYCOL, COCO-CAPRYLATE/CAPRATE, FRAGRANCE',
                    usage: 'When first trying the product, it is recommended to use it once or twice a week for one minute. The frequency of use can be gradually increased depending on the skin condition. \n1. After cleansing, lightly pat your skin dry. \n2. Apply 2 drops of product on the entire face or on the areas of concern and leave it for 1 minute. Gently massage onto face with fingers. \n3. After 1 minute, rinse thoroughly with lukewarm water. After cleansing, apply the skincare you normally use to prevent the skin from drying out. ',
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
                    id : 53,
                    description: "Melt-In Moisture Cleansing Balm: A cleanser packed with powerful greens and rich Avocado Oil to melt away all impurities and refresh the skin. Its unique formula effectively cleanses without irritation, delivering a dose of hydration, leaving behind only a balanced, satisfied, and glowing skin. Indulge in the Moment: Rich and buttery, this balm turns cleansing from a routine to a ritual. The smooth and lush texture quickly melts into the skin, easily emulsifying to dissolve impurities without irritation. Gentle on Skin: Using only the gentlest ingredients, the PURITO From Green Avocado Cleansing Balm can be used without the fear of dryness or irritation Nourish with Nature: Formulated with Kale Leaf, Spinach Leaf, Broccoli, Mugwort Leaf, and Cabbage Leaf extracts, the balm is made to soothe the skin and boost its elasticity to reveal a soft and supple, radiant complexion.",
                    ingredients: 'Avocado Oil, Green Flora Complex and Watermelon Seed & Baobab Seed Oil Blend work together to gently dissolve makeup, dirt, sunscreen and other impurities.',
                    usage: 'Apply evenly to your face, body, or any other areas that need sun protection before sun exposure. Reapply every 2-3 hours, especially after sweating, swimming, or towel drying.',
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
                    id : 54,
                    description: "A moisturizer-like sunscreen offers SPF50+ PA++++ sun protection with a non-sticky texture, made for sensitive skin. Korean Centella Asiatica offers skin soothing, Brown Algae Extract offers anti-pollution, and Hyaluronic Acid maintains hydration.A fast-absorbing, weightless formula that leaves the skin moisturized and dewy without any greasy residue. Crafted to shield the skin from urban stressors, it effectively blocks harmful UV rays while creating a barrier against pollutants like fine dust. SPF/PA Clinical Study Results for sun protector factor and strong urban defense with the fine dust adhesion prevention test and two skin irritation tests completed. Ultralight, moisturizer-like daily sunscreen with a non-sticky texture that leaves the skin moisturized and dewy, without any greasy residue. Thriving in Korea's four seasons, Korean Centella brings stronger calming benefits. Enduring the Korean winter boosts the plant's active compounds, making its soothing effect even more powerful.",
                    ingredients: 'Avocado Oil, Green Flora Complex and Watermelon Seed & Baobab Seed Oil Blend work together to gently dissolve makeup, dirt, sunscreen and other impurities.',
                    usage: '1. Apply generously 15 minutes before sun exposure.\n2. Reapply every two hours or as necessary and immediately after extensive sweating.',
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
                            rating: 2,
                        },
            
                    ],
                },
                {
                    id : 55,
                    description: "Refreshing gel cream with nourishing Avena Sativa (Oat) Seed Water instantly calms dry and sensitive skin. The lightweight clear texture softly melts on the skin, easily seeping into its layers. This gel cream improves skin's moisture level, and soothes hypersensitivity, keeping the skin balanced and vibrant. The combination of oat and panthenol provides a refreshing splash of hydration and additional nutrients while creating a protective barrier. Avena Sativa (Oat) Seed Water(77%) is a gentle ingredient that calms irritated skin. Rich in antioxidants and hydrating properties, this ingredient instantly improves the skin's moisture barrier. It is particularly suitable for sensitive skin. Squalane rapidly penetrates the skin to instantly hydrate and lock in moisture. This replenishing facial oil works to boost elasticity, nourish, soothe, and smooth out dehydration lines. Beta-Glucan is a humectant that effectively soothes and calms sensitive skin. It smoothes fine lines, providing hydrating and plumping benefits to the skin. This ingredient is also enriched with antioxidant properties to counteract environmental stressors.",
                    ingredients: 'Water, Oryza Sativa (Rice) Extract (30%), Dibutyl Adipate, Propanediol, Diethylamino Hydroxybenzoyl Hexyl Benzoate, Polymethylsilsesquioxane, Ethylhexyl Triazone, Niacinamide, Methylene Bis-benzotriazolyl Tetramethylbutylphenol, Coco-caprylate/Caprate, Caprylyl Methicone, Diethylhexyl Butamido Triazone, Glycerin, Butylene Glycol, Oryza Sativa (Rice) Germ Extract, Camellia Sinensis Leaf Extract, Lactobacillus/Pumpkin Ferment Extract, Bacillus/Soybean Ferment Extract, Saccharum Officinarum (Sugarcane) Extract, Macrocystis Pyrifera (Kelp) Extract, Cocos Nucifera (Coconut) Fruit Extract, Panax Ginseng Root Extract, Camellia Sinensis Leaf Extract, Monascus/Rice Ferment, Pentylene Glycol, Behenyl Alcohol, Poly C10-30 Alkyl Acrylate, Polyglyceryl-3 Methylglucose Distearate, Decyl Glucoside, Tromethamine, Carbomer, Acrylates/C10-30 Alkyl Acrylate Crosspolymer, 1,2-Hexanediol,Sodium Stearoyl Glutamate, Polyacrylate Crosspolymer-6',
                    usage: 'Take an appropirate amount of sunscreen and apply it onto your face and neck',
                    reviews: [
                        {
                            profile: 'https://d2gwgwt9a7yxle.cloudfront.net/what_is_user_id_in_net_banking_mobile_871b681e52.jp',
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
                            rating: 4,
                        },
                        {
                            profile: 'https://cdn.gobankingrates.com/wp-content/uploads/2024/01/a-woman-smiles-at-work-while-look-at-her-phone-iStock-1460124878.jpg?w=675&quality=75&webp=1',
                            name: 'Li Emma',
                            date: 'October 30, 2024 1:50 AM',
                            comment: "You only need one squirt! It has light coverage, and my skin reacted well to it. I am on automatic delivery, which should indicate it's a good product.",
                            rating: 4,
                        },
            
                    ],
                },
                {
                    id: 56,
                    description: 'A hypoallergenic and pore clarifying 3-in-1 cleansing balm formulated especially for oily and breakout prone skin to target clogged pores, excess oil and waterproof makeup while deeply cleansing and replenishing moisture levels. FOR ACNE PRONE & OILY SKIN TYPES - Formulated with jojoba oil and a blend of AHA, BHA, LHA to gently remove exfoliate away excess dead skin cells and cleanse pores for a truly deep cleanse.',
                    ingredients: 'CETYL ETHYLHEXANOATE, TRIETHYLHEXANOIN, POLYGLYCERYL-10 DIOLEATE, C12-15 ALKYL BENZOATE, HYDROGENATED POLY(C6-14OLEFIN), PEG-8 GLYCERYL ISOSTEARATE, CAPRYLIC/CAPRIC TRIGLYCERIDE, PENTAERYTHRITYL TETRAETHYLHEXANOATE, PENTAERYTHRITYL TETRAISOSTEARATE, HYDROGENATED POLYISOBUTENE, COCOS NUCIFERA (COCONUT) OIL, PYRUS MALUS (APPLE ) SEED OIL(99.5ppm), PYRUS MALUS (APPLE) FRUIT EXTRACT, CITRUS UNSHIU PEEL EXTRACT, ORCHID EXTRACT, CAMELLIA SINENSIS LEAF EXTRACT, CAMELLIA JAPONICA LEAF EXTRACT, OPUNTIA COCCINELLIFERA , FRUIT EXTRACT, BUTYLENE GLYCOL, COCO-CAPRYLATE/CAPRATE, FRAGRANCE',
                    usage: 'When first trying the product, it is recommended to use it once or twice a week for one minute. The frequency of use can be gradually increased depending on the skin condition. \n1. After cleansing, lightly pat your skin dry. \n2. Apply 2 drops of product on the entire face or on the areas of concern and leave it for 1 minute. Gently massage onto face with fingers. \n3. After 1 minute, rinse thoroughly with lukewarm water. After cleansing, apply the skincare you normally use to prevent the skin from drying out. ',
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
                    id : 57,
                    description: "Melt-In Moisture Cleansing Balm: A cleanser packed with powerful greens and rich Avocado Oil to melt away all impurities and refresh the skin. Its unique formula effectively cleanses without irritation, delivering a dose of hydration, leaving behind only a balanced, satisfied, and glowing skin. Indulge in the Moment: Rich and buttery, this balm turns cleansing from a routine to a ritual. The smooth and lush texture quickly melts into the skin, easily emulsifying to dissolve impurities without irritation. Gentle on Skin: Using only the gentlest ingredients, the PURITO From Green Avocado Cleansing Balm can be used without the fear of dryness or irritation Nourish with Nature: Formulated with Kale Leaf, Spinach Leaf, Broccoli, Mugwort Leaf, and Cabbage Leaf extracts, the balm is made to soothe the skin and boost its elasticity to reveal a soft and supple, radiant complexion.",
                    ingredients: 'Avocado Oil, Green Flora Complex and Watermelon Seed & Baobab Seed Oil Blend work together to gently dissolve makeup, dirt, sunscreen and other impurities.',
                    usage: 'Apply evenly to your face, body, or any other areas that need sun protection before sun exposure. Reapply every 2-3 hours, especially after sweating, swimming, or towel drying.',
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
                    id : 58,
                    description: "A moisturizer-like sunscreen offers SPF50+ PA++++ sun protection with a non-sticky texture, made for sensitive skin. Korean Centella Asiatica offers skin soothing, Brown Algae Extract offers anti-pollution, and Hyaluronic Acid maintains hydration.A fast-absorbing, weightless formula that leaves the skin moisturized and dewy without any greasy residue. Crafted to shield the skin from urban stressors, it effectively blocks harmful UV rays while creating a barrier against pollutants like fine dust. SPF/PA Clinical Study Results for sun protector factor and strong urban defense with the fine dust adhesion prevention test and two skin irritation tests completed. Ultralight, moisturizer-like daily sunscreen with a non-sticky texture that leaves the skin moisturized and dewy, without any greasy residue. Thriving in Korea's four seasons, Korean Centella brings stronger calming benefits. Enduring the Korean winter boosts the plant's active compounds, making its soothing effect even more powerful.",
                    ingredients: 'Avocado Oil, Green Flora Complex and Watermelon Seed & Baobab Seed Oil Blend work together to gently dissolve makeup, dirt, sunscreen and other impurities.',
                    usage: '1. Apply generously 15 minutes before sun exposure.\n2. Reapply every two hours or as necessary and immediately after extensive sweating.',
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
                            rating: 2,
                        },
            
                    ],
                },
                {
                    id : 59,
                    description: "Refreshing gel cream with nourishing Avena Sativa (Oat) Seed Water instantly calms dry and sensitive skin. The lightweight clear texture softly melts on the skin, easily seeping into its layers. This gel cream improves skin's moisture level, and soothes hypersensitivity, keeping the skin balanced and vibrant. The combination of oat and panthenol provides a refreshing splash of hydration and additional nutrients while creating a protective barrier. Avena Sativa (Oat) Seed Water(77%) is a gentle ingredient that calms irritated skin. Rich in antioxidants and hydrating properties, this ingredient instantly improves the skin's moisture barrier. It is particularly suitable for sensitive skin. Squalane rapidly penetrates the skin to instantly hydrate and lock in moisture. This replenishing facial oil works to boost elasticity, nourish, soothe, and smooth out dehydration lines. Beta-Glucan is a humectant that effectively soothes and calms sensitive skin. It smoothes fine lines, providing hydrating and plumping benefits to the skin. This ingredient is also enriched with antioxidant properties to counteract environmental stressors.",
                    ingredients: 'Water, Oryza Sativa (Rice) Extract (30%), Dibutyl Adipate, Propanediol, Diethylamino Hydroxybenzoyl Hexyl Benzoate, Polymethylsilsesquioxane, Ethylhexyl Triazone, Niacinamide, Methylene Bis-benzotriazolyl Tetramethylbutylphenol, Coco-caprylate/Caprate, Caprylyl Methicone, Diethylhexyl Butamido Triazone, Glycerin, Butylene Glycol, Oryza Sativa (Rice) Germ Extract, Camellia Sinensis Leaf Extract, Lactobacillus/Pumpkin Ferment Extract, Bacillus/Soybean Ferment Extract, Saccharum Officinarum (Sugarcane) Extract, Macrocystis Pyrifera (Kelp) Extract, Cocos Nucifera (Coconut) Fruit Extract, Panax Ginseng Root Extract, Camellia Sinensis Leaf Extract, Monascus/Rice Ferment, Pentylene Glycol, Behenyl Alcohol, Poly C10-30 Alkyl Acrylate, Polyglyceryl-3 Methylglucose Distearate, Decyl Glucoside, Tromethamine, Carbomer, Acrylates/C10-30 Alkyl Acrylate Crosspolymer, 1,2-Hexanediol,Sodium Stearoyl Glutamate, Polyacrylate Crosspolymer-6',
                    usage: 'Take an appropirate amount of sunscreen and apply it onto your face and neck',
                    reviews: [
                        {
                            profile: 'https://d2gwgwt9a7yxle.cloudfront.net/what_is_user_id_in_net_banking_mobile_871b681e52.jp',
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
                            rating: 4,
                        },
                        {
                            profile: 'https://cdn.gobankingrates.com/wp-content/uploads/2024/01/a-woman-smiles-at-work-while-look-at-her-phone-iStock-1460124878.jpg?w=675&quality=75&webp=1',
                            name: 'Li Emma',
                            date: 'October 30, 2024 1:50 AM',
                            comment: "You only need one squirt! It has light coverage, and my skin reacted well to it. I am on automatic delivery, which should indicate it's a good product.",
                            rating: 4,
                        },
            
                    ],
                },
                {
                    id: 60,
                    description: 'A hypoallergenic and pore clarifying 3-in-1 cleansing balm formulated especially for oily and breakout prone skin to target clogged pores, excess oil and waterproof makeup while deeply cleansing and replenishing moisture levels. FOR ACNE PRONE & OILY SKIN TYPES - Formulated with jojoba oil and a blend of AHA, BHA, LHA to gently remove exfoliate away excess dead skin cells and cleanse pores for a truly deep cleanse.',
                    ingredients: 'CETYL ETHYLHEXANOATE, TRIETHYLHEXANOIN, POLYGLYCERYL-10 DIOLEATE, C12-15 ALKYL BENZOATE, HYDROGENATED POLY(C6-14OLEFIN), PEG-8 GLYCERYL ISOSTEARATE, CAPRYLIC/CAPRIC TRIGLYCERIDE, PENTAERYTHRITYL TETRAETHYLHEXANOATE, PENTAERYTHRITYL TETRAISOSTEARATE, HYDROGENATED POLYISOBUTENE, COCOS NUCIFERA (COCONUT) OIL, PYRUS MALUS (APPLE ) SEED OIL(99.5ppm), PYRUS MALUS (APPLE) FRUIT EXTRACT, CITRUS UNSHIU PEEL EXTRACT, ORCHID EXTRACT, CAMELLIA SINENSIS LEAF EXTRACT, CAMELLIA JAPONICA LEAF EXTRACT, OPUNTIA COCCINELLIFERA , FRUIT EXTRACT, BUTYLENE GLYCOL, COCO-CAPRYLATE/CAPRATE, FRAGRANCE',
                    usage: 'When first trying the product, it is recommended to use it once or twice a week for one minute. The frequency of use can be gradually increased depending on the skin condition. \n1. After cleansing, lightly pat your skin dry. \n2. Apply 2 drops of product on the entire face or on the areas of concern and leave it for 1 minute. Gently massage onto face with fingers. \n3. After 1 minute, rinse thoroughly with lukewarm water. After cleansing, apply the skincare you normally use to prevent the skin from drying out. ',
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
                    id : 61,
                    description: "Melt-In Moisture Cleansing Balm: A cleanser packed with powerful greens and rich Avocado Oil to melt away all impurities and refresh the skin. Its unique formula effectively cleanses without irritation, delivering a dose of hydration, leaving behind only a balanced, satisfied, and glowing skin. Indulge in the Moment: Rich and buttery, this balm turns cleansing from a routine to a ritual. The smooth and lush texture quickly melts into the skin, easily emulsifying to dissolve impurities without irritation. Gentle on Skin: Using only the gentlest ingredients, the PURITO From Green Avocado Cleansing Balm can be used without the fear of dryness or irritation Nourish with Nature: Formulated with Kale Leaf, Spinach Leaf, Broccoli, Mugwort Leaf, and Cabbage Leaf extracts, the balm is made to soothe the skin and boost its elasticity to reveal a soft and supple, radiant complexion.",
                    ingredients: 'Avocado Oil, Green Flora Complex and Watermelon Seed & Baobab Seed Oil Blend work together to gently dissolve makeup, dirt, sunscreen and other impurities.',
                    usage: 'Apply evenly to your face, body, or any other areas that need sun protection before sun exposure. Reapply every 2-3 hours, especially after sweating, swimming, or towel drying.',
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
                    id : 62,
                    description: "A moisturizer-like sunscreen offers SPF50+ PA++++ sun protection with a non-sticky texture, made for sensitive skin. Korean Centella Asiatica offers skin soothing, Brown Algae Extract offers anti-pollution, and Hyaluronic Acid maintains hydration.A fast-absorbing, weightless formula that leaves the skin moisturized and dewy without any greasy residue. Crafted to shield the skin from urban stressors, it effectively blocks harmful UV rays while creating a barrier against pollutants like fine dust. SPF/PA Clinical Study Results for sun protector factor and strong urban defense with the fine dust adhesion prevention test and two skin irritation tests completed. Ultralight, moisturizer-like daily sunscreen with a non-sticky texture that leaves the skin moisturized and dewy, without any greasy residue. Thriving in Korea's four seasons, Korean Centella brings stronger calming benefits. Enduring the Korean winter boosts the plant's active compounds, making its soothing effect even more powerful.",
                    ingredients: 'Avocado Oil, Green Flora Complex and Watermelon Seed & Baobab Seed Oil Blend work together to gently dissolve makeup, dirt, sunscreen and other impurities.',
                    usage: '1. Apply generously 15 minutes before sun exposure.\n2. Reapply every two hours or as necessary and immediately after extensive sweating.',
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
                            rating: 2,
                        },
            
                    ],
                },
                {
                    id : 63,
                    description: "Refreshing gel cream with nourishing Avena Sativa (Oat) Seed Water instantly calms dry and sensitive skin. The lightweight clear texture softly melts on the skin, easily seeping into its layers. This gel cream improves skin's moisture level, and soothes hypersensitivity, keeping the skin balanced and vibrant. The combination of oat and panthenol provides a refreshing splash of hydration and additional nutrients while creating a protective barrier. Avena Sativa (Oat) Seed Water(77%) is a gentle ingredient that calms irritated skin. Rich in antioxidants and hydrating properties, this ingredient instantly improves the skin's moisture barrier. It is particularly suitable for sensitive skin. Squalane rapidly penetrates the skin to instantly hydrate and lock in moisture. This replenishing facial oil works to boost elasticity, nourish, soothe, and smooth out dehydration lines. Beta-Glucan is a humectant that effectively soothes and calms sensitive skin. It smoothes fine lines, providing hydrating and plumping benefits to the skin. This ingredient is also enriched with antioxidant properties to counteract environmental stressors.",
                    ingredients: 'Water, Oryza Sativa (Rice) Extract (30%), Dibutyl Adipate, Propanediol, Diethylamino Hydroxybenzoyl Hexyl Benzoate, Polymethylsilsesquioxane, Ethylhexyl Triazone, Niacinamide, Methylene Bis-benzotriazolyl Tetramethylbutylphenol, Coco-caprylate/Caprate, Caprylyl Methicone, Diethylhexyl Butamido Triazone, Glycerin, Butylene Glycol, Oryza Sativa (Rice) Germ Extract, Camellia Sinensis Leaf Extract, Lactobacillus/Pumpkin Ferment Extract, Bacillus/Soybean Ferment Extract, Saccharum Officinarum (Sugarcane) Extract, Macrocystis Pyrifera (Kelp) Extract, Cocos Nucifera (Coconut) Fruit Extract, Panax Ginseng Root Extract, Camellia Sinensis Leaf Extract, Monascus/Rice Ferment, Pentylene Glycol, Behenyl Alcohol, Poly C10-30 Alkyl Acrylate, Polyglyceryl-3 Methylglucose Distearate, Decyl Glucoside, Tromethamine, Carbomer, Acrylates/C10-30 Alkyl Acrylate Crosspolymer, 1,2-Hexanediol,Sodium Stearoyl Glutamate, Polyacrylate Crosspolymer-6',
                    usage: 'Take an appropirate amount of sunscreen and apply it onto your face and neck',
                    reviews: [
                        {
                            profile: 'https://d2gwgwt9a7yxle.cloudfront.net/what_is_user_id_in_net_banking_mobile_871b681e52.jp',
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
                            rating: 4,
                        },
                        {
                            profile: 'https://cdn.gobankingrates.com/wp-content/uploads/2024/01/a-woman-smiles-at-work-while-look-at-her-phone-iStock-1460124878.jpg?w=675&quality=75&webp=1',
                            name: 'Li Emma',
                            date: 'October 30, 2024 1:50 AM',
                            comment: "You only need one squirt! It has light coverage, and my skin reacted well to it. I am on automatic delivery, which should indicate it's a good product.",
                            rating: 4,
                        },
            
                    ],
                },
                {
                    id: 64,
                    description: 'A hypoallergenic and pore clarifying 3-in-1 cleansing balm formulated especially for oily and breakout prone skin to target clogged pores, excess oil and waterproof makeup while deeply cleansing and replenishing moisture levels. FOR ACNE PRONE & OILY SKIN TYPES - Formulated with jojoba oil and a blend of AHA, BHA, LHA to gently remove exfoliate away excess dead skin cells and cleanse pores for a truly deep cleanse.',
                    ingredients: 'CETYL ETHYLHEXANOATE, TRIETHYLHEXANOIN, POLYGLYCERYL-10 DIOLEATE, C12-15 ALKYL BENZOATE, HYDROGENATED POLY(C6-14OLEFIN), PEG-8 GLYCERYL ISOSTEARATE, CAPRYLIC/CAPRIC TRIGLYCERIDE, PENTAERYTHRITYL TETRAETHYLHEXANOATE, PENTAERYTHRITYL TETRAISOSTEARATE, HYDROGENATED POLYISOBUTENE, COCOS NUCIFERA (COCONUT) OIL, PYRUS MALUS (APPLE ) SEED OIL(99.5ppm), PYRUS MALUS (APPLE) FRUIT EXTRACT, CITRUS UNSHIU PEEL EXTRACT, ORCHID EXTRACT, CAMELLIA SINENSIS LEAF EXTRACT, CAMELLIA JAPONICA LEAF EXTRACT, OPUNTIA COCCINELLIFERA , FRUIT EXTRACT, BUTYLENE GLYCOL, COCO-CAPRYLATE/CAPRATE, FRAGRANCE',
                    usage: 'When first trying the product, it is recommended to use it once or twice a week for one minute. The frequency of use can be gradually increased depending on the skin condition. \n1. After cleansing, lightly pat your skin dry. \n2. Apply 2 drops of product on the entire face or on the areas of concern and leave it for 1 minute. Gently massage onto face with fingers. \n3. After 1 minute, rinse thoroughly with lukewarm water. After cleansing, apply the skincare you normally use to prevent the skin from drying out. ',
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
                    id : 65,
                    description: "Melt-In Moisture Cleansing Balm: A cleanser packed with powerful greens and rich Avocado Oil to melt away all impurities and refresh the skin. Its unique formula effectively cleanses without irritation, delivering a dose of hydration, leaving behind only a balanced, satisfied, and glowing skin. Indulge in the Moment: Rich and buttery, this balm turns cleansing from a routine to a ritual. The smooth and lush texture quickly melts into the skin, easily emulsifying to dissolve impurities without irritation. Gentle on Skin: Using only the gentlest ingredients, the PURITO From Green Avocado Cleansing Balm can be used without the fear of dryness or irritation Nourish with Nature: Formulated with Kale Leaf, Spinach Leaf, Broccoli, Mugwort Leaf, and Cabbage Leaf extracts, the balm is made to soothe the skin and boost its elasticity to reveal a soft and supple, radiant complexion.",
                    ingredients: 'Avocado Oil, Green Flora Complex and Watermelon Seed & Baobab Seed Oil Blend work together to gently dissolve makeup, dirt, sunscreen and other impurities.',
                    usage: 'Apply evenly to your face, body, or any other areas that need sun protection before sun exposure. Reapply every 2-3 hours, especially after sweating, swimming, or towel drying.',
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
                    id : 66,
                    description: "A moisturizer-like sunscreen offers SPF50+ PA++++ sun protection with a non-sticky texture, made for sensitive skin. Korean Centella Asiatica offers skin soothing, Brown Algae Extract offers anti-pollution, and Hyaluronic Acid maintains hydration.A fast-absorbing, weightless formula that leaves the skin moisturized and dewy without any greasy residue. Crafted to shield the skin from urban stressors, it effectively blocks harmful UV rays while creating a barrier against pollutants like fine dust. SPF/PA Clinical Study Results for sun protector factor and strong urban defense with the fine dust adhesion prevention test and two skin irritation tests completed. Ultralight, moisturizer-like daily sunscreen with a non-sticky texture that leaves the skin moisturized and dewy, without any greasy residue. Thriving in Korea's four seasons, Korean Centella brings stronger calming benefits. Enduring the Korean winter boosts the plant's active compounds, making its soothing effect even more powerful.",
                    ingredients: 'Avocado Oil, Green Flora Complex and Watermelon Seed & Baobab Seed Oil Blend work together to gently dissolve makeup, dirt, sunscreen and other impurities.',
                    usage: '1. Apply generously 15 minutes before sun exposure.\n2. Reapply every two hours or as necessary and immediately after extensive sweating.',
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
                            rating: 2,
                        },
            
                    ],
                },
                {
                    id : 67,
                    description: "Refreshing gel cream with nourishing Avena Sativa (Oat) Seed Water instantly calms dry and sensitive skin. The lightweight clear texture softly melts on the skin, easily seeping into its layers. This gel cream improves skin's moisture level, and soothes hypersensitivity, keeping the skin balanced and vibrant. The combination of oat and panthenol provides a refreshing splash of hydration and additional nutrients while creating a protective barrier. Avena Sativa (Oat) Seed Water(77%) is a gentle ingredient that calms irritated skin. Rich in antioxidants and hydrating properties, this ingredient instantly improves the skin's moisture barrier. It is particularly suitable for sensitive skin. Squalane rapidly penetrates the skin to instantly hydrate and lock in moisture. This replenishing facial oil works to boost elasticity, nourish, soothe, and smooth out dehydration lines. Beta-Glucan is a humectant that effectively soothes and calms sensitive skin. It smoothes fine lines, providing hydrating and plumping benefits to the skin. This ingredient is also enriched with antioxidant properties to counteract environmental stressors.",
                    ingredients: 'Water, Oryza Sativa (Rice) Extract (30%), Dibutyl Adipate, Propanediol, Diethylamino Hydroxybenzoyl Hexyl Benzoate, Polymethylsilsesquioxane, Ethylhexyl Triazone, Niacinamide, Methylene Bis-benzotriazolyl Tetramethylbutylphenol, Coco-caprylate/Caprate, Caprylyl Methicone, Diethylhexyl Butamido Triazone, Glycerin, Butylene Glycol, Oryza Sativa (Rice) Germ Extract, Camellia Sinensis Leaf Extract, Lactobacillus/Pumpkin Ferment Extract, Bacillus/Soybean Ferment Extract, Saccharum Officinarum (Sugarcane) Extract, Macrocystis Pyrifera (Kelp) Extract, Cocos Nucifera (Coconut) Fruit Extract, Panax Ginseng Root Extract, Camellia Sinensis Leaf Extract, Monascus/Rice Ferment, Pentylene Glycol, Behenyl Alcohol, Poly C10-30 Alkyl Acrylate, Polyglyceryl-3 Methylglucose Distearate, Decyl Glucoside, Tromethamine, Carbomer, Acrylates/C10-30 Alkyl Acrylate Crosspolymer, 1,2-Hexanediol,Sodium Stearoyl Glutamate, Polyacrylate Crosspolymer-6',
                    usage: 'Take an appropirate amount of sunscreen and apply it onto your face and neck',
                    reviews: [
                        {
                            profile: 'https://d2gwgwt9a7yxle.cloudfront.net/what_is_user_id_in_net_banking_mobile_871b681e52.jp',
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
                            rating: 4,
                        },
                        {
                            profile: 'https://cdn.gobankingrates.com/wp-content/uploads/2024/01/a-woman-smiles-at-work-while-look-at-her-phone-iStock-1460124878.jpg?w=675&quality=75&webp=1',
                            name: 'Li Emma',
                            date: 'October 30, 2024 1:50 AM',
                            comment: "You only need one squirt! It has light coverage, and my skin reacted well to it. I am on automatic delivery, which should indicate it's a good product.",
                            rating: 4,
                        },
            
                    ],
                },
                {
                    id: 68,
                    description: 'A hypoallergenic and pore clarifying 3-in-1 cleansing balm formulated especially for oily and breakout prone skin to target clogged pores, excess oil and waterproof makeup while deeply cleansing and replenishing moisture levels. FOR ACNE PRONE & OILY SKIN TYPES - Formulated with jojoba oil and a blend of AHA, BHA, LHA to gently remove exfoliate away excess dead skin cells and cleanse pores for a truly deep cleanse.',
                    ingredients: 'CETYL ETHYLHEXANOATE, TRIETHYLHEXANOIN, POLYGLYCERYL-10 DIOLEATE, C12-15 ALKYL BENZOATE, HYDROGENATED POLY(C6-14OLEFIN), PEG-8 GLYCERYL ISOSTEARATE, CAPRYLIC/CAPRIC TRIGLYCERIDE, PENTAERYTHRITYL TETRAETHYLHEXANOATE, PENTAERYTHRITYL TETRAISOSTEARATE, HYDROGENATED POLYISOBUTENE, COCOS NUCIFERA (COCONUT) OIL, PYRUS MALUS (APPLE ) SEED OIL(99.5ppm), PYRUS MALUS (APPLE) FRUIT EXTRACT, CITRUS UNSHIU PEEL EXTRACT, ORCHID EXTRACT, CAMELLIA SINENSIS LEAF EXTRACT, CAMELLIA JAPONICA LEAF EXTRACT, OPUNTIA COCCINELLIFERA , FRUIT EXTRACT, BUTYLENE GLYCOL, COCO-CAPRYLATE/CAPRATE, FRAGRANCE',
                    usage: 'When first trying the product, it is recommended to use it once or twice a week for one minute. The frequency of use can be gradually increased depending on the skin condition. \n1. After cleansing, lightly pat your skin dry. \n2. Apply 2 drops of product on the entire face or on the areas of concern and leave it for 1 minute. Gently massage onto face with fingers. \n3. After 1 minute, rinse thoroughly with lukewarm water. After cleansing, apply the skincare you normally use to prevent the skin from drying out. ',
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
                    id : 69,
                    description: "Melt-In Moisture Cleansing Balm: A cleanser packed with powerful greens and rich Avocado Oil to melt away all impurities and refresh the skin. Its unique formula effectively cleanses without irritation, delivering a dose of hydration, leaving behind only a balanced, satisfied, and glowing skin. Indulge in the Moment: Rich and buttery, this balm turns cleansing from a routine to a ritual. The smooth and lush texture quickly melts into the skin, easily emulsifying to dissolve impurities without irritation. Gentle on Skin: Using only the gentlest ingredients, the PURITO From Green Avocado Cleansing Balm can be used without the fear of dryness or irritation Nourish with Nature: Formulated with Kale Leaf, Spinach Leaf, Broccoli, Mugwort Leaf, and Cabbage Leaf extracts, the balm is made to soothe the skin and boost its elasticity to reveal a soft and supple, radiant complexion.",
                    ingredients: 'Avocado Oil, Green Flora Complex and Watermelon Seed & Baobab Seed Oil Blend work together to gently dissolve makeup, dirt, sunscreen and other impurities.',
                    usage: 'Apply evenly to your face, body, or any other areas that need sun protection before sun exposure. Reapply every 2-3 hours, especially after sweating, swimming, or towel drying.',
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
                    id : 70,
                    description: "A moisturizer-like sunscreen offers SPF50+ PA++++ sun protection with a non-sticky texture, made for sensitive skin. Korean Centella Asiatica offers skin soothing, Brown Algae Extract offers anti-pollution, and Hyaluronic Acid maintains hydration.A fast-absorbing, weightless formula that leaves the skin moisturized and dewy without any greasy residue. Crafted to shield the skin from urban stressors, it effectively blocks harmful UV rays while creating a barrier against pollutants like fine dust. SPF/PA Clinical Study Results for sun protector factor and strong urban defense with the fine dust adhesion prevention test and two skin irritation tests completed. Ultralight, moisturizer-like daily sunscreen with a non-sticky texture that leaves the skin moisturized and dewy, without any greasy residue. Thriving in Korea's four seasons, Korean Centella brings stronger calming benefits. Enduring the Korean winter boosts the plant's active compounds, making its soothing effect even more powerful.",
                    ingredients: 'Avocado Oil, Green Flora Complex and Watermelon Seed & Baobab Seed Oil Blend work together to gently dissolve makeup, dirt, sunscreen and other impurities.',
                    usage: '1. Apply generously 15 minutes before sun exposure.\n2. Reapply every two hours or as necessary and immediately after extensive sweating.',
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
                            rating: 2,
                        },
            
                    ],
                },
                {
                    id : 71,
                    description: "Refreshing gel cream with nourishing Avena Sativa (Oat) Seed Water instantly calms dry and sensitive skin. The lightweight clear texture softly melts on the skin, easily seeping into its layers. This gel cream improves skin's moisture level, and soothes hypersensitivity, keeping the skin balanced and vibrant. The combination of oat and panthenol provides a refreshing splash of hydration and additional nutrients while creating a protective barrier. Avena Sativa (Oat) Seed Water(77%) is a gentle ingredient that calms irritated skin. Rich in antioxidants and hydrating properties, this ingredient instantly improves the skin's moisture barrier. It is particularly suitable for sensitive skin. Squalane rapidly penetrates the skin to instantly hydrate and lock in moisture. This replenishing facial oil works to boost elasticity, nourish, soothe, and smooth out dehydration lines. Beta-Glucan is a humectant that effectively soothes and calms sensitive skin. It smoothes fine lines, providing hydrating and plumping benefits to the skin. This ingredient is also enriched with antioxidant properties to counteract environmental stressors.",
                    ingredients: 'Water, Oryza Sativa (Rice) Extract (30%), Dibutyl Adipate, Propanediol, Diethylamino Hydroxybenzoyl Hexyl Benzoate, Polymethylsilsesquioxane, Ethylhexyl Triazone, Niacinamide, Methylene Bis-benzotriazolyl Tetramethylbutylphenol, Coco-caprylate/Caprate, Caprylyl Methicone, Diethylhexyl Butamido Triazone, Glycerin, Butylene Glycol, Oryza Sativa (Rice) Germ Extract, Camellia Sinensis Leaf Extract, Lactobacillus/Pumpkin Ferment Extract, Bacillus/Soybean Ferment Extract, Saccharum Officinarum (Sugarcane) Extract, Macrocystis Pyrifera (Kelp) Extract, Cocos Nucifera (Coconut) Fruit Extract, Panax Ginseng Root Extract, Camellia Sinensis Leaf Extract, Monascus/Rice Ferment, Pentylene Glycol, Behenyl Alcohol, Poly C10-30 Alkyl Acrylate, Polyglyceryl-3 Methylglucose Distearate, Decyl Glucoside, Tromethamine, Carbomer, Acrylates/C10-30 Alkyl Acrylate Crosspolymer, 1,2-Hexanediol,Sodium Stearoyl Glutamate, Polyacrylate Crosspolymer-6',
                    usage: 'Take an appropirate amount of sunscreen and apply it onto your face and neck',
                    reviews: [
                        {
                            profile: 'https://d2gwgwt9a7yxle.cloudfront.net/what_is_user_id_in_net_banking_mobile_871b681e52.jp',
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
                            rating: 4,
                        },
                        {
                            profile: 'https://cdn.gobankingrates.com/wp-content/uploads/2024/01/a-woman-smiles-at-work-while-look-at-her-phone-iStock-1460124878.jpg?w=675&quality=75&webp=1',
                            name: 'Li Emma',
                            date: 'October 30, 2024 1:50 AM',
                            comment: "You only need one squirt! It has light coverage, and my skin reacted well to it. I am on automatic delivery, which should indicate it's a good product.",
                            rating: 4,
                        },
            
                    ],
                },
                {
                    id: 72,
                    description: 'A hypoallergenic and pore clarifying 3-in-1 cleansing balm formulated especially for oily and breakout prone skin to target clogged pores, excess oil and waterproof makeup while deeply cleansing and replenishing moisture levels. FOR ACNE PRONE & OILY SKIN TYPES - Formulated with jojoba oil and a blend of AHA, BHA, LHA to gently remove exfoliate away excess dead skin cells and cleanse pores for a truly deep cleanse.',
                    ingredients: 'CETYL ETHYLHEXANOATE, TRIETHYLHEXANOIN, POLYGLYCERYL-10 DIOLEATE, C12-15 ALKYL BENZOATE, HYDROGENATED POLY(C6-14OLEFIN), PEG-8 GLYCERYL ISOSTEARATE, CAPRYLIC/CAPRIC TRIGLYCERIDE, PENTAERYTHRITYL TETRAETHYLHEXANOATE, PENTAERYTHRITYL TETRAISOSTEARATE, HYDROGENATED POLYISOBUTENE, COCOS NUCIFERA (COCONUT) OIL, PYRUS MALUS (APPLE ) SEED OIL(99.5ppm), PYRUS MALUS (APPLE) FRUIT EXTRACT, CITRUS UNSHIU PEEL EXTRACT, ORCHID EXTRACT, CAMELLIA SINENSIS LEAF EXTRACT, CAMELLIA JAPONICA LEAF EXTRACT, OPUNTIA COCCINELLIFERA , FRUIT EXTRACT, BUTYLENE GLYCOL, COCO-CAPRYLATE/CAPRATE, FRAGRANCE',
                    usage: 'When first trying the product, it is recommended to use it once or twice a week for one minute. The frequency of use can be gradually increased depending on the skin condition. \n1. After cleansing, lightly pat your skin dry. \n2. Apply 2 drops of product on the entire face or on the areas of concern and leave it for 1 minute. Gently massage onto face with fingers. \n3. After 1 minute, rinse thoroughly with lukewarm water. After cleansing, apply the skincare you normally use to prevent the skin from drying out. ',
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
                    id : 73,
                    description: "Melt-In Moisture Cleansing Balm: A cleanser packed with powerful greens and rich Avocado Oil to melt away all impurities and refresh the skin. Its unique formula effectively cleanses without irritation, delivering a dose of hydration, leaving behind only a balanced, satisfied, and glowing skin. Indulge in the Moment: Rich and buttery, this balm turns cleansing from a routine to a ritual. The smooth and lush texture quickly melts into the skin, easily emulsifying to dissolve impurities without irritation. Gentle on Skin: Using only the gentlest ingredients, the PURITO From Green Avocado Cleansing Balm can be used without the fear of dryness or irritation Nourish with Nature: Formulated with Kale Leaf, Spinach Leaf, Broccoli, Mugwort Leaf, and Cabbage Leaf extracts, the balm is made to soothe the skin and boost its elasticity to reveal a soft and supple, radiant complexion.",
                    ingredients: 'Avocado Oil, Green Flora Complex and Watermelon Seed & Baobab Seed Oil Blend work together to gently dissolve makeup, dirt, sunscreen and other impurities.',
                    usage: 'Apply evenly to your face, body, or any other areas that need sun protection before sun exposure. Reapply every 2-3 hours, especially after sweating, swimming, or towel drying.',
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
                    id : 74,
                    description: "A moisturizer-like sunscreen offers SPF50+ PA++++ sun protection with a non-sticky texture, made for sensitive skin. Korean Centella Asiatica offers skin soothing, Brown Algae Extract offers anti-pollution, and Hyaluronic Acid maintains hydration.A fast-absorbing, weightless formula that leaves the skin moisturized and dewy without any greasy residue. Crafted to shield the skin from urban stressors, it effectively blocks harmful UV rays while creating a barrier against pollutants like fine dust. SPF/PA Clinical Study Results for sun protector factor and strong urban defense with the fine dust adhesion prevention test and two skin irritation tests completed. Ultralight, moisturizer-like daily sunscreen with a non-sticky texture that leaves the skin moisturized and dewy, without any greasy residue. Thriving in Korea's four seasons, Korean Centella brings stronger calming benefits. Enduring the Korean winter boosts the plant's active compounds, making its soothing effect even more powerful.",
                    ingredients: 'Avocado Oil, Green Flora Complex and Watermelon Seed & Baobab Seed Oil Blend work together to gently dissolve makeup, dirt, sunscreen and other impurities.',
                    usage: '1. Apply generously 15 minutes before sun exposure.\n2. Reapply every two hours or as necessary and immediately after extensive sweating.',
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
                            rating: 2,
                        },
            
                    ],
                },
                {
                    id : 75,
                    description: "Refreshing gel cream with nourishing Avena Sativa (Oat) Seed Water instantly calms dry and sensitive skin. The lightweight clear texture softly melts on the skin, easily seeping into its layers. This gel cream improves skin's moisture level, and soothes hypersensitivity, keeping the skin balanced and vibrant. The combination of oat and panthenol provides a refreshing splash of hydration and additional nutrients while creating a protective barrier. Avena Sativa (Oat) Seed Water(77%) is a gentle ingredient that calms irritated skin. Rich in antioxidants and hydrating properties, this ingredient instantly improves the skin's moisture barrier. It is particularly suitable for sensitive skin. Squalane rapidly penetrates the skin to instantly hydrate and lock in moisture. This replenishing facial oil works to boost elasticity, nourish, soothe, and smooth out dehydration lines. Beta-Glucan is a humectant that effectively soothes and calms sensitive skin. It smoothes fine lines, providing hydrating and plumping benefits to the skin. This ingredient is also enriched with antioxidant properties to counteract environmental stressors.",
                    ingredients: 'Water, Oryza Sativa (Rice) Extract (30%), Dibutyl Adipate, Propanediol, Diethylamino Hydroxybenzoyl Hexyl Benzoate, Polymethylsilsesquioxane, Ethylhexyl Triazone, Niacinamide, Methylene Bis-benzotriazolyl Tetramethylbutylphenol, Coco-caprylate/Caprate, Caprylyl Methicone, Diethylhexyl Butamido Triazone, Glycerin, Butylene Glycol, Oryza Sativa (Rice) Germ Extract, Camellia Sinensis Leaf Extract, Lactobacillus/Pumpkin Ferment Extract, Bacillus/Soybean Ferment Extract, Saccharum Officinarum (Sugarcane) Extract, Macrocystis Pyrifera (Kelp) Extract, Cocos Nucifera (Coconut) Fruit Extract, Panax Ginseng Root Extract, Camellia Sinensis Leaf Extract, Monascus/Rice Ferment, Pentylene Glycol, Behenyl Alcohol, Poly C10-30 Alkyl Acrylate, Polyglyceryl-3 Methylglucose Distearate, Decyl Glucoside, Tromethamine, Carbomer, Acrylates/C10-30 Alkyl Acrylate Crosspolymer, 1,2-Hexanediol,Sodium Stearoyl Glutamate, Polyacrylate Crosspolymer-6',
                    usage: 'Take an appropirate amount of sunscreen and apply it onto your face and neck',
                    reviews: [
                        {
                            profile: 'https://d2gwgwt9a7yxle.cloudfront.net/what_is_user_id_in_net_banking_mobile_871b681e52.jp',
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
                            rating: 4,
                        },
                        {
                            profile: 'https://cdn.gobankingrates.com/wp-content/uploads/2024/01/a-woman-smiles-at-work-while-look-at-her-phone-iStock-1460124878.jpg?w=675&quality=75&webp=1',
                            name: 'Li Emma',
                            date: 'October 30, 2024 1:50 AM',
                            comment: "You only need one squirt! It has light coverage, and my skin reacted well to it. I am on automatic delivery, which should indicate it's a good product.",
                            rating: 4,
                        },
            
                    ],
                },
                {
                    id: 76,
                    description: 'A hypoallergenic and pore clarifying 3-in-1 cleansing balm formulated especially for oily and breakout prone skin to target clogged pores, excess oil and waterproof makeup while deeply cleansing and replenishing moisture levels. FOR ACNE PRONE & OILY SKIN TYPES - Formulated with jojoba oil and a blend of AHA, BHA, LHA to gently remove exfoliate away excess dead skin cells and cleanse pores for a truly deep cleanse.',
                    ingredients: 'CETYL ETHYLHEXANOATE, TRIETHYLHEXANOIN, POLYGLYCERYL-10 DIOLEATE, C12-15 ALKYL BENZOATE, HYDROGENATED POLY(C6-14OLEFIN), PEG-8 GLYCERYL ISOSTEARATE, CAPRYLIC/CAPRIC TRIGLYCERIDE, PENTAERYTHRITYL TETRAETHYLHEXANOATE, PENTAERYTHRITYL TETRAISOSTEARATE, HYDROGENATED POLYISOBUTENE, COCOS NUCIFERA (COCONUT) OIL, PYRUS MALUS (APPLE ) SEED OIL(99.5ppm), PYRUS MALUS (APPLE) FRUIT EXTRACT, CITRUS UNSHIU PEEL EXTRACT, ORCHID EXTRACT, CAMELLIA SINENSIS LEAF EXTRACT, CAMELLIA JAPONICA LEAF EXTRACT, OPUNTIA COCCINELLIFERA , FRUIT EXTRACT, BUTYLENE GLYCOL, COCO-CAPRYLATE/CAPRATE, FRAGRANCE',
                    usage: 'When first trying the product, it is recommended to use it once or twice a week for one minute. The frequency of use can be gradually increased depending on the skin condition. \n1. After cleansing, lightly pat your skin dry. \n2. Apply 2 drops of product on the entire face or on the areas of concern and leave it for 1 minute. Gently massage onto face with fingers. \n3. After 1 minute, rinse thoroughly with lukewarm water. After cleansing, apply the skincare you normally use to prevent the skin from drying out. ',
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
                    id : 77,
                    description: "Melt-In Moisture Cleansing Balm: A cleanser packed with powerful greens and rich Avocado Oil to melt away all impurities and refresh the skin. Its unique formula effectively cleanses without irritation, delivering a dose of hydration, leaving behind only a balanced, satisfied, and glowing skin. Indulge in the Moment: Rich and buttery, this balm turns cleansing from a routine to a ritual. The smooth and lush texture quickly melts into the skin, easily emulsifying to dissolve impurities without irritation. Gentle on Skin: Using only the gentlest ingredients, the PURITO From Green Avocado Cleansing Balm can be used without the fear of dryness or irritation Nourish with Nature: Formulated with Kale Leaf, Spinach Leaf, Broccoli, Mugwort Leaf, and Cabbage Leaf extracts, the balm is made to soothe the skin and boost its elasticity to reveal a soft and supple, radiant complexion.",
                    ingredients: 'Avocado Oil, Green Flora Complex and Watermelon Seed & Baobab Seed Oil Blend work together to gently dissolve makeup, dirt, sunscreen and other impurities.',
                    usage: 'Apply evenly to your face, body, or any other areas that need sun protection before sun exposure. Reapply every 2-3 hours, especially after sweating, swimming, or towel drying.',
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
                    id : 78,
                    description: "A moisturizer-like sunscreen offers SPF50+ PA++++ sun protection with a non-sticky texture, made for sensitive skin. Korean Centella Asiatica offers skin soothing, Brown Algae Extract offers anti-pollution, and Hyaluronic Acid maintains hydration.A fast-absorbing, weightless formula that leaves the skin moisturized and dewy without any greasy residue. Crafted to shield the skin from urban stressors, it effectively blocks harmful UV rays while creating a barrier against pollutants like fine dust. SPF/PA Clinical Study Results for sun protector factor and strong urban defense with the fine dust adhesion prevention test and two skin irritation tests completed. Ultralight, moisturizer-like daily sunscreen with a non-sticky texture that leaves the skin moisturized and dewy, without any greasy residue. Thriving in Korea's four seasons, Korean Centella brings stronger calming benefits. Enduring the Korean winter boosts the plant's active compounds, making its soothing effect even more powerful.",
                    ingredients: 'Avocado Oil, Green Flora Complex and Watermelon Seed & Baobab Seed Oil Blend work together to gently dissolve makeup, dirt, sunscreen and other impurities.',
                    usage: '1. Apply generously 15 minutes before sun exposure.\n2. Reapply every two hours or as necessary and immediately after extensive sweating.',
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
                            rating: 2,
                        },
            
                    ],
                },
                {
                    id : 79,
                    description: "Refreshing gel cream with nourishing Avena Sativa (Oat) Seed Water instantly calms dry and sensitive skin. The lightweight clear texture softly melts on the skin, easily seeping into its layers. This gel cream improves skin's moisture level, and soothes hypersensitivity, keeping the skin balanced and vibrant. The combination of oat and panthenol provides a refreshing splash of hydration and additional nutrients while creating a protective barrier. Avena Sativa (Oat) Seed Water(77%) is a gentle ingredient that calms irritated skin. Rich in antioxidants and hydrating properties, this ingredient instantly improves the skin's moisture barrier. It is particularly suitable for sensitive skin. Squalane rapidly penetrates the skin to instantly hydrate and lock in moisture. This replenishing facial oil works to boost elasticity, nourish, soothe, and smooth out dehydration lines. Beta-Glucan is a humectant that effectively soothes and calms sensitive skin. It smoothes fine lines, providing hydrating and plumping benefits to the skin. This ingredient is also enriched with antioxidant properties to counteract environmental stressors.",
                    ingredients: 'Water, Oryza Sativa (Rice) Extract (30%), Dibutyl Adipate, Propanediol, Diethylamino Hydroxybenzoyl Hexyl Benzoate, Polymethylsilsesquioxane, Ethylhexyl Triazone, Niacinamide, Methylene Bis-benzotriazolyl Tetramethylbutylphenol, Coco-caprylate/Caprate, Caprylyl Methicone, Diethylhexyl Butamido Triazone, Glycerin, Butylene Glycol, Oryza Sativa (Rice) Germ Extract, Camellia Sinensis Leaf Extract, Lactobacillus/Pumpkin Ferment Extract, Bacillus/Soybean Ferment Extract, Saccharum Officinarum (Sugarcane) Extract, Macrocystis Pyrifera (Kelp) Extract, Cocos Nucifera (Coconut) Fruit Extract, Panax Ginseng Root Extract, Camellia Sinensis Leaf Extract, Monascus/Rice Ferment, Pentylene Glycol, Behenyl Alcohol, Poly C10-30 Alkyl Acrylate, Polyglyceryl-3 Methylglucose Distearate, Decyl Glucoside, Tromethamine, Carbomer, Acrylates/C10-30 Alkyl Acrylate Crosspolymer, 1,2-Hexanediol,Sodium Stearoyl Glutamate, Polyacrylate Crosspolymer-6',
                    usage: 'Take an appropirate amount of sunscreen and apply it onto your face and neck',
                    reviews: [
                        {
                            profile: 'https://d2gwgwt9a7yxle.cloudfront.net/what_is_user_id_in_net_banking_mobile_871b681e52.jp',
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
                            rating: 4,
                        },
                        {
                            profile: 'https://cdn.gobankingrates.com/wp-content/uploads/2024/01/a-woman-smiles-at-work-while-look-at-her-phone-iStock-1460124878.jpg?w=675&quality=75&webp=1',
                            name: 'Li Emma',
                            date: 'October 30, 2024 1:50 AM',
                            comment: "You only need one squirt! It has light coverage, and my skin reacted well to it. I am on automatic delivery, which should indicate it's a good product.",
                            rating: 4,
                        },
            
                    ],
                },
                {
                    id: 80,
                    description: 'A hypoallergenic and pore clarifying 3-in-1 cleansing balm formulated especially for oily and breakout prone skin to target clogged pores, excess oil and waterproof makeup while deeply cleansing and replenishing moisture levels. FOR ACNE PRONE & OILY SKIN TYPES - Formulated with jojoba oil and a blend of AHA, BHA, LHA to gently remove exfoliate away excess dead skin cells and cleanse pores for a truly deep cleanse.',
                    ingredients: 'CETYL ETHYLHEXANOATE, TRIETHYLHEXANOIN, POLYGLYCERYL-10 DIOLEATE, C12-15 ALKYL BENZOATE, HYDROGENATED POLY(C6-14OLEFIN), PEG-8 GLYCERYL ISOSTEARATE, CAPRYLIC/CAPRIC TRIGLYCERIDE, PENTAERYTHRITYL TETRAETHYLHEXANOATE, PENTAERYTHRITYL TETRAISOSTEARATE, HYDROGENATED POLYISOBUTENE, COCOS NUCIFERA (COCONUT) OIL, PYRUS MALUS (APPLE ) SEED OIL(99.5ppm), PYRUS MALUS (APPLE) FRUIT EXTRACT, CITRUS UNSHIU PEEL EXTRACT, ORCHID EXTRACT, CAMELLIA SINENSIS LEAF EXTRACT, CAMELLIA JAPONICA LEAF EXTRACT, OPUNTIA COCCINELLIFERA , FRUIT EXTRACT, BUTYLENE GLYCOL, COCO-CAPRYLATE/CAPRATE, FRAGRANCE',
                    usage: 'When first trying the product, it is recommended to use it once or twice a week for one minute. The frequency of use can be gradually increased depending on the skin condition. \n1. After cleansing, lightly pat your skin dry. \n2. Apply 2 drops of product on the entire face or on the areas of concern and leave it for 1 minute. Gently massage onto face with fingers. \n3. After 1 minute, rinse thoroughly with lukewarm water. After cleansing, apply the skincare you normally use to prevent the skin from drying out. ',
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
                    id : 81,
                    description: "Melt-In Moisture Cleansing Balm: A cleanser packed with powerful greens and rich Avocado Oil to melt away all impurities and refresh the skin. Its unique formula effectively cleanses without irritation, delivering a dose of hydration, leaving behind only a balanced, satisfied, and glowing skin. Indulge in the Moment: Rich and buttery, this balm turns cleansing from a routine to a ritual. The smooth and lush texture quickly melts into the skin, easily emulsifying to dissolve impurities without irritation. Gentle on Skin: Using only the gentlest ingredients, the PURITO From Green Avocado Cleansing Balm can be used without the fear of dryness or irritation Nourish with Nature: Formulated with Kale Leaf, Spinach Leaf, Broccoli, Mugwort Leaf, and Cabbage Leaf extracts, the balm is made to soothe the skin and boost its elasticity to reveal a soft and supple, radiant complexion.",
                    ingredients: 'Avocado Oil, Green Flora Complex and Watermelon Seed & Baobab Seed Oil Blend work together to gently dissolve makeup, dirt, sunscreen and other impurities.',
                    usage: 'Apply evenly to your face, body, or any other areas that need sun protection before sun exposure. Reapply every 2-3 hours, especially after sweating, swimming, or towel drying.',
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
                    id : 82,
                    description: "A moisturizer-like sunscreen offers SPF50+ PA++++ sun protection with a non-sticky texture, made for sensitive skin. Korean Centella Asiatica offers skin soothing, Brown Algae Extract offers anti-pollution, and Hyaluronic Acid maintains hydration.A fast-absorbing, weightless formula that leaves the skin moisturized and dewy without any greasy residue. Crafted to shield the skin from urban stressors, it effectively blocks harmful UV rays while creating a barrier against pollutants like fine dust. SPF/PA Clinical Study Results for sun protector factor and strong urban defense with the fine dust adhesion prevention test and two skin irritation tests completed. Ultralight, moisturizer-like daily sunscreen with a non-sticky texture that leaves the skin moisturized and dewy, without any greasy residue. Thriving in Korea's four seasons, Korean Centella brings stronger calming benefits. Enduring the Korean winter boosts the plant's active compounds, making its soothing effect even more powerful.",
                    ingredients: 'Avocado Oil, Green Flora Complex and Watermelon Seed & Baobab Seed Oil Blend work together to gently dissolve makeup, dirt, sunscreen and other impurities.',
                    usage: '1. Apply generously 15 minutes before sun exposure.\n2. Reapply every two hours or as necessary and immediately after extensive sweating.',
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
                            rating: 2,
                        },
            
                    ],
                },
                {
                    id : 83,
                    description: "Refreshing gel cream with nourishing Avena Sativa (Oat) Seed Water instantly calms dry and sensitive skin. The lightweight clear texture softly melts on the skin, easily seeping into its layers. This gel cream improves skin's moisture level, and soothes hypersensitivity, keeping the skin balanced and vibrant. The combination of oat and panthenol provides a refreshing splash of hydration and additional nutrients while creating a protective barrier. Avena Sativa (Oat) Seed Water(77%) is a gentle ingredient that calms irritated skin. Rich in antioxidants and hydrating properties, this ingredient instantly improves the skin's moisture barrier. It is particularly suitable for sensitive skin. Squalane rapidly penetrates the skin to instantly hydrate and lock in moisture. This replenishing facial oil works to boost elasticity, nourish, soothe, and smooth out dehydration lines. Beta-Glucan is a humectant that effectively soothes and calms sensitive skin. It smoothes fine lines, providing hydrating and plumping benefits to the skin. This ingredient is also enriched with antioxidant properties to counteract environmental stressors.",
                    ingredients: 'Water, Oryza Sativa (Rice) Extract (30%), Dibutyl Adipate, Propanediol, Diethylamino Hydroxybenzoyl Hexyl Benzoate, Polymethylsilsesquioxane, Ethylhexyl Triazone, Niacinamide, Methylene Bis-benzotriazolyl Tetramethylbutylphenol, Coco-caprylate/Caprate, Caprylyl Methicone, Diethylhexyl Butamido Triazone, Glycerin, Butylene Glycol, Oryza Sativa (Rice) Germ Extract, Camellia Sinensis Leaf Extract, Lactobacillus/Pumpkin Ferment Extract, Bacillus/Soybean Ferment Extract, Saccharum Officinarum (Sugarcane) Extract, Macrocystis Pyrifera (Kelp) Extract, Cocos Nucifera (Coconut) Fruit Extract, Panax Ginseng Root Extract, Camellia Sinensis Leaf Extract, Monascus/Rice Ferment, Pentylene Glycol, Behenyl Alcohol, Poly C10-30 Alkyl Acrylate, Polyglyceryl-3 Methylglucose Distearate, Decyl Glucoside, Tromethamine, Carbomer, Acrylates/C10-30 Alkyl Acrylate Crosspolymer, 1,2-Hexanediol,Sodium Stearoyl Glutamate, Polyacrylate Crosspolymer-6',
                    usage: 'Take an appropirate amount of sunscreen and apply it onto your face and neck',
                    reviews: [
                        {
                            profile: 'https://d2gwgwt9a7yxle.cloudfront.net/what_is_user_id_in_net_banking_mobile_871b681e52.jp',
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
                            rating: 4,
                        },
                        {
                            profile: 'https://cdn.gobankingrates.com/wp-content/uploads/2024/01/a-woman-smiles-at-work-while-look-at-her-phone-iStock-1460124878.jpg?w=675&quality=75&webp=1',
                            name: 'Li Emma',
                            date: 'October 30, 2024 1:50 AM',
                            comment: "You only need one squirt! It has light coverage, and my skin reacted well to it. I am on automatic delivery, which should indicate it's a good product.",
                            rating: 4,
                        },
            
                    ],
                },
                {
                    id: 84,
                    description: 'A hypoallergenic and pore clarifying 3-in-1 cleansing balm formulated especially for oily and breakout prone skin to target clogged pores, excess oil and waterproof makeup while deeply cleansing and replenishing moisture levels. FOR ACNE PRONE & OILY SKIN TYPES - Formulated with jojoba oil and a blend of AHA, BHA, LHA to gently remove exfoliate away excess dead skin cells and cleanse pores for a truly deep cleanse.',
                    ingredients: 'CETYL ETHYLHEXANOATE, TRIETHYLHEXANOIN, POLYGLYCERYL-10 DIOLEATE, C12-15 ALKYL BENZOATE, HYDROGENATED POLY(C6-14OLEFIN), PEG-8 GLYCERYL ISOSTEARATE, CAPRYLIC/CAPRIC TRIGLYCERIDE, PENTAERYTHRITYL TETRAETHYLHEXANOATE, PENTAERYTHRITYL TETRAISOSTEARATE, HYDROGENATED POLYISOBUTENE, COCOS NUCIFERA (COCONUT) OIL, PYRUS MALUS (APPLE ) SEED OIL(99.5ppm), PYRUS MALUS (APPLE) FRUIT EXTRACT, CITRUS UNSHIU PEEL EXTRACT, ORCHID EXTRACT, CAMELLIA SINENSIS LEAF EXTRACT, CAMELLIA JAPONICA LEAF EXTRACT, OPUNTIA COCCINELLIFERA , FRUIT EXTRACT, BUTYLENE GLYCOL, COCO-CAPRYLATE/CAPRATE, FRAGRANCE',
                    usage: 'When first trying the product, it is recommended to use it once or twice a week for one minute. The frequency of use can be gradually increased depending on the skin condition. \n1. After cleansing, lightly pat your skin dry. \n2. Apply 2 drops of product on the entire face or on the areas of concern and leave it for 1 minute. Gently massage onto face with fingers. \n3. After 1 minute, rinse thoroughly with lukewarm water. After cleansing, apply the skincare you normally use to prevent the skin from drying out. ',
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
                    id : 85,
                    description: "Melt-In Moisture Cleansing Balm: A cleanser packed with powerful greens and rich Avocado Oil to melt away all impurities and refresh the skin. Its unique formula effectively cleanses without irritation, delivering a dose of hydration, leaving behind only a balanced, satisfied, and glowing skin. Indulge in the Moment: Rich and buttery, this balm turns cleansing from a routine to a ritual. The smooth and lush texture quickly melts into the skin, easily emulsifying to dissolve impurities without irritation. Gentle on Skin: Using only the gentlest ingredients, the PURITO From Green Avocado Cleansing Balm can be used without the fear of dryness or irritation Nourish with Nature: Formulated with Kale Leaf, Spinach Leaf, Broccoli, Mugwort Leaf, and Cabbage Leaf extracts, the balm is made to soothe the skin and boost its elasticity to reveal a soft and supple, radiant complexion.",
                    ingredients: 'Avocado Oil, Green Flora Complex and Watermelon Seed & Baobab Seed Oil Blend work together to gently dissolve makeup, dirt, sunscreen and other impurities.',
                    usage: 'Apply evenly to your face, body, or any other areas that need sun protection before sun exposure. Reapply every 2-3 hours, especially after sweating, swimming, or towel drying.',
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
                    id : 86,
                    description: "A moisturizer-like sunscreen offers SPF50+ PA++++ sun protection with a non-sticky texture, made for sensitive skin. Korean Centella Asiatica offers skin soothing, Brown Algae Extract offers anti-pollution, and Hyaluronic Acid maintains hydration.A fast-absorbing, weightless formula that leaves the skin moisturized and dewy without any greasy residue. Crafted to shield the skin from urban stressors, it effectively blocks harmful UV rays while creating a barrier against pollutants like fine dust. SPF/PA Clinical Study Results for sun protector factor and strong urban defense with the fine dust adhesion prevention test and two skin irritation tests completed. Ultralight, moisturizer-like daily sunscreen with a non-sticky texture that leaves the skin moisturized and dewy, without any greasy residue. Thriving in Korea's four seasons, Korean Centella brings stronger calming benefits. Enduring the Korean winter boosts the plant's active compounds, making its soothing effect even more powerful.",
                    ingredients: 'Avocado Oil, Green Flora Complex and Watermelon Seed & Baobab Seed Oil Blend work together to gently dissolve makeup, dirt, sunscreen and other impurities.',
                    usage: '1. Apply generously 15 minutes before sun exposure.\n2. Reapply every two hours or as necessary and immediately after extensive sweating.',
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
                            rating: 2,
                        },
            
                    ],
                },
                {
                    id : 87,
                    description: "Refreshing gel cream with nourishing Avena Sativa (Oat) Seed Water instantly calms dry and sensitive skin. The lightweight clear texture softly melts on the skin, easily seeping into its layers. This gel cream improves skin's moisture level, and soothes hypersensitivity, keeping the skin balanced and vibrant. The combination of oat and panthenol provides a refreshing splash of hydration and additional nutrients while creating a protective barrier. Avena Sativa (Oat) Seed Water(77%) is a gentle ingredient that calms irritated skin. Rich in antioxidants and hydrating properties, this ingredient instantly improves the skin's moisture barrier. It is particularly suitable for sensitive skin. Squalane rapidly penetrates the skin to instantly hydrate and lock in moisture. This replenishing facial oil works to boost elasticity, nourish, soothe, and smooth out dehydration lines. Beta-Glucan is a humectant that effectively soothes and calms sensitive skin. It smoothes fine lines, providing hydrating and plumping benefits to the skin. This ingredient is also enriched with antioxidant properties to counteract environmental stressors.",
                    ingredients: 'Water, Oryza Sativa (Rice) Extract (30%), Dibutyl Adipate, Propanediol, Diethylamino Hydroxybenzoyl Hexyl Benzoate, Polymethylsilsesquioxane, Ethylhexyl Triazone, Niacinamide, Methylene Bis-benzotriazolyl Tetramethylbutylphenol, Coco-caprylate/Caprate, Caprylyl Methicone, Diethylhexyl Butamido Triazone, Glycerin, Butylene Glycol, Oryza Sativa (Rice) Germ Extract, Camellia Sinensis Leaf Extract, Lactobacillus/Pumpkin Ferment Extract, Bacillus/Soybean Ferment Extract, Saccharum Officinarum (Sugarcane) Extract, Macrocystis Pyrifera (Kelp) Extract, Cocos Nucifera (Coconut) Fruit Extract, Panax Ginseng Root Extract, Camellia Sinensis Leaf Extract, Monascus/Rice Ferment, Pentylene Glycol, Behenyl Alcohol, Poly C10-30 Alkyl Acrylate, Polyglyceryl-3 Methylglucose Distearate, Decyl Glucoside, Tromethamine, Carbomer, Acrylates/C10-30 Alkyl Acrylate Crosspolymer, 1,2-Hexanediol,Sodium Stearoyl Glutamate, Polyacrylate Crosspolymer-6',
                    usage: 'Take an appropirate amount of sunscreen and apply it onto your face and neck',
                    reviews: [
                        {
                            profile: 'https://d2gwgwt9a7yxle.cloudfront.net/what_is_user_id_in_net_banking_mobile_871b681e52.jp',
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
                            rating: 4,
                        },
                        {
                            profile: 'https://cdn.gobankingrates.com/wp-content/uploads/2024/01/a-woman-smiles-at-work-while-look-at-her-phone-iStock-1460124878.jpg?w=675&quality=75&webp=1',
                            name: 'Li Emma',
                            date: 'October 30, 2024 1:50 AM',
                            comment: "You only need one squirt! It has light coverage, and my skin reacted well to it. I am on automatic delivery, which should indicate it's a good product.",
                            rating: 4,
                        },
            
                    ],
                },
                {
                    id: 88,
                    description: 'A hypoallergenic and pore clarifying 3-in-1 cleansing balm formulated especially for oily and breakout prone skin to target clogged pores, excess oil and waterproof makeup while deeply cleansing and replenishing moisture levels. FOR ACNE PRONE & OILY SKIN TYPES - Formulated with jojoba oil and a blend of AHA, BHA, LHA to gently remove exfoliate away excess dead skin cells and cleanse pores for a truly deep cleanse.',
                    ingredients: 'CETYL ETHYLHEXANOATE, TRIETHYLHEXANOIN, POLYGLYCERYL-10 DIOLEATE, C12-15 ALKYL BENZOATE, HYDROGENATED POLY(C6-14OLEFIN), PEG-8 GLYCERYL ISOSTEARATE, CAPRYLIC/CAPRIC TRIGLYCERIDE, PENTAERYTHRITYL TETRAETHYLHEXANOATE, PENTAERYTHRITYL TETRAISOSTEARATE, HYDROGENATED POLYISOBUTENE, COCOS NUCIFERA (COCONUT) OIL, PYRUS MALUS (APPLE ) SEED OIL(99.5ppm), PYRUS MALUS (APPLE) FRUIT EXTRACT, CITRUS UNSHIU PEEL EXTRACT, ORCHID EXTRACT, CAMELLIA SINENSIS LEAF EXTRACT, CAMELLIA JAPONICA LEAF EXTRACT, OPUNTIA COCCINELLIFERA , FRUIT EXTRACT, BUTYLENE GLYCOL, COCO-CAPRYLATE/CAPRATE, FRAGRANCE',
                    usage: 'When first trying the product, it is recommended to use it once or twice a week for one minute. The frequency of use can be gradually increased depending on the skin condition. \n1. After cleansing, lightly pat your skin dry. \n2. Apply 2 drops of product on the entire face or on the areas of concern and leave it for 1 minute. Gently massage onto face with fingers. \n3. After 1 minute, rinse thoroughly with lukewarm water. After cleansing, apply the skincare you normally use to prevent the skin from drying out. ',
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
                    id : 89,
                    description: "Melt-In Moisture Cleansing Balm: A cleanser packed with powerful greens and rich Avocado Oil to melt away all impurities and refresh the skin. Its unique formula effectively cleanses without irritation, delivering a dose of hydration, leaving behind only a balanced, satisfied, and glowing skin. Indulge in the Moment: Rich and buttery, this balm turns cleansing from a routine to a ritual. The smooth and lush texture quickly melts into the skin, easily emulsifying to dissolve impurities without irritation. Gentle on Skin: Using only the gentlest ingredients, the PURITO From Green Avocado Cleansing Balm can be used without the fear of dryness or irritation Nourish with Nature: Formulated with Kale Leaf, Spinach Leaf, Broccoli, Mugwort Leaf, and Cabbage Leaf extracts, the balm is made to soothe the skin and boost its elasticity to reveal a soft and supple, radiant complexion.",
                    ingredients: 'Avocado Oil, Green Flora Complex and Watermelon Seed & Baobab Seed Oil Blend work together to gently dissolve makeup, dirt, sunscreen and other impurities.',
                    usage: 'Apply evenly to your face, body, or any other areas that need sun protection before sun exposure. Reapply every 2-3 hours, especially after sweating, swimming, or towel drying.',
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
                    id : 90,
                    description: "A moisturizer-like sunscreen offers SPF50+ PA++++ sun protection with a non-sticky texture, made for sensitive skin. Korean Centella Asiatica offers skin soothing, Brown Algae Extract offers anti-pollution, and Hyaluronic Acid maintains hydration.A fast-absorbing, weightless formula that leaves the skin moisturized and dewy without any greasy residue. Crafted to shield the skin from urban stressors, it effectively blocks harmful UV rays while creating a barrier against pollutants like fine dust. SPF/PA Clinical Study Results for sun protector factor and strong urban defense with the fine dust adhesion prevention test and two skin irritation tests completed. Ultralight, moisturizer-like daily sunscreen with a non-sticky texture that leaves the skin moisturized and dewy, without any greasy residue. Thriving in Korea's four seasons, Korean Centella brings stronger calming benefits. Enduring the Korean winter boosts the plant's active compounds, making its soothing effect even more powerful.",
                    ingredients: 'Avocado Oil, Green Flora Complex and Watermelon Seed & Baobab Seed Oil Blend work together to gently dissolve makeup, dirt, sunscreen and other impurities.',
                    usage: '1. Apply generously 15 minutes before sun exposure.\n2. Reapply every two hours or as necessary and immediately after extensive sweating.',
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
                            rating: 2,
                        },
            
                    ],
                },
                {
                    id : 91,
                    description: "Refreshing gel cream with nourishing Avena Sativa (Oat) Seed Water instantly calms dry and sensitive skin. The lightweight clear texture softly melts on the skin, easily seeping into its layers. This gel cream improves skin's moisture level, and soothes hypersensitivity, keeping the skin balanced and vibrant. The combination of oat and panthenol provides a refreshing splash of hydration and additional nutrients while creating a protective barrier. Avena Sativa (Oat) Seed Water(77%) is a gentle ingredient that calms irritated skin. Rich in antioxidants and hydrating properties, this ingredient instantly improves the skin's moisture barrier. It is particularly suitable for sensitive skin. Squalane rapidly penetrates the skin to instantly hydrate and lock in moisture. This replenishing facial oil works to boost elasticity, nourish, soothe, and smooth out dehydration lines. Beta-Glucan is a humectant that effectively soothes and calms sensitive skin. It smoothes fine lines, providing hydrating and plumping benefits to the skin. This ingredient is also enriched with antioxidant properties to counteract environmental stressors.",
                    ingredients: 'Water, Oryza Sativa (Rice) Extract (30%), Dibutyl Adipate, Propanediol, Diethylamino Hydroxybenzoyl Hexyl Benzoate, Polymethylsilsesquioxane, Ethylhexyl Triazone, Niacinamide, Methylene Bis-benzotriazolyl Tetramethylbutylphenol, Coco-caprylate/Caprate, Caprylyl Methicone, Diethylhexyl Butamido Triazone, Glycerin, Butylene Glycol, Oryza Sativa (Rice) Germ Extract, Camellia Sinensis Leaf Extract, Lactobacillus/Pumpkin Ferment Extract, Bacillus/Soybean Ferment Extract, Saccharum Officinarum (Sugarcane) Extract, Macrocystis Pyrifera (Kelp) Extract, Cocos Nucifera (Coconut) Fruit Extract, Panax Ginseng Root Extract, Camellia Sinensis Leaf Extract, Monascus/Rice Ferment, Pentylene Glycol, Behenyl Alcohol, Poly C10-30 Alkyl Acrylate, Polyglyceryl-3 Methylglucose Distearate, Decyl Glucoside, Tromethamine, Carbomer, Acrylates/C10-30 Alkyl Acrylate Crosspolymer, 1,2-Hexanediol,Sodium Stearoyl Glutamate, Polyacrylate Crosspolymer-6',
                    usage: 'Take an appropirate amount of sunscreen and apply it onto your face and neck',
                    reviews: [
                        {
                            profile: 'https://d2gwgwt9a7yxle.cloudfront.net/what_is_user_id_in_net_banking_mobile_871b681e52.jp',
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
                            rating: 4,
                        },
                        {
                            profile: 'https://cdn.gobankingrates.com/wp-content/uploads/2024/01/a-woman-smiles-at-work-while-look-at-her-phone-iStock-1460124878.jpg?w=675&quality=75&webp=1',
                            name: 'Li Emma',
                            date: 'October 30, 2024 1:50 AM',
                            comment: "You only need one squirt! It has light coverage, and my skin reacted well to it. I am on automatic delivery, which should indicate it's a good product.",
                            rating: 4,
                        },
            
                    ],
                },
                {
                    id: 92,
                    description: 'A hypoallergenic and pore clarifying 3-in-1 cleansing balm formulated especially for oily and breakout prone skin to target clogged pores, excess oil and waterproof makeup while deeply cleansing and replenishing moisture levels. FOR ACNE PRONE & OILY SKIN TYPES - Formulated with jojoba oil and a blend of AHA, BHA, LHA to gently remove exfoliate away excess dead skin cells and cleanse pores for a truly deep cleanse.',
                    ingredients: 'CETYL ETHYLHEXANOATE, TRIETHYLHEXANOIN, POLYGLYCERYL-10 DIOLEATE, C12-15 ALKYL BENZOATE, HYDROGENATED POLY(C6-14OLEFIN), PEG-8 GLYCERYL ISOSTEARATE, CAPRYLIC/CAPRIC TRIGLYCERIDE, PENTAERYTHRITYL TETRAETHYLHEXANOATE, PENTAERYTHRITYL TETRAISOSTEARATE, HYDROGENATED POLYISOBUTENE, COCOS NUCIFERA (COCONUT) OIL, PYRUS MALUS (APPLE ) SEED OIL(99.5ppm), PYRUS MALUS (APPLE) FRUIT EXTRACT, CITRUS UNSHIU PEEL EXTRACT, ORCHID EXTRACT, CAMELLIA SINENSIS LEAF EXTRACT, CAMELLIA JAPONICA LEAF EXTRACT, OPUNTIA COCCINELLIFERA , FRUIT EXTRACT, BUTYLENE GLYCOL, COCO-CAPRYLATE/CAPRATE, FRAGRANCE',
                    usage: 'When first trying the product, it is recommended to use it once or twice a week for one minute. The frequency of use can be gradually increased depending on the skin condition. \n1. After cleansing, lightly pat your skin dry. \n2. Apply 2 drops of product on the entire face or on the areas of concern and leave it for 1 minute. Gently massage onto face with fingers. \n3. After 1 minute, rinse thoroughly with lukewarm water. After cleansing, apply the skincare you normally use to prevent the skin from drying out. ',
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
                    id : 93,
                    description: "Melt-In Moisture Cleansing Balm: A cleanser packed with powerful greens and rich Avocado Oil to melt away all impurities and refresh the skin. Its unique formula effectively cleanses without irritation, delivering a dose of hydration, leaving behind only a balanced, satisfied, and glowing skin. Indulge in the Moment: Rich and buttery, this balm turns cleansing from a routine to a ritual. The smooth and lush texture quickly melts into the skin, easily emulsifying to dissolve impurities without irritation. Gentle on Skin: Using only the gentlest ingredients, the PURITO From Green Avocado Cleansing Balm can be used without the fear of dryness or irritation Nourish with Nature: Formulated with Kale Leaf, Spinach Leaf, Broccoli, Mugwort Leaf, and Cabbage Leaf extracts, the balm is made to soothe the skin and boost its elasticity to reveal a soft and supple, radiant complexion.",
                    ingredients: 'Avocado Oil, Green Flora Complex and Watermelon Seed & Baobab Seed Oil Blend work together to gently dissolve makeup, dirt, sunscreen and other impurities.',
                    usage: 'Apply evenly to your face, body, or any other areas that need sun protection before sun exposure. Reapply every 2-3 hours, especially after sweating, swimming, or towel drying.',
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
                    id : 94,
                    description: "A moisturizer-like sunscreen offers SPF50+ PA++++ sun protection with a non-sticky texture, made for sensitive skin. Korean Centella Asiatica offers skin soothing, Brown Algae Extract offers anti-pollution, and Hyaluronic Acid maintains hydration.A fast-absorbing, weightless formula that leaves the skin moisturized and dewy without any greasy residue. Crafted to shield the skin from urban stressors, it effectively blocks harmful UV rays while creating a barrier against pollutants like fine dust. SPF/PA Clinical Study Results for sun protector factor and strong urban defense with the fine dust adhesion prevention test and two skin irritation tests completed. Ultralight, moisturizer-like daily sunscreen with a non-sticky texture that leaves the skin moisturized and dewy, without any greasy residue. Thriving in Korea's four seasons, Korean Centella brings stronger calming benefits. Enduring the Korean winter boosts the plant's active compounds, making its soothing effect even more powerful.",
                    ingredients: 'Avocado Oil, Green Flora Complex and Watermelon Seed & Baobab Seed Oil Blend work together to gently dissolve makeup, dirt, sunscreen and other impurities.',
                    usage: '1. Apply generously 15 minutes before sun exposure.\n2. Reapply every two hours or as necessary and immediately after extensive sweating.',
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
                            rating: 2,
                        },
            
                    ],
                },
                {
                    id : 95,
                    description: "Refreshing gel cream with nourishing Avena Sativa (Oat) Seed Water instantly calms dry and sensitive skin. The lightweight clear texture softly melts on the skin, easily seeping into its layers. This gel cream improves skin's moisture level, and soothes hypersensitivity, keeping the skin balanced and vibrant. The combination of oat and panthenol provides a refreshing splash of hydration and additional nutrients while creating a protective barrier. Avena Sativa (Oat) Seed Water(77%) is a gentle ingredient that calms irritated skin. Rich in antioxidants and hydrating properties, this ingredient instantly improves the skin's moisture barrier. It is particularly suitable for sensitive skin. Squalane rapidly penetrates the skin to instantly hydrate and lock in moisture. This replenishing facial oil works to boost elasticity, nourish, soothe, and smooth out dehydration lines. Beta-Glucan is a humectant that effectively soothes and calms sensitive skin. It smoothes fine lines, providing hydrating and plumping benefits to the skin. This ingredient is also enriched with antioxidant properties to counteract environmental stressors.",
                    ingredients: 'Water, Oryza Sativa (Rice) Extract (30%), Dibutyl Adipate, Propanediol, Diethylamino Hydroxybenzoyl Hexyl Benzoate, Polymethylsilsesquioxane, Ethylhexyl Triazone, Niacinamide, Methylene Bis-benzotriazolyl Tetramethylbutylphenol, Coco-caprylate/Caprate, Caprylyl Methicone, Diethylhexyl Butamido Triazone, Glycerin, Butylene Glycol, Oryza Sativa (Rice) Germ Extract, Camellia Sinensis Leaf Extract, Lactobacillus/Pumpkin Ferment Extract, Bacillus/Soybean Ferment Extract, Saccharum Officinarum (Sugarcane) Extract, Macrocystis Pyrifera (Kelp) Extract, Cocos Nucifera (Coconut) Fruit Extract, Panax Ginseng Root Extract, Camellia Sinensis Leaf Extract, Monascus/Rice Ferment, Pentylene Glycol, Behenyl Alcohol, Poly C10-30 Alkyl Acrylate, Polyglyceryl-3 Methylglucose Distearate, Decyl Glucoside, Tromethamine, Carbomer, Acrylates/C10-30 Alkyl Acrylate Crosspolymer, 1,2-Hexanediol,Sodium Stearoyl Glutamate, Polyacrylate Crosspolymer-6',
                    usage: 'Take an appropirate amount of sunscreen and apply it onto your face and neck',
                    reviews: [
                        {
                            profile: 'https://d2gwgwt9a7yxle.cloudfront.net/what_is_user_id_in_net_banking_mobile_871b681e52.jp',
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
                            rating: 4,
                        },
                        {
                            profile: 'https://cdn.gobankingrates.com/wp-content/uploads/2024/01/a-woman-smiles-at-work-while-look-at-her-phone-iStock-1460124878.jpg?w=675&quality=75&webp=1',
                            name: 'Li Emma',
                            date: 'October 30, 2024 1:50 AM',
                            comment: "You only need one squirt! It has light coverage, and my skin reacted well to it. I am on automatic delivery, which should indicate it's a good product.",
                            rating: 4,
                        },
            
                    ],
                },
                {
                    id: 96,
                    description: 'A hypoallergenic and pore clarifying 3-in-1 cleansing balm formulated especially for oily and breakout prone skin to target clogged pores, excess oil and waterproof makeup while deeply cleansing and replenishing moisture levels. FOR ACNE PRONE & OILY SKIN TYPES - Formulated with jojoba oil and a blend of AHA, BHA, LHA to gently remove exfoliate away excess dead skin cells and cleanse pores for a truly deep cleanse.',
                    ingredients: 'CETYL ETHYLHEXANOATE, TRIETHYLHEXANOIN, POLYGLYCERYL-10 DIOLEATE, C12-15 ALKYL BENZOATE, HYDROGENATED POLY(C6-14OLEFIN), PEG-8 GLYCERYL ISOSTEARATE, CAPRYLIC/CAPRIC TRIGLYCERIDE, PENTAERYTHRITYL TETRAETHYLHEXANOATE, PENTAERYTHRITYL TETRAISOSTEARATE, HYDROGENATED POLYISOBUTENE, COCOS NUCIFERA (COCONUT) OIL, PYRUS MALUS (APPLE ) SEED OIL(99.5ppm), PYRUS MALUS (APPLE) FRUIT EXTRACT, CITRUS UNSHIU PEEL EXTRACT, ORCHID EXTRACT, CAMELLIA SINENSIS LEAF EXTRACT, CAMELLIA JAPONICA LEAF EXTRACT, OPUNTIA COCCINELLIFERA , FRUIT EXTRACT, BUTYLENE GLYCOL, COCO-CAPRYLATE/CAPRATE, FRAGRANCE',
                    usage: 'When first trying the product, it is recommended to use it once or twice a week for one minute. The frequency of use can be gradually increased depending on the skin condition. \n1. After cleansing, lightly pat your skin dry. \n2. Apply 2 drops of product on the entire face or on the areas of concern and leave it for 1 minute. Gently massage onto face with fingers. \n3. After 1 minute, rinse thoroughly with lukewarm water. After cleansing, apply the skincare you normally use to prevent the skin from drying out. ',
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
                    id : 97,
                    description: "Melt-In Moisture Cleansing Balm: A cleanser packed with powerful greens and rich Avocado Oil to melt away all impurities and refresh the skin. Its unique formula effectively cleanses without irritation, delivering a dose of hydration, leaving behind only a balanced, satisfied, and glowing skin. Indulge in the Moment: Rich and buttery, this balm turns cleansing from a routine to a ritual. The smooth and lush texture quickly melts into the skin, easily emulsifying to dissolve impurities without irritation. Gentle on Skin: Using only the gentlest ingredients, the PURITO From Green Avocado Cleansing Balm can be used without the fear of dryness or irritation Nourish with Nature: Formulated with Kale Leaf, Spinach Leaf, Broccoli, Mugwort Leaf, and Cabbage Leaf extracts, the balm is made to soothe the skin and boost its elasticity to reveal a soft and supple, radiant complexion.",
                    ingredients: 'Avocado Oil, Green Flora Complex and Watermelon Seed & Baobab Seed Oil Blend work together to gently dissolve makeup, dirt, sunscreen and other impurities.',
                    usage: 'Apply evenly to your face, body, or any other areas that need sun protection before sun exposure. Reapply every 2-3 hours, especially after sweating, swimming, or towel drying.',
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
                    id : 98,
                    description: "A moisturizer-like sunscreen offers SPF50+ PA++++ sun protection with a non-sticky texture, made for sensitive skin. Korean Centella Asiatica offers skin soothing, Brown Algae Extract offers anti-pollution, and Hyaluronic Acid maintains hydration.A fast-absorbing, weightless formula that leaves the skin moisturized and dewy without any greasy residue. Crafted to shield the skin from urban stressors, it effectively blocks harmful UV rays while creating a barrier against pollutants like fine dust. SPF/PA Clinical Study Results for sun protector factor and strong urban defense with the fine dust adhesion prevention test and two skin irritation tests completed. Ultralight, moisturizer-like daily sunscreen with a non-sticky texture that leaves the skin moisturized and dewy, without any greasy residue. Thriving in Korea's four seasons, Korean Centella brings stronger calming benefits. Enduring the Korean winter boosts the plant's active compounds, making its soothing effect even more powerful.",
                    ingredients: 'Avocado Oil, Green Flora Complex and Watermelon Seed & Baobab Seed Oil Blend work together to gently dissolve makeup, dirt, sunscreen and other impurities.',
                    usage: '1. Apply generously 15 minutes before sun exposure.\n2. Reapply every two hours or as necessary and immediately after extensive sweating.',
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
                            rating: 2,
                        },
            
                    ],
                },
                {
                    id : 99,
                    description: "Refreshing gel cream with nourishing Avena Sativa (Oat) Seed Water instantly calms dry and sensitive skin. The lightweight clear texture softly melts on the skin, easily seeping into its layers. This gel cream improves skin's moisture level, and soothes hypersensitivity, keeping the skin balanced and vibrant. The combination of oat and panthenol provides a refreshing splash of hydration and additional nutrients while creating a protective barrier. Avena Sativa (Oat) Seed Water(77%) is a gentle ingredient that calms irritated skin. Rich in antioxidants and hydrating properties, this ingredient instantly improves the skin's moisture barrier. It is particularly suitable for sensitive skin. Squalane rapidly penetrates the skin to instantly hydrate and lock in moisture. This replenishing facial oil works to boost elasticity, nourish, soothe, and smooth out dehydration lines. Beta-Glucan is a humectant that effectively soothes and calms sensitive skin. It smoothes fine lines, providing hydrating and plumping benefits to the skin. This ingredient is also enriched with antioxidant properties to counteract environmental stressors.",
                    ingredients: 'Water, Oryza Sativa (Rice) Extract (30%), Dibutyl Adipate, Propanediol, Diethylamino Hydroxybenzoyl Hexyl Benzoate, Polymethylsilsesquioxane, Ethylhexyl Triazone, Niacinamide, Methylene Bis-benzotriazolyl Tetramethylbutylphenol, Coco-caprylate/Caprate, Caprylyl Methicone, Diethylhexyl Butamido Triazone, Glycerin, Butylene Glycol, Oryza Sativa (Rice) Germ Extract, Camellia Sinensis Leaf Extract, Lactobacillus/Pumpkin Ferment Extract, Bacillus/Soybean Ferment Extract, Saccharum Officinarum (Sugarcane) Extract, Macrocystis Pyrifera (Kelp) Extract, Cocos Nucifera (Coconut) Fruit Extract, Panax Ginseng Root Extract, Camellia Sinensis Leaf Extract, Monascus/Rice Ferment, Pentylene Glycol, Behenyl Alcohol, Poly C10-30 Alkyl Acrylate, Polyglyceryl-3 Methylglucose Distearate, Decyl Glucoside, Tromethamine, Carbomer, Acrylates/C10-30 Alkyl Acrylate Crosspolymer, 1,2-Hexanediol,Sodium Stearoyl Glutamate, Polyacrylate Crosspolymer-6',
                    usage: 'Take an appropirate amount of sunscreen and apply it onto your face and neck',
                    reviews: [
                        {
                            profile: 'https://d2gwgwt9a7yxle.cloudfront.net/what_is_user_id_in_net_banking_mobile_871b681e52.jp',
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
                            rating: 4,
                        },
                        {
                            profile: 'https://cdn.gobankingrates.com/wp-content/uploads/2024/01/a-woman-smiles-at-work-while-look-at-her-phone-iStock-1460124878.jpg?w=675&quality=75&webp=1',
                            name: 'Li Emma',
                            date: 'October 30, 2024 1:50 AM',
                            comment: "You only need one squirt! It has light coverage, and my skin reacted well to it. I am on automatic delivery, which should indicate it's a good product.",
                            rating: 4,
                        },
            
                    ],
                },
                {
                    id: 100,
                    description: 'A hypoallergenic and pore clarifying 3-in-1 cleansing balm formulated especially for oily and breakout prone skin to target clogged pores, excess oil and waterproof makeup while deeply cleansing and replenishing moisture levels. FOR ACNE PRONE & OILY SKIN TYPES - Formulated with jojoba oil and a blend of AHA, BHA, LHA to gently remove exfoliate away excess dead skin cells and cleanse pores for a truly deep cleanse.',
                    ingredients: 'CETYL ETHYLHEXANOATE, TRIETHYLHEXANOIN, POLYGLYCERYL-10 DIOLEATE, C12-15 ALKYL BENZOATE, HYDROGENATED POLY(C6-14OLEFIN), PEG-8 GLYCERYL ISOSTEARATE, CAPRYLIC/CAPRIC TRIGLYCERIDE, PENTAERYTHRITYL TETRAETHYLHEXANOATE, PENTAERYTHRITYL TETRAISOSTEARATE, HYDROGENATED POLYISOBUTENE, COCOS NUCIFERA (COCONUT) OIL, PYRUS MALUS (APPLE ) SEED OIL(99.5ppm), PYRUS MALUS (APPLE) FRUIT EXTRACT, CITRUS UNSHIU PEEL EXTRACT, ORCHID EXTRACT, CAMELLIA SINENSIS LEAF EXTRACT, CAMELLIA JAPONICA LEAF EXTRACT, OPUNTIA COCCINELLIFERA , FRUIT EXTRACT, BUTYLENE GLYCOL, COCO-CAPRYLATE/CAPRATE, FRAGRANCE',
                    usage: 'When first trying the product, it is recommended to use it once or twice a week for one minute. The frequency of use can be gradually increased depending on the skin condition. \n1. After cleansing, lightly pat your skin dry. \n2. Apply 2 drops of product on the entire face or on the areas of concern and leave it for 1 minute. Gently massage onto face with fingers. \n3. After 1 minute, rinse thoroughly with lukewarm water. After cleansing, apply the skincare you normally use to prevent the skin from drying out. ',
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
 
  
});
