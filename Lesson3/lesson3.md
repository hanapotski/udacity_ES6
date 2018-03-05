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


## A Set in Mathematics
If you think back to mathematics, a set is a collection of distinct items. For example, {2, 4, 5, 6} is a set because each number is unique and appears only once. However, {1, 1, 2, 4} is not a set because it contains duplicate entries (the 1 is in there more than once!).

In JavaScript, we can already represent something similar to a mathematical set using an array.
```
const nums = [2, 4, 5, 6];
However, arrays do not enforce items to be unique. If we try to add another 2 to nums, JavaScript won't complain and will add it without any issue.

nums.push(2);
console.log(nums);
[2, 4, 5, 6, 2]
```
…and now nums is no longer a set in the mathematical sense.

### Sets
In ES6, there’s a new built-in object that behaves like a mathematical set and works similarly to an array. This new object is conveniently called a "Set". The biggest differences between a set and an array are:

Sets are not indexed-based - you do not refer to items in a set based on their position in the set
items in a Set can’t be accessed individually
Basically, a Set is an object that lets you store unique items. You can add items to a Set, remove items from a Set, and loop over a Set. These items can be either primitive values or objects.

#### How to Create a Set
There’s a couple of different ways to create a Set. The first way, is pretty straightforward:
```
const games = new Set();
console.log(games);
Set {}
```
This creates an empty Set games with no items.

If you want to create a Set from a list of values, you use an array:
```
const games = new Set(['Super Mario Bros.', 'Banjo-Kazooie', 'Mario Kart', 'Super Mario Bros.']);
console.log(games);
Set {'Super Mario Bros.', 'Banjo-Kazooie', 'Mario Kart'}
```

### Modifying Sets

After you’ve created a Set, you’ll probably want to add and delete items from the Set. So how do you that? You use the appropriately named, .add() and .delete() methods:
```
const games = new Set(['Super Mario Bros.', 'Banjo-Kazooie', 'Mario Kart', 'Super Mario Bros.']);

games.add('Banjo-Tooie');
games.add('Age of Empires');
games.delete('Super Mario Bros.');

console.log(games);
Set {'Banjo-Kazooie', 'Mario Kart', 'Banjo-Tooie', 'Age of Empires'}
```
On the other hand, if you want to delete all the items from a Set, you can use the .clear() method.
```
games.clear()
console.log(games);
Set {}
```
TIP: If you attempt to .add() a duplicate item to a Set, you won’t receive an error, but the item will not be added to the Set. Also, if you try to .delete() an item that is not in a Set, you won’t receive an error, and the Set will remain unchanged.

.add() returns the Set if an item is successfully added. On the other hand, .delete() returns a Boolean (true or false) depending on successful deletion.

### Working With Sets
#### Checking The Length
Once you’ve constructed your Set, there are a couple of different properties and methods you can use to work with Sets.

Use the .size property to return the number of items in a Set:
```
const months = new Set(['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']);
console.log(months.size);
12
```
Remember, Sets can’t be accessed by their index like an array, so you use the .size property instead of .length property to get the size of the Set.

#### Checking If An Item Exists
Use the .has() method to check if an item exists in a Set. If the item is in the Set, then .has() will return true. If the item doesn’t exist in the Set, then .has() will return false.
```
console.log(months.has('September'));
true
```
#### Retrieving All Values
Finally, use the .values() method to return the values in a Set. The return value of the .values() method is a SetIterator object.
```
console.log(months.values());
SetIterator {'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'}
```
More on the SetIterator object in a second!

TIP: The .keys() method will behave the exact same way as the .values() method by returning the values of a Set within a new Iterator Object. The .keys() method is an alias for the .values() method for similarity with maps. You’ll see the .keys() method later in this lesson during the Maps section.

The last step to working with Sets is looping over them.

If you remember back to our discussion on the new iterable and iterator protocols in ES6, then you’ll recall that Sets are built-in iterables. This means two things in terms of looping:

1. You can use the Set’s default iterator to step through each item in a Set, one by one.
2. You can use the new for...of loop to loop through each item in a Set.

#### Using the SetIterator
Because the .values() method returns a new iterator object (called SetIterator), you can store that iterator object in a variable and loop through each item in the Set using .next().
```
const iterator = months.values();
iterator.next();
Object {value: 'January', done: false}
```
And if you run .next() again?
```
iterator.next();
Object {value: 'February', done: false}
```
And so on until done equals true which marks the end of the Set.

Using a for...of Loop
An easier method to loop through the items in a Set is the for...of loop.
```
const colors = new Set(['red', 'orange', 'yellow', 'green', 'blue', 'violet', 'brown', 'black']);
for (const color of colors) {
  console.log(color);
}
red 
orange 
yellow 
green 
blue 
violet 
brown 
black
```

