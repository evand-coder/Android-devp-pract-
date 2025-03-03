let prices = [15, 5, 20, 8, 7];
let weight = [3, 4, 6, 8, 2];
let Cap = 20;

class Product {
    constructor(price, weight) {
        this.price = price;
        this.weight = weight;
        this.perkgPrice = price / weight;
    }
}

function Fractionalknapsack(Products, Cap) {
    let sorted = Products.sort((a, b) => b.perkgPrice - a.perkgPrice); // Sort by per kg price
    let totalProfit = 0;
    let currentWeight = 0;

    for (let item of sorted) {
        if ((currentWeight + item.weight) <= Cap) {
            currentWeight += item.weight;
            totalProfit += item.price;
        } else {
            let remainingWeight = Cap - currentWeight;
            totalProfit += item.price * (remainingWeight / item.weight);
            break; // After taking fractional part, exit the loop
        }
    }

    return totalProfit; // Return the total profit
}

let Products = [];

for (let i = 0; i < prices.length; i++) {
    Products.push(new Product(prices[i], weight[i]));
}

let op_sol = Fractionalknapsack(Products, Cap);
console.log(op_sol);
