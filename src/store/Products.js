import { defineStore } from "pinia"
import { orderBy } from "lodash"

export const useProductStore = defineStore('product', {
    state(){
        return{
            products: [],
            categories: [],
            reviews: [
                [],
                [
                    {
                        name: 'Pov Pov',
                        date: 'November 6, 2024 8:26 PM',
                        comment: "I use this in the morning and at night and for the price it's great! Doesn't have a strong smell and keeps my skin hydrated all day. My skin tone seems more even and my skin isn't greasy after using it. I will counting to buy this as long as it's available!",
                        rating: 4,
                    },
                    {
                        name: 'Kim Jenny',
                        date: 'October 31, 2024 1:52 AM',
                        comment: "I was influenced to try this after watching a couple of YouTube dermatologists. I like the packaging--it's very satisfying to see that I have used up the entire product. It feels nice going on and there's no fragrance. I would say it's moisturizing, but I don't think it's amazing. For $20.00, (which is fairly expensive for a this in the morning and at night and for the price it's great! Doesn't have a strong smell and keeps my skin hydrated all day. My skin tone seems more even and my skin isn't greasy after using it. I will counting to buy this as long as it's available!",
                        rating: 4,
                    },
                    {
                        name: 'Li Emma',
                        date: 'October 30, 2024 1:50 AM',
                        comment: "You only need one squirt! It has light coverage, and my skin reacted well to it. I am on automatic delivery, which should indicate it's a good product.",
                        rating: 4,
                    },
        
                ],
                []
            ]
        }
    },
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
            return orderBy(productsArray, ['price'], ['asc'])
        },
        sortProductsByPopularity(productsArray){
            return orderBy(productsArray, ['countSold'], ['desc'])
        },
        sortProductsByRating(productsArray){
            return orderBy(productsArray, ['rating'], ['desc'])
        },
        sortProductsByAlpabetA2Z(productsArray){
            return orderBy(productsArray, ['name'], ['asc'])
        },
        sortProductsByAlpabetZ2A(productsArray){
            return orderBy(productsArray, ['name'], ['desc'])
        },


    },
  })  