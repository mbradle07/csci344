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
 const filterNumbers = (arr) => {

    return arr.filter(number => {
        return number % 5 == 0 && number != 0;
    });
 }

console.log('\n\n**********\nQuestion 3\n**********');
console.log(filterNumbers([23, 25, 2, 10, 17, 3, 25]));
console.log(filterNumbers([0, 5, 6, 7, 8, 9, 10, 0, 16, 5]));

 //Q4. Your code here:
 const getNamesOfExecutives = (arr) => {
    return arr.filter(employee => employee.role === 'executive').map(employee => employee.name);
 }

 const list1 = [
    { role: "assistant", name: "Larry", salary: 34000 },
    { role: "executive", name: "Curly", salary: 340000  },
    { role: "associate", name: "Kayla", salary: 58000  },
    { role: "executive", name: "Monique", salary: 580000  },
    { role: "assistant", name: "Fred", salary: 38000 },
    { role: "associate", name: "Isiah", salary: 78000 }
 ]
 
 
 const list2 = [
    { role: "associate", name: "Juana", salary: 70500 },
    { role: "assistant", name: "Maria", salary: 28000 },
    { role: "assistant", name: "Frank", salary: 18000 }
 ]
 console.log('\n\n**********\nQuestion 4\n**********');
console.log(getNamesOfExecutives(list1));
console.log(getNamesOfExecutives(list2));
