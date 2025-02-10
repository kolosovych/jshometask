let hotelServices = {
"single room" : "50 usd",
"double room" : "100 usd",
"breakfast" : "22 usd",
"beverage" : "16 usd",
"cleaning" : "18 usd",
"transfer" : "10 usd",
"parking" : "8 usd"
}
hotelServices.dinner = "25 usd"; 

function price(services){
    let a  = Object.values(services).reduce((sum, amount) => {
        let num = parseFloat(amount.replace(" usd'", " "));
        return sum + num;
    }, 0);    
   return a; 
} 
console.log(price(hotelServices));

 
function minPrice(services) {
let prices = Object.values(services);

    let min = parseFloat(prices[0].replace(" usd", ""));
    for (let i = 1; i < prices.length; i++) {
        let price = parseFloat(prices[i].replace(" usd", ""));
        if (price < min) {
            min = price;
        }
    }
    return min;
}
console.log("Min " + minPrice(hotelServices));  



function maxPrice(services) {
    let prices = Object.values(services);
    
        let max = parseFloat(prices[0].replace(" usd", ""));
        for (let i = 1; i < prices.length; i++) {
            let price = parseFloat(prices[i].replace(" usd", ""));
            if (price > max) {
                max = price;
            }
        }
        return max;
    }
    console.log("Max " + maxPrice(hotelServices));  















