// Q1. Your code here:
const addNums = (arr) => {
    let sum = 0;
    for (let number of arr) {
        sum = sum + number;
    }
    return sum;
}





// When you have implemented your solution, 
// uncomment out the following code to test it:
console.log('\n\n**********\nQuestion 1\n**********');
console.log("Expected: 6, Actual:", addNums([1, 2, 3]));
console.log("Expected: 221, Actual:", addNums([1, 4, 77, 12, 88, 33, 6]));




// Q2. Your code here:
const addNums1 = (arr) => {
    const aggregator = (sum, nextValInArray) => {
        return sum + nextValInArray;
    }
    return arr.reduce(aggregator);
}



// When you have implemented your solution, 
// uncomment out the following code to test it:
console.log('\n\n**********\nQuestion 2\n**********');
console.log("Expected: 6, Actual:", addNums1([1, 2, 3]));
console.log("Expected: 221, Actual:", addNums1([1, 4, 77, 12, 88, 33, 6]));

//Q3. Your code here: