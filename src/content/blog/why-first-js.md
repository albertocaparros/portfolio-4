---
author: Alberto Caparrós
pubDate: 2025-02-23T17:01:00Z
title: Why-first JS (Part 1)
href: 'why-first-js'
image:
  url: https://images.unsplash.com/photo-1687603921109-46401b201195?q=80&w=350
  alt: Code editor with several javascript and jsx files on its menu
tags: ['why-first', 'js']
description: A detailed "why-first" analysis of the most important JavaScript features. Each topic is explained in terms of the problems it was designed to solve and how it addresses those challenges.
---

![Code editor with several javascript and jsx files on ](https://images.unsplash.com/photo-1687603921109-46401b201195?q=80&w=350)

## Variable Declarations: var, let, and const

Early JavaScript relied solely on **var** for declaring variables. This approach led to several challenges. Because **var** is function-scoped and subject to hoisting (where variable declarations are moved to the top of their containing scope), it was easy to unintentionally overwrite variables or access them before they were defined. This could result in subtle bugs, especially in larger codebases or in loops where variables might leak out of blocks, making the code unpredictable.

ES6 introduced **let** and **const** to address these issues by enforcing block-level scoping. With **let**, a variable is confined to the block (for example, within an if statement or a loop) where it is declared, reducing the chance of accidental variable leakage. **const** goes further by indicating that the variable’s binding should not change, which is ideal for values that should remain constant throughout the code. This makes code more predictable and easier to understand.

```javascript
for (let i = 0; i < 5; i++) {
  // 'i' is limited to this loop block
}
// console.log(i); // ReferenceError: i is not defined
```

## Closures and Lexical Scoping

In JavaScript, sometimes you need to preserve state or variables even after a function has finished executing. Without closures, creating private variables or maintaining state across asynchronous events was cumbersome. This limitation made it hard to build modular code or to encapsulate logic in a secure, maintainable way.

Closures allow a function to “remember” the environment in which it was created—even after that environment has finished execution. This means that variables declared in an outer function remain accessible to inner functions, even if the outer function has returned. Closures are the basis for patterns like the module pattern, where private variables can be hidden from the global scope.

```javascript
function counter() {
  let count = 0;
  return function () {
    count += 1;
    return count;
  };
}

const increment = counter();
console.log(increment()); // 1
console.log(increment()); // 2
```

## Asynchronous Programming: Callbacks, Promises, and Async/Await

Web applications frequently perform tasks like fetching data from a server or reading a file, operations that can take time. In a single-threaded environment like JavaScript, executing long-running tasks synchronously would block the UI and make applications unresponsive. Initially, developers used callbacks to handle asynchronous operations, but nesting callbacks led to convoluted, hard-to-read code (commonly known as “callback hell”).

- **Callbacks**: Allow asynchronous functions to signal when they’re done, so the browser can continue executing other code.

- **Promises**: Introduced a cleaner, chainable way to handle asynchronous results. With promises, you can attach _.then()_ and _.catch()_ handlers, reducing nesting and making error handling more straightforward.

- **Async/Await**: Built on top of promises, async/await syntax lets you write asynchronous code in a synchronous style. This not only makes the code easier to read and maintain but also reduces the complexity of error handling with try/catch blocks.

```javascript
async function fetchData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}
```

## The Event Loop and Concurrency Model

JavaScript is single-threaded, meaning that it can only execute one piece of code at a time. Without an effective model for managing asynchronous tasks, a long-running operation could block the entire application, leading to unresponsive interfaces. Developers needed a way to manage multiple operations concurrently without resorting to multi-threading, which is not native to JavaScript.

The event loop is a mechanism that allows JavaScript to handle asynchronous operations efficiently. It maintains a queue of tasks (callbacks, microtasks) and processes them when the call stack is empty. This design enables JavaScript to execute long-running operations in the background (using constructs like Web Workers for true parallelism) and then update the UI once they’re complete—all while keeping the interface responsive.

```javascript
console.log('Start');
setTimeout(() => console.log('Timeout finished'), 0);
console.log('End');
// Output: "Start", "End", then "Timeout finished"
```

## ES6+ Features

### Arrow functions

Traditional function expressions in JavaScript have their own _this_ context, which can lead to confusion when functions are used as callbacks. Developers often had to bind functions explicitly to maintain the correct context, making the code more verbose and error-prone.

Arrow functions provide a concise syntax and, importantly, they inherit the _this_ value from their enclosing context. This behavior eliminates the need for workarounds like _.bind(this)_ or storing the context in a variable (_var self = this_), leading to cleaner and more intuitive code.

```javascript
const obj = {
  value: 42,
  printValue: function () {
    setTimeout(() => {
      console.log(this.value); // correctly prints 42
    }, 1000);
  },
};
```

### Template Literals

Concatenating strings and managing multi-line content was clumsy using traditional string syntax, often leading to unreadable code and bugs when incorporating variables.

Template literals use backticks _(`)_ to allow multi-line strings and embedded expressions with _${...}_ syntax. This not only makes the code more readable but also simplifies the process of building dynamic strings.

```javascript
const name = 'Alice';
console.log(`Hello, ${name}! Welcome to our website.`);
```

### Destructuring, Spread, and Rest Operators

Extracting values from objects or arrays often involved repetitive code. Managing function arguments, merging objects, or cloning arrays was verbose and error-prone.

Destructuring allows developers to extract properties or elements directly into variables. The spread operator makes it easy to expand iterables into individual elements or merge objects, while the rest operator collects multiple elements into an array. These features result in more concise and readable code.

```javascript
const person = { name: 'Bob', age: 30 };
const { name, age } = person;
console.log(name, age);

const arr = [1, 2, 3];
const newArr = [...arr, 4, 5];
console.log(newArr);
```
