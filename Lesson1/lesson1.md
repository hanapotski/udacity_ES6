# Hoisting

---

Hoisting is a result of how JavaScript is interpreted by your browser. Essentially, before any JavaScript code is executed, all variables are "hoisted", which means they're raised to the top of the function scope. 


# let and const

---

Variables declared with let and const eliminate this specific issue of hoisting because they’re scoped to the block, not to the function. Previously, when you used var, variables were either scoped globally or locally to an entire function scope.

If a variable is declared using let or const inside a block of code (denoted by curly braces { }), then the variable is stuck in what is known as the temporal dead zone until the variable’s declaration is processed. This behavior prevents variables from being accessed only until after they’ve been declared.

** *Remember that variables declared with const cannot be redeclared or reassigned in the same scope.* **

### Rules for using let and const
let and const also have some other interesting properties.

Variables declared with let can be reassigned, but can’t be redeclared in the same scope.
Variables declared with const must be assigned an initial value, but can’t be redeclared in the same scope, and can’t be reassigned.

### Use cases
The big question is when should you use let and const? The general rule of thumb is as follows:

use let when you plan to reassign new values to a variable, and
use const when you don’t plan on reassigning new values to a variable.

#### What about var?
Is there any reason to use var anymore? Not really.

There are some arguments that can be made for using var in situations where you want to globally define variables, but this is often considered bad practice and should be avoided. From now on, we suggest ditching var in place of using let and const.


# Template Literals

---

- previously referred to as "template strings"
- template literals are essentially string literals that include embedded expressions.
- denoted with backticks ( `` ) instead of single quotes ( '' ) or double quotes ( "" ), template literals can contain placeholders which are represented using ${expression}. This makes it much easier to build strings.
- template literals also preserve newlines as part of the string
- Embedded expressions inside template literals can do more than just reference variables. You can perform operations, call functions and use loops inside embedded expressions!

Here's the previous examples using template literals.

```
const student = {
  name: 'Richard Kalehoff',
  guardian: 'Mr. Kalehoff'
};

const teacher = {
  name: 'Mrs. Wilson',
  room: 'N231'
}
``` 


```
let message = student.name + ' please see ' + teacher.name + ' in ' + teacher.room + ' to pick up your report card.';
```
->to this
```
let message = `${student.name} please see ${teacher.name} in ${teacher.room} to pick up your report card.`;
```


```
let note = teacher.name + ',\n\n' +
  'Please excuse ' + student.name + '.\n' +
  'He is recovering from the flu.\n\n' +
  'Thank you,\n' +
  student.guardian;
```
->to this
```
let note = `${teacher.name},
  Please excuse ${student.name}.
  He is recovering from the flu.
  
  Thank you,
  ${student.guardian}`;
```


# Destructuring

---

- extract data from arrays and objects into distinct variables

### Destructuring borrows inspiration from languages like Perl and Python 
- by allowing you to specify the elements you want to extract from an array or object on the left side of an assignment. It sounds a little weird, but you can actually achieve the same result as before, but with much less code; and it's still easy to understand.

### Destructuring values from an array
```
const point = [10, 25, -34];

const [x, y, z] = point;

console.log(x, y, z);
```

In this example, the brackets [ ] represent the array being destructured and x, y, and z represent the variables where you want to store the values from the array. Notice how you don’t have to specify the indexes for where to extract the values from because the indexes are implied.

TIP: You can also ignore values when destructuring arrays. For example, const [x, , z] = point; ignores the y coordinate and discards it.

### Destructuring values from an object
```
const gemstone = {
  type: 'quartz',
  color: 'rose',
  karat: 21.29
};

const {type, color, karat} = gemstone;

console.log(type, color, karat); //Prints: quartz rose 21.29
```
In this example, the curly braces { } represent the object being destructured and type, color, and karat represent the variables where you want to store the properties from the object. Notice how you don’t have to specify the property from where to extract the values. Because gemstone has a property named type, the value is automatically stored in the type variable. Similarly, gemstone has a color property, so the value of color automatically gets stored in the color variable. And it's the same with karat.

TIP: You can also specify the values you want to select when destructuring an object. For example, let {color} = gemstone; will only select the color property from the gemstone object.

### Object literal shorthand
If object properties have the same name as the variables being assigned to them, then you can drop the duplicate variable names.

Before ES6
```
let type = 'quartz';
let color = 'rose';
let carat = 21.29;

const gemstone = {
  type,
  color,
  carat,
  calculateWorth: function() {
    // will calculate worth of gemstone based on type, color, and carat
  }
};
```

### Shorthand method names
Since you only need to reference the gemstone’s calculateWorth property in order to call the function, having the function keyword is redundant, so it can be dropped.

```
let gemstone = {
  type,
  color,
  carat,
  calculateWorth() { ... }
};
```

# Iteration

---

New mechanism for loopin through data in ES6

i = iterator, index to keep track of where you are in the loop, letting you access each item in the array one after the other

### [Iterable protocol/interface](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols)
Allows JavaScript objects to define or customize their iteration behavior

```
const teacher = ['Richard'];
teacher[Symbol.iterator] = function () {
  // returns a custom iterator
};
```

### The for...in loop
The for...in loop improves upon the weaknesses of the for loop by eliminating the counting logic and exit condition.

```
const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for (const index in digits) {
  console.log(digits[index]);
}
```
The for...in loop can get you into big trouble when you need to add an extra method to an array (or another object). Because for...in loops loop over all enumerable properties, this means if you add any additional properties to the array's prototype, then those properties will also appear in the loop.

### for ... of loop
A loop that iterates over iterable objects

Iterable object - object that has implemented the new iterable interface

By default, this includes the data types String, Array, Map, and Set—notably absent from this list is the Object data type (i.e. {}). Objects are not iterable, by default.

You write a for...of loop almost exactly like you would write a for...in loop, except you swap out in with of and you can drop the index.

```
const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for (const digit of digits) {
  console.log(digit);
}
```

TIP: It’s good practice to use plural names for objects that are collections of values. That way, when you loop over the collection, you can use the singular version of the name when referencing individual values in the collection. For example, for (const button of buttons) {...}.

You can stop or break a for...of loop at anytime.

```
const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for (const digit of digits) {
  if (digit % 2 === 0) {
    continue;
  }
  console.log(digit);
}
```

And you don’t have to worry about adding new properties to objects. The for...of loop will only loop over the values in the object.

```
Array.prototype.decimalfy = function() {
  for (i = 0; i < this.length; i++) {
    this[i] = this[i].toFixed(2);
  }
};

const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for (const digit of digits) {
  console.log(digit);
}
```


# Spread Operator

---

The spread operator, written with three consecutive dots ( ... ), is new in ES6 and gives you the ability to expand, or spread, [iterable objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators#Iterators) into multiple elements.

```
const books = ["Don Quixote", "The Hobbit", "Alice in Wonderland", "Tale of Two Cities"];
console.log(...books);
```

> Prints: Don Quixote The Hobbit Alice in Wonderland Tale of Two Cities

```
const primes = new Set([2, 3, 5, 7, 11, 13, 17, 19, 23, 29]);
console.log(...primes);
```

> Prints: 2 3 5 7 11 13 17 19 23 29

### Combining arrays with concat
One example of when the spread operator can be useful is when combining arrays.

If you’ve ever needed to combine multiple arrays, prior to the spread operator, you were forced to use the Array’s concat() method.

```
const fruits = ["apples", "bananas", "pears"];
const vegetables = ["corn", "potatoes", "carrots"];
const produce = fruits.concat(vegetables);
console.log(produce);
```

> Prints: ["apples", "bananas", "pears", "corn", "potatoes", "carrots"]


# ...Rest Parameter

---

The rest parameter, also written with three consecutive dots ( ... ), allows you to represent an indefinite number of elements as an array. This can be helpful in a couple of different situations.

One situation is when assigning the values of an array to variables. For example,

```
const order = [20.17, 18.67, 1.50, "cheese", "eggs", "milk", "bread"];
const [total, subtotal, tax, ...items] = order;
console.log(total, subtotal, tax, items);
```

> Prints: 20.17 18.67 1.5 ["cheese", "eggs", "milk", "bread"]

*You can think of the rest parameter like the opposite of the spread operator; if the spread operator is like unboxing all of the contents of a package, then the rest parameter is like taking all the contents and putting them back into the package.*

### Variadic functions

Variadic functions are functions that take an indefinite number of arguments.

##### Using the arguments object
The [arguments object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments) is an array-like object that is available as a local variable inside all functions. It contains a value for each argument being passed to the function starting at 0 for the first argument, 1 for the second argument, and so on.

It contains a value for each argument being passed to the function starting at 0 for the first argument, 1 for the second argument, and so on.

```
function sum() {
  let total = 0;  
  for(const argument of arguments) {
    total += argument;
  }
  return total;
}
```

Now this works fine, but it does have its issues:

1. If you look at the definition for the sum() function, it doesn’t have any parameters.
2. This is misleading because we know the sum() function can handle an indefinite amount of arguments.
3. It can be hard to understand.
4. If you’ve never used the arguments object before, then you would most likely look at this code and wonder where the arguments object is even coming from. Did it appear out of thin air? It certainly looks that way.

##### Using the rest parameter
```
function sum(...nums) {
  let total = 0;  
  for(const num of nums) {
    total += num;
  }
  return total;
}
```

This version of the sum() function is both more concise and is easier to read. Also, notice the for...in loop has been replaced with the new for...of loop.
