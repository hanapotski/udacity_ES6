# Arrow function Expressions

---

- The syntax is a lot shorter,
- it's easier to write and read short, single-line functions,
- and they automatically return when using the concise body syntax!

Arrow functions are very similar to regular functions in behavior, but are quite different syntactically. The following code takes a list of names and converts each one to uppercase using a regular function:

```
const upperizedNames = ['Farrin', 'Kagure', 'Asser'].map(function(name) { 
  return name.toUpperCase();
});
```

The code below does the same thing except instead of passing a regular function to the map() method, it passes an arrow function. Notice the arrow in the arrow function ( => ) in the code below:

```
const upperizedNames = ['Farrin', 'Kagure', 'Asser'].map(
  name => name.toUpperCase()
);
```

Regular functions can be either function declarations or function expressions, however arrow functions are always expressions. In fact, their full name is "arrow function expressions", so they can only be used where an expression is valid. This includes being:

- stored in a variable,
- passed as an argument to a function,
- and stored in an object's property.

const greet = name => `Hello ${name}!`;

### Parentheses and arrow function parameteres
You might have noticed the arrow function from the greet() function looks like this:

```
name => `Hello ${name}!`
```

- If there are two or more items in the parameter list, or if there are zero items in the list, then you need to wrap the list in parentheses:

```
// empty parameter list requires parentheses
const sayHi = () => console.log('Hello Udacity Student!');
sayHi();
```

```
// multiple parameters requires parentheses
const orderIceCream = (flavor, cone) => console.log(`Here's your ${flavor} ice cream in a ${cone} cone.`);
orderIceCream('chocolate', 'waffle');
```

### Concise and block body syntax

#### The concise syntax:

- has no curly braces surrounding the function body
- and automatically returns the expression.

```
const upperizedNames = ['Farrin', 'Kagure', 'Asser'].map(
  name => name.toUpperCase()
);
```

#### The block syntax:

- it uses curly braces to wrap the function body
- and a return statement needs to be used to actually return something from the function.

```
const upperizedNames = ['Farrin', 'Kagure', 'Asser'].map( name => {
  name = name.toUpperCase();
  return `${name} has ${name.length} characters in their name`;
});
```

# Arrow Functions and the "This" Keyword

---

### "this"
The value of "this" depends on how the function is called


1. A new object
If the function is called with new:

```
const mySundae = new Sundae('Chocolate', ['Sprinkles', 'Hot Fudge']);
```

> In the code above, the value of this inside the Sundae constructor function is a new object because it was called with new.

2. A specified object
If the function is invoked with call/apply:

```
const result = obj1.printName.call(obj2);
```

> In the code above, the value of this inside printName() will refer to obj2 since the first parameter of call() is to explicitly set what this refers to.

3. A context object
If the function is a method of an object:

```
data.teleport();
```

> In the code above, the value of this inside teleport() will refer to data.

4. The global object or undefined
If the function is called with no context:

```
teleport();
```

> In the code above, the value of this inside teleport() is either the global object or, if in strict mode, it's undefined.

### arrow functions
It depends on where that funciton is located in the code

The value of this is based on the function's surrounding context. In other words, the value of this inside an arrow function is the same as the value of this outside the function.

# Default function parameters

---

Before ES6:

```
function greet(name, greeting) {
  name = (typeof name !== 'undefined') ?  name : 'Student';
  greeting = (typeof greeting !== 'undefined') ?  greeting : 'Welcome';

  return `${greeting} ${name}!`;
}

greet(); // Welcome Student!
greet('James'); // Welcome James!
greet('Richard', 'Howdy'); // Howdy Richard!
```

> Returns:  
> Welcome Student!  
> Welcome James!  
> Howdy Richard!  

With ES6:

```
function greet(name = 'Student', greeting = 'Welcome') {
  return `${greeting} ${name}!`;
}
```

# Defaults and destructuring

---

### Defaults and destructuring arrays

```
function createGrid([width = 5, height = 5]) {
  return `Generates a ${width} x ${height} grid`;
}

createGrid([]); // Generates a 5 x 5 grid
createGrid([2]); // Generates a 2 x 5 grid
createGrid([2, 3]); // Generates a 2 x 3 grid
createGrid([undefined, 3]); // Generates a 5 x 3 grid
```

```
createGrid(); // throws an error
```

> Uncaught TypeError: Cannot read property 'Symbol(Symbol.iterator)' of undefined

This throws an error because createGrid() expects an array to be passed in that it will then destructure. Since the function was called without passing an array, it breaks. But, we can use default function parameters for this!

```
function createGrid([width = 5, height = 5] = []) {
  return `Generating a grid of ${width} by ${height}`;
}

createGrid(); // Generates a 5 x 5 grid
```

See that new = [] in the function's parameter? If createGrid() is called without any argument then it will use this default empty array. And since the array is empty, there's nothing to destructure into width and height, so their default values will apply! So by adding = [] to give the entire parameter a default, the following code will now work:

### Defaults and destructuring objects

```
function createSundae({scoops = 1, toppings = ['Hot Fudge']}) {
  const scoopText = scoops === 1 ? 'scoop' : 'scoops';
  return `Your sundae has ${scoops} ${scoopText} with ${toppings.join(' and ')} toppings.`;
}

createSundae({}); // Your sundae has 1 scoop with Hot Fudge toppings.
createSundae({scoops: 2}); // Your sundae has 2 scoops with Hot Fudge toppings.
createSundae({scoops: 2, toppings: ['Sprinkles']}); // Your sundae has 2 scoops with Sprinkles toppings.
createSundae({toppings: ['Cookie Dough']}); // Your sundae has 1 scoop with Cookie Dough toppings.
```

Just like the array example before, if you try calling the function without any arguments it won't work:

```
createSundae(); // throws an error
```

> Uncaught TypeError: Cannot match against 'undefined' or 'null'.

We can prevent this issue by providing a default object to the function:

```
function createSundae({scoops = 1, toppings = ['Hot Fudge']} = {}) {
  const scoopText = scoops === 1 ? 'scoop' : 'scoops';
  return `Your sundae has ${scoops} ${scoopText} with ${toppings.join(' and ')} toppings.`;
}
```

By adding an empty object as the default parameter in case no arguments are provided, calling the function without any arguments now works.


### Array defaults vs. object defaults

Array defaults vs. object defaults
Default function parameters are a simple addition, but it makes our lives so much easier! One benefit of object defaults over array defaults is how they handle skipped options. Check this out:

```
function createSundae({scoops = 1, toppings = ['Hot Fudge']} = {}) { … }
```

...with the createSundae() function using object defaults with destructuring, if you want to use the default value for scoops but change the toppings, then all you need to do is pass in an object with toppings:

```
createSundae({toppings: ['Hot Fudge', 'Sprinkles', 'Caramel']});
```

Compare the above example with the same function that uses array defaults with destructuring.

```
function createSundae([scoops = 1, toppings = ['Hot Fudge']] = []) { … }
```

With this function setup, if you want to use the default number of scoops but change the toppings, you'd have to call your function a little...oddly:

```
createSundae([undefined, ['Hot Fudge', 'Sprinkles', 'Caramel']]);
```

Since arrays are positionally based, we have to pass undefined to "skip" over the first argument (and accept the default) to get to the second argument.

Unless you've got a strong reason to use array defaults with array destructuring, we recommend going with object defaults with object destructuring!

# JavaScript Classes

---

JavaScript is not a class-based language. It uses functions to create objects and links objects together by prototypal injeritance. JavaScript classes are just a thin mirage over regular functions and prototypal inheritance.

### ES5 "Class" Recap

```
function Plane(numEngines) {
  this.numEngines = numEngines;
  this.enginesActive = false;
}

// methods "inherited" by all instances
Plane.prototype.startEngines = function () {
  console.log('starting engines...');
  this.enginesActive = true;
};

const richardsPlane = new Plane(1);
richardsPlane.startEngines();

const jamesPlane = new Plane(4);
jamesPlane.startEngines();
```

In the code above, the Plane function is a constructor function that will create new Plane objects. The data for a specific Plane object is passed to the Plane function and is set on the object. Methods that are "inherited" by each Plane object are placed on the Plane.prototype object. Then richardsPlane is created with one engine while jamesPlane is created with 4 engines. Both objects, however, use the same startEngines method to activate their respective engines.

Things to note:

- the constructor function is called with the new keyword
- the constructor function, by convention, starts with a capital letter
- the constructor function controls the setting of data on the objects that will be created
- "inherited" methods are placed on the constructor function's prototype object

### ES6 Classes

Here's what that same Plane class would like like if it were written using the new class syntax:

```
class Plane {
  constructor(numEngines) {
    this.numEngines = numEngines;
    this.enginesActive = false;
  }

  startEngines() {
    console.log('starting engines…');
    this.enginesActive = true;
  }
}
```

#### Class is just a function
Just to prove that there isn't anything special about class, check out this code:

```
class Plane {
  constructor(numEngines) {
    this.numEngines = numEngines;
    this.enginesActive = false;
  }

  startEngines() {
    console.log('starting engines…');
    this.enginesActive = true;
  }
}

typeof Plane; // function
```

*Did you notice that there aren't any commas between the method definitions in the Class? Commas are not used to separate properties or methods in a Class. If you add them, you'll get a SyntaxError of unexpected token ,*

### Static methods
To add a static method, the keyword static is placed in front of the method name. Look at the badWeather() method in the code below.

```
class Plane {
  constructor(numEngines) {
    this.numEngines = numEngines;
    this.enginesActive = false;
  }

  static badWeather(planes) {
    for (plane of planes) {
      plane.enginesActive = false;
    }
  }

  startEngines() {
    console.log('starting engines…');
    this.enginesActive = true;
  }
}
```

See how badWeather() has the word static in front of it while startEngines() doesn't? That makes badWeather() a method that's accessed directly on the Plane class, so you can call it like this:

```
Plane.badWeather([plane1, plane2, plane3]);
```

### Benefits of classes
1. Less setup
- There's a lot less code that you need to write to create a function
2. Clearly defined constructor function
- Inside the class definition, you can clearly specify the constructor function.
3. Everything's contained
- All code that's needed for the class is contained in the class declaration. Instead of having the constructor function in one place, then adding methods to the prototype one-by-one, you can do everything all at once!

### Things to look out for when using classes
1. class is not magic
- The class keyword brings with it a lot of mental constructs from other, class-based languages. It doesn't magically add this functionality to JavaScript classes.
2. class is a mirage over prototypal inheritance
- We've said this many times before, but under the hood, a JavaScript class just uses prototypal inheritance.
3. Using classes requires the use of new
- When creating a new instance of a JavaScript class, the new keyword must be used

```
For example,

class Toy {
   ...
}

const myToy1 = Toy(); // throws an error
```

>Uncaught TypeError: Class constructor Toy cannot be invoked without 'new'

but, adding the new keyword fixes the problem

```
const myToy2 = new Toy(); // this works!
```

# Subclasses with ES6

--- 

```
class Tree {
  constructor(size = '10', leaves = {spring: 'green', summer: 'green', fall: 'orange', winter: null}) {
    this.size = size;
    this.leaves = leaves;
    this.leafColor = null;
  }

  changeSeason(season) {
    this.leafColor = this.leaves[season];
    if (season === 'spring') {
      this.size += 1;
    }
  }
}

class Maple extends Tree {
  constructor(syrupQty = 15, size, barkColor, leaves) {
    super(size, barkColor, leaves);
    this.syrupQty = syrupQty;
  }

  changeSeason(season) {
    super.changeSeason(season);
    if (season === 'spring') {
      this.syrupQty += 1;
    }
  }

  gatherSyrup() {
    this.syrupQty -= 3;
  }
}

const myMaple = new Maple(15, 5);
myMaple.changeSeason('fall');
myMaple.gatherSyrup();
myMaple.changeSeason('spring');
```

Both Tree and Maple are JavaScript classes. The Maple class is a "subclass" of Tree and uses the extends keyword to set itself as a "subclass". To get from the "subclass" to the parent class, the super keyword is used. Did you notice that super was used in two different ways? In Maple's constructor method, super is used as a function. In Maple's changeSeason() method, super is used as an object!

### Compared to ES5 subclasses
Let's see this same functionality, but written in ES5 code:

```
function Tree() {
  this.size = size || 10;
  this.leaves = leaves || {spring: 'green', summer: 'green', fall: 'orange', winter: null};
  this.leafColor;
}

Tree.prototype.changeSeason = function(season) {
  this.leafColor = this.leaves[season];
  if (season === 'spring') {
    this.size += 1;
  }
}

function Maple (syrupQty, size, barkColor, leaves) {
  Tree.call(this, size, barkColor, leaves);
  this.syrupQty = syrupQty || 15;
}

Maple.prototype = Object.create(Tree.prototype);
Maple.prototype.constructor = Maple;

Maple.prototype.changeSeason = function(season) {
  Tree.prototype.changeSeason.call(this, season);
  if (season === 'spring') {
    this.syrupQty += 1;
  }
}

Maple.prototype.gatherSyrup = function() {
  this.syrupQty -= 3;
}

const myMaple = new Maple(15, 5);
myMaple.changeSeason('fall');
myMaple.gatherSyrup();
myMaple.changeSeason('spring');
```

Both this code and the class-style code above achieve the same functionality.


### Working with subclasses
Like most of the new additions, there's a lot less setup code and it's a lot cleaner syntax to create a subclass using class, super, and extends.

Just remember that, under the hood, the same connections are made between functions and prototypes.

super must be called before this
In a subclass constructor function, before this can be used, a call to the super class must be made.
```
class Apple {}
class GrannySmith extends Apple {
  constructor(tartnessLevel, energy) {
    this.tartnessLevel = tartnessLevel; // `this` before `super` will throw an error!
    super(energy); 
  }
}
```

