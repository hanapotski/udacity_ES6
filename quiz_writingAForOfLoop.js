/*
 * Programming Quiz: Writing a For...of Loop (1-4)
 */

let days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

// your code goes here
for ( let day of days ) {
    day = day.charAt(0).toUpperCase() + day.slice(1);
    console.log(day);
}
