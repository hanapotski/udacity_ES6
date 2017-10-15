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

