const services = {
  haircut: "360 грн",
  shaving: "280 грн",
  washing: "200 грн",
};

function price(services) {
  let sum = 0;
  for (const key in services){
    const value = parseInt(services[key]);
    sum += value;
  }
  return sum;
}

console.log("Total price:", price(services));


services['Break window'] = "2000 грн";
console.log("New total price:", price(services));


let minPrice = Infinity;
let minService = "";

for (const key in services) {
  const value = parseInt(services[key]);
  if (value < minPrice) {
    minPrice = value;
    minService = key;
  }
}

console.log(`Minimum price: ${minPrice} uah for service "${minService}"`);

function maxPrice(services) {
  let maxPrice = -Infinity;
  let expensiveService = "";

  for (const key in services) {
    const value = parseInt(services[key]);
    if (value > maxPrice) {
      maxPrice = value;
      expensiveService = key;
    }
  }

  return {
    service: expensiveService,
    price: maxPrice
  };
}

const mostExpensive = maxPrice(services);
console.log(`The most expensive service: "${mostExpensive.service}" — ${mostExpensive.price} uah`);