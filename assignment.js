/*
You have been given a list of products which is having property productName, quantity and description.

PROBLEM STATEMENTS:

1. you need to write a function say, getUniqueProductCount which should return count of each Product(as an object) present in the given list of Products considering Product Name as Key.

Sample Output for the given listOfProducts will be :

{
  "TV": 2,
  "AC": 2,
  "FAN": 1
}

2. you need to write a function say, getUniquePrducts which should return an array of objects by grouping the products based on the productName and summing up the quantity for the same products present in the given list of Products considering Product Name as Key.

Sample Output for the given listOfProducts will be :

[{
    productName: "TV",
    quantity: 20,
    description: "television"
  },
  {
    productName: "AC",
    quantity: 10,
    description: "air conditioner"
  },
  {
    productName: "FAN",
    quantity: 10,
     description: "Ceiling Fan"
  }
]
*/

const listOfProducts = [{
    productName: "TV",
    quantity: 10,
    description: "television"
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner"
  },
  {
    productName: "TV",
    quantity: 10,
    description: "television"
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner"
  },
  {
    productName: "FAN",
    quantity: 10,
    description: "Ceiling Fan"
  }
];


function getUniqueProductCount(listOfProducts) {
    let obj = {};
    let n = listOfProducts.length;

    for(let i = 0; i < n; i++)
    {
        if(obj[listOfProducts[i].productName] == undefined) {
            obj[listOfProducts[i].productName] = listOfProducts[i].quantity;
        }
        else {
            obj[listOfProducts[i].productName] += listOfProducts[i].quantity;
        }
    }
    console.log(obj);
}

getUniqueProductCount(listOfProducts);