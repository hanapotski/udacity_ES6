## The ES6 specification
The specification (commonly shortened to "spec") for ES6 can be found here. The spec lists the set of rules and guidelines on how the language is supposed to function. It doesn't give specific details on how browser makers are supposed to achieve functionality, but it does provide step-by-step instructions on how the language is supposed to work. While making this course, we repeatedly referred to this official spec.

Ok, so honestly, it can be a little difficult to decipher some of the cryptic wording of the spec. But when you have a question about ES6, we recommend checking out info on the topic like that provided by the Mozilla Developer Network and then also reviewing what the spec actually says.

## How Can You Know What Features Browsers Support?
With new language specifications coming out every year and with browsers updating every other month, it can be quite challenging to know what browser supports which language features. Each browser maker (except for Safari) has a website that tracks its development status. Checkout the platform feature updates for each browser:

Google Chrome - https://www.chromestatus.com/features#ES6
Microsoft Edge - https://developer.microsoft.com/en-us/microsoft-edge/platform/status/?q=ES6
Mozilla Firefox - https://platform-status.mozilla.org/
NOTE: Safari doesn't have it's own platform status website. Under the hood, though, Safari is powered by the open source browser engine, Webkit. The status for Webkit features can be found here.

This can be a lot of information to track down. If you prefer a birdseye view of all the feature support for all JavaScript code, check out the ECMAScript Compatibility Table built by @kangax:

http://kangax.github.io/compat-table/es6/


## Polyfill
A JavaScript file that patches a hole by replicating some native feature that's missing

### What is a polyfill?
A polyfill, or polyfiller, is a piece of code (or plugin) that provides the technology that you, the developer, expect the browser to provide natively.

Coined by Remy Sharp - https://remysharp.com/2010/10/08/what-is-a-polyfill

We, as developers, should be able to develop with the HTML5 APIs, and scripts can create the methods and objects that should exist. Developing in this future-proof way means as users upgrade, your code doesn't have to change but users will move to the better, native experience cleanly. From the HTML5 Boilerplate team on polyfills - https://github.com/Modernizr/Modernizr/wiki/HTML5-Cross-Browser-Polyfills

Further research:
https://en.wikipedia.org/wiki/Polyfill

### An example polyfill
The code below is a polyfill for the new ES6 String method, startsWith():
```
if (!String.prototype.startsWith) {
  String.prototype.startsWith = function (searchString, position) {
    position = position || 0;
    return this.substr(position, searchString.length) === searchString;
  };
}
```
As you can see, a polyfill is just regular JavaScript.


#### Polyfills aren't only for patching missing JavaScript features
JavaScript is the language used to create a polyfill, but a polyfill doesn't just patch up missing JavaScript features! There are polyfills for all sorts of browser features:

* SVG
* Canvas
* Web Storage (local storage / session storage)
* Video
* HTML5 elements
* Accessibility
* Web Sockets
* and many more!
* 
For a more-complete list of polyfills, check out this link https://github.com/Modernizr/Modernizr/wiki/HTML5-Cross-Browser-Polyfills


### Using Babel

The most popular JavaScript transpiler is called Babel.

Babel's original name was slightly more descriptive - 6to5. This was because, originally, Babel converted ES6 code to ES5 code. Now, Babel does a lot more. It'll convert ES6 to ES5, JSX to JavaScript, and Flow to JavaScript.

Before we look at transpiling code on our computer, let's do a quick test by transpiling some ES6 code into ES5 code directly on the Babel website. Check out Babel's REPL and paste the following code into the section on the left:
```
class Student {
  constructor (name, major) {
    this.name = name;
    this.major = major;
  }

  displayInfo() {
    console.log(`${this.name} is a ${this.major} student.`);
  }
}

const richard = new Student('Richard', 'Music');
const james = new Student('James', 'Electrical Engineering');
```

### Transpiling project in repo

The way Babel transforms code from one language to another is through plugins. There are plugins that transform ES6 arrow functions to regular ES5 functions (the ES2015 arrow function plugin). There are plugins that transform ES6 template literals to regular string concatenation (the ES2015 template literals transform). For a full list, check out all of Babel's plugins. http://babeljs.io/docs/plugins/

Now, you're busy and you don't want to have to sift through a big long list of plugins to see which ones you need to convert your code from ES6 to ES5. So instead of having to use a bunch of individual plugins, Babel has presets which are groups of plugins bundled together. So instead of worrying about which plugins you need to install, we'll just use the ES2015 preset that is a collection of all the plugins we'll need to convert all of our ES6 code to ES5.

You can see that the project has a .babelrc file. This is where you'd put all of the plugins and/or presets that the project will use. Since we want to convert all ES6 code, we've set it up so that it has the ES2015 preset.

WARNING: Babel uses both Node and NPM to distribute its plugins. So before you can install anything, make sure you have both of these tools installed:

install Node (which will automatically install NPM)

NOTE: As of the creation of this course (circa Winter 2016), most of ES6 is supported by the current set of browsers. But that's "most", not "all", unfortunately. And that's also referring to "current" browsers. There are plenty of older browsers that do not support many, if any, of the new ES6 additions. However, it is safe to say that pretty much every browser supports the previous version of the language (ES5.1).

### Transpiling Recap
It's important to stay on top of all the changes JavaScript is going through. The best way to do that is to start making use of the new features that are added. The problem is that not all browsers support these new features. So to have your cake and eat it too, you can write in ES6 and then use a transpiler to convert it to ES5 code. This lets you transform your project's code base to the newest version of the language while still letting it run everywhere. Then, once all of the browsers your app has to run on fully support ES6 code, you can stop transpiling your code and just serve the straight ES6 code, directly!

