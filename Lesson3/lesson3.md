# Built-ins

---

## Symbols
A symbol is a unique and immutable data type that is often used to identify object properties.

A unique identifier. It's most often used to uniquely identify properties within an object.

To create a symbol, you write Symbol() with an optional string as its description.

```
const sym1 = Symbol('apple');
console.log(sym1);
```

This will create a unique symbol and store it in sym1. The description "apple" is just a way to describe the symbol, but it can’t be used to access the symbol itself.

The description is only used to describe the symbol. It’s not used as part of the symbol itself—each time a new symbol is created, regardless of the description.

```
const bowl = {
  [Symbol('apple')]: { color: 'red', weight: 136.078 },
  [Symbol('banana')]: { color: 'yellow', weight: 183.15 },
  [Symbol('orange')]: { color: 'orange', weight: 170.097 },
  [Symbol('banana')]: { color: 'yellow', weight: 176.845 }
};
console.log(bowl);
```

By changing the bowl’s properties to use symbols, each property is a unique Symbol and the first banana doesn’t get overwritten by the second banana.

# Iteration & Iterable Protocols

---

### The Iterable Protocol

The iterable protocol is used for defining and customizing the iteration behavior of objects. What that really means is you now have the flexibility in ES6 to specify a way for iterating through values in an object. For some objects, they already come built-in with this behavior. For example, strings and arrays are examples of built-in iterables.

```
const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
for (const digit of digits) {
  console.log(digit);
}
```

Any object that is iterable can use the new for...of loop.

##### How it Works
In order for an object to be iterable, it must implement the **iterable interface**. If you come from a language like Java or C, then you’re probably familiar with interfaces, but for those of you who aren’t, that basically means that in order for an object to be iterable it must contain a default iterator method. This method will define how the object should be iterated.

The **iterator method**, which is available via the constant ```[Symbol.iterator]```, is a zero arguments function that returns an iterator object. An iterator object is an object that conforms to the iterator protocol.

### The Iterator Protocol
The **iterator protocol** is used to define a standard way that an object produces a sequence of values. What that really means is you now have a process for defining how an object will iterate. This is done through implementing the .next() method.

##### How it Works
An object becomes an iterator when it implements the .next() method. The .next() method is a zero arguments function that returns an object with two properties:

1. value : the data representing the next value in the sequence of values within the object
2. done : a boolean representing if the iterator is done going through the sequence of values
- If done is true, then the iterator has reached the end of its sequence of values.
- If done is false, then the iterator is able to produce another value in its sequence of values.

Here’s the example from earlier, but instead we are using the array’s default iterator to step through the each value in the array.

```
const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const arrayIterator = digits[Symbol.iterator]();

console.log(arrayIterator.next());
console.log(arrayIterator.next());
console.log(arrayIterator.next());
```

