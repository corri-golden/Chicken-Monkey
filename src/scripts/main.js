// Write a program that prints the numbers from 1 to 100. But for multiples of five (5, 10, 15, etc.) print "Chicken" instead of the number and for the multiples of seven (7, 14, 21, etc.) print "Monkey". For numbers which are multiples of both five and seven print "ChickenMonkey".

// To determine if a number can be evenly divided by 5 or 7, use the JavaScript remainder operator.

// You can start with this simpler version that outputs even numbers to the console and ignores odd numbers. You need to refactor this code to meet the requirements above.

for (let i = 1; i <= 100; i++) {
    // Divide the current number by 2, and check if the remainder is 0
        
        // console.log(i) //
        if (i % 5 === 0 && i % 7 === 0) {
            console.log("ChickenMonkey")
    }   else if (i % 7 === 0 ) {
            console.log("Monkey")
    }   else if (i % 5 === 0) {
            console.log("Chicken")
    }   else {
        console.log(i)
    }
}