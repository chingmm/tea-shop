/////////////////////////////////
// DB CONNECTION
/////////////////////////////////
const mongoose = require("./dbconn");

/////////////////////////////////
// IMPORT MODELS
/////////////////////////////////
const Tea = require("../models/teas")

//////////////////////////////////
// DATA TO SEED
//////////////////////////////////
const teaSelection = [
    {
        name: "after dinner mint",
        category: "herbal",
        price: 18,
        size: "4 oz",
        img: "https://cdn.shopify.com/s/files/1/0311/4398/5197/products/PACIFIC_COAST_MINT_800x.jpg?v=1582573343",
        description: "Our herbal mint tea blend - for any time you need a refresh or reset.",
        // reviews: ["Best tea that I've ever had!!!", "Will definitely buy again"]
    },
    {
        name: "peach bellini",
        category: "herbal",
        price: 21,
        size: "4 oz",
        img: "https://cdn.shopify.com/s/files/1/0311/4398/5197/products/WHITE_PEACH_800x.jpg?v=1582505609",
        description: "Sip and have some fun.",
        // reviews: ["Best tea that I've ever had!!!", "Will definitely buy again"]
    },
    {
        name: "night-time cuddles",
        category: "herbal",
        price: 16,
        size: "4 oz",
        img: "https://cdn.shopify.com/s/files/1/0311/4398/5197/products/SOOTHE_800x.jpg?v=1582524338",
        description: "End your day in a delightful way and enjoy a great night's sleep with our signature sleepy tea blend.",
        // reviews: ["Best tea that I've ever had!!!", "Will definitely buy again"]
    },
    {
        name: "zestfully green",
        category: "green",
        price: 22,
        size: "4 oz",
        img: "https://cdn.shopify.com/s/files/1/0311/4398/5197/products/SAKURA_800x.jpg?v=1582504566",
        description: "A great tea for great tea time conversations.",
        // reviews: ["Best tea that I've ever had!!!", "Will definitely buy again"]
    },
    {
        name: "blood orange boost",
        category: "green",
        price: 19,
        size: "4 oz",
        img: "https://cdn.shopify.com/s/files/1/0311/4398/5197/products/ITALIAN_BLOOD_ORANGE_800x.jpg?v=1582515894",
        description: "Sparks nourishment and great ideas.",
        // reviews: ["Best tea that I've ever had!!!", "Will definitely buy again"]
    },
    {
        name: "organic goji green",
        category: "green",
        price: 30,
        size: "4 oz",
        img: "https://cdn.shopify.com/s/files/1/0311/4398/5197/products/HAPPY_TEA_800x.jpg?v=1582521004",
        description: "Healthy, wealthy, and wise.",
        // reviews: ["Best tea that I've ever had!!!", "Will definitely buy again"]
    },
    {
        name: "cherry berry punch",
        category: "black",
        price: 25,
        size: "4 oz",
        img: "https://cdn.shopify.com/s/files/1/0311/4398/5197/products/TURKISH_APPLE_800x.jpg?v=1582326559",
        description: "Savor those sweet summer moments.",
        // reviews: ["Best tea that I've ever had!!!", "Will definitely buy again"]
    },
    {
        name: "vanilla bean black",
        category: "black",
        price: 27,
        size: "4 oz",
        img: "https://cdn.shopify.com/s/files/1/0311/4398/5197/products/JASMINE_ANCIENT_BEAUTY_800x.jpg?v=1582493145",
        description: "Sometimes something simple is best.",
        // reviews: ["Best tea that I've ever had!!!", "Will definitely buy again"]
    },
    {
        name: "glitter and gold",
        category: "black",
        price: 29,
        size: "4 oz",
        img: "https://cdn.shopify.com/s/files/1/0311/4398/5197/products/SUMMER_PEACH_800x.jpg?v=1582325253",
        description: "Transport yourself to a dreamy vacation in one sip.",
        // reviews: ["Best tea that I've ever had!!!", "Will definitely buy again"]
    },
]

//////////////////////////////////
// SEED THE DATA
//////////////////////////////////
Tea.create(teaSelection, (err, data) => {
    console.log(data)
    mongoose.connection.close()
})

