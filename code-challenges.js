// ASSESSMENT 4: JavaScript Coding Practical Questions

// --------------------1) Create a function that takes in an array. Each time the function is run, remove the first item from the array and shuffle the remaining content. If the array is empty, return "The array is empty."

var collections = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example1 (can be a different order): ["yellow", "blue", "pink", "green"]
// Expected output example2 (can be a different order): ["blue", "green", "pink"]
// Expected output example3 (can be a different order): ["pink", "green"]


const suffhAndRem = (array) => {  
// remove the first value in the array
    array.shift()
//  check if the array is not empty  
    if (array.length == 0) {
        return "The array is empty" 
    }
    // need ot add the shuffle function
        else {return array}
}
       

console.log("1.1",suffhAndRem(collections))
console.log("1.2",suffhAndRem(collections))
console.log("1.3",suffhAndRem(collections))
console.log("1.4",suffhAndRem(collections))
console.log("1.5",suffhAndRem(collections))


// --------------------2) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

var cubeAndSum1 = [2, 3, 4]
// Expected output: 99
var cubeAndSum2 = [0, 5, 10]
// Expected output: 1125

const cubeSum = (array) => {
    let cube = []
    for (let i = 0; i < array.length; i++) {
    // push a new array with each element multiplied by 3
    cube.push(Math.pow(array[i],3))
    }
    // return the array at cube and sum all the elements using reduce
    return cube.reduce((a, b) => a + b)  
  }


console.log( "2.1 : 99", cubeSum(cubeAndSum1))
console.log( "2.2 : 1125", cubeSum(cubeAndSum2))




// --------------------3) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

var nums1 = [3, 56, 90, -8, 0, 23, 6]
// Expected output: [-8, 90]
var nums2 = [109, 5, 9, -59, 8, 24]
// Expected output: [-59, 109]

const minMax = (num) => {
    let arr1 = Math.min(...num)
    let arr2 = Math.max(...num)
    
    // let newArr = array.filter(value => {return (a-b  )})
 return [arr1, arr2]
}

console.log("3.1 (-8, 90)", minMax(nums1))
console.log("3.2 (-59, 109)", minMax(nums2))




// --------------------4) Create a function that takes in a string and returns a string with every other letter capitalized.

var testString1 = "albatross"
// Expected output: "aLbAtRoSs"
var testString2 = "jabberwocky"
// Expected output: "jAbBeRwOcKy"


const everyOthCap = (string) => {
    let array = string.split("")
    let cap = array.map((value, index) => {
        if (index %2 == 1) 
        return value.toUpperCase()
        else  return value
})
    return cap.join('')
}  

console.log("4.1", everyOthCap(testString1))
console.log("4.2", everyOthCap(testString2))




// --------------------5) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

var arr1 = [3, 7, 10, 5, 4, 3, 3]
var arr2 = [7, 8, 2, 3, 1, 5, 4]
// Expected output: [3, 7, 10, 5, 4, 8, 2, 1]

const mergeArr = (arr1, arr2) => {
// merge the two arrays in one
let merged = arr1.concat(arr2)
console.log ("merged", merged) 
// filter the array using .filter() and a for loop comparing the values 
ß
let filtered = merged.filter((value,) =>{
for (let index = 0; index < merged.length; index++)
 if (value !== value)
    return value
    })
    // return `filtered : ${filtered}`
    return filtered
}

console.log ("5:", mergeArr(arr1,arr2))
