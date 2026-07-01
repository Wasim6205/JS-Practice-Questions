const products = [
  {
    name: "Laptop",
    price: 75000,
    category: "Electronics",
  },
  {
    name: "Running Shoes",
    price: 4500,
    category: "Footwear",
  },
  {
    name: "Coffee Mug",
    price: 350,
    category: "Kitchen",
  },
  {
    name: "Backpack",
    price: 1800,
    category: "Accessories",
  },
  {
    name: "Wireless Mouse",
    price: 1200,
    category: "Electronics",
  },
];

let productNames = products.map((product)=>product.name)
console.log(productNames);

let specificProducts = products.filter((product)=>product.category==="Accessories")
console.log(specificProducts);

const totalPrice = products.reduce(
  (total, product) => total + product.price,
  0,
);

console.log(productNames);
console.log(specificProducts);
console.log(totalPrice);
