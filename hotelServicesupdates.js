let hotelServices = {
    "single room": "50 usd",
    "double room": "100 usd",
    "breakfast": "22 usd",
    "beverage": "16 usd",
    "cleaning": "18 usd",
    "transfer": "20 usd",
    "parking": "8 usd",

    price: function () {
        let total = 0; 
        for (let key in this) {
            if (typeof this[key] === "string" && this[key].includes("usd")) {
                let num = parseFloat(this[key].replace(" usd", ""));
                total += num
            }
        }
        return total; 
    },

    minPrice: function() {
        let min = 0; 
        for (let key in this) {
            if (typeof this[key] === "string" && this[key].includes("usd")) {
                let price = parseFloat(this[key].replace(" usd", ""));
                if (min === 0 || price < min) {
                    min = price; 
                }
            }
        }
    
        return min;  
    },
    maxPrice: function() {
        let max = 0; 
        for (let key in this) {
            if (typeof this[key] === "string" && this[key].includes("usd")) {
                let price = parseFloat(this[key].replace(" usd", ""));
                if (max === 0 || price > max) {
                    max = price; 
                }
            }
        }
    
        return max;  
    }
}

    hotelServices.coffee= "3 usd";
    hotelServices.luxeRoom = "300 usd";


    console.log(hotelServices.price());
    console.log("Min: " + hotelServices.minPrice()); 
    console.log("Max: " + hotelServices.maxPrice());
    





    















// function price(services){
//     let a  = Object.values(services).reduce((sum, amount) => {
//         let num = parseFloat(amount.replace(" usd'", " "));
//         return sum + num;
//     }, 0);    
//    return a; 
// } 
//console.log(hotelServices.price());

 
// function minPrice(services) {
// let prices = Object.values(services);

//     let min = parseFloat(prices[0].replace(" usd", ""));
//     for (let i = 1; i < prices.length; i++) {
//         let price = parseFloat(prices[i].replace(" usd", ""));
//         if (price < min) {
//             min = price;
//         }
//     }
//     return min;
// }
// console.log("Min " + minPrice(hotelServices));  



// function maxPrice(services) {
//     let prices = Object.values(services);
    
//         let max = parseFloat(prices[0].replace(" usd", ""));
//         for (let i = 1; i < prices.length; i++) {
//             let price = parseFloat(prices[i].replace(" usd", ""));
//             if (price > max) {
//                 max = price;
//             }
//         }
//         return max;
//     }
//     console.log("Max " + maxPrice(hotelServices));  















