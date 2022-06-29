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
            obj[listOfProducts[i].productName] = 1;
        }
        else {
            obj[listOfProducts[i].productName]++;
        }
    }
    return obj;
}

console.log(getUniqueProductCount(listOfProducts));


function getUniquePrducts(listOfProducts) {
    let obj = {};
    let productarr = [];
    let n = listOfProducts.length;
    
    for (let i = 0; i < n; i++) {
        if(obj[listOfProducts[i].productName] == undefined) {
                obj[listOfProducts[i].productName] = 1;
            }
        else {
            obj[listOfProducts[i].productName]++;
        }
    }
    
    for(keys in obj) {
        productarr.push(keys);    
    }
    // console.log(productarr);
    
    let arr = [];
    
    for (let i = 0; i < productarr.length; i++) {
        let obj1 = {};
        let pro_quantity = 0;
        let pro_name = "";
        let pro_description = "";
        let check = 0;
        
        for (let j = 0; j < n; j++) {
            if (productarr[i] === listOfProducts[j].productName) {
                pro_name = listOfProducts[j].productName;
                pro_quantity += listOfProducts[j].quantity;
                pro_description = listOfProducts[j].description;
                check = 1;
            }
        }
        if (check == 1) {
            obj1.productName = pro_name;
            obj1.quantity = pro_quantity;
            obj1.description = pro_description;
            arr.push(obj1);
        };
    }
    return arr;
}
console.log(getUniquePrducts(listOfProducts));
