/*
 * Programming Quiz: Using the Rest Parameter (1-5)
 */

// your code goes here

function average(...nums) {
    let sum = 0
    let length = nums.length;
    if (length === 0){
        return 0;
    } else {
        for (const num of nums){
            sum += num;
        }
        return sum/length
    }
}

console.log(average(2, 6));
console.log(average(2, 3, 3, 5, 7, 10));
console.log(average(7, 1432, 12, 13, 100));
console.log(average());