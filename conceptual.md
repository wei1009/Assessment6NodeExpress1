### Conceptual Exercise

Answer the following questions below:

**- What are some ways of managing asynchronous code in JavaScript?**
JavaScript provides three methods of handling asynchronous code: callbacks, which allow you to provide functions to call once the asynchronous method has finished running; promises, which allow you to chain methods together; and async/await keywords, which are just some syntactic sugar over promises.

**- What is a Promise?**
A promise represents the eventual completion or failure of an asynchronous operation and its resulting value.

**- What are the differences between an async function and a regular function?**
Asynchronous functions will block while waiting for response. Regular function cannot await anything.

**- What is the difference between Node.js and Express.js?**
Node.js is an open source and cross-platform runtime environment for executing JavaScript code outside of a browser. Express is a small framework that sits on top of Node.

**- What is the error-first callback pattern?**
The first pattern is for an error object.

**- What is middleware?**
Middleware has access to the request, response and next objects of a function. It separate our code into more logical groupings and providing more robust / abstracted error handling.

**- What does the `next` function do?**
We need next to run next route. If argument are passed to next, Express always treats this as an error.

**- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)**
The function should wait for mutiple calls, we need to wait for one API completed before it can move on to the next. Use Promise.all() return value would be better.

```
async function getUsers(){
  const baseUrl = 'https://api.github.com/users';
  let users = await Promise.all([
    $.getJSON(`${baseUrl}/elie),
    $.getJSON(`${baseUrl}/joelburton),
    $.getJSON(`${baseUrl}/mmmaaatttttt),
  ]);
}
```

```
js
async function getUsers() {
  const elie = await $.getJSON('https://api.github.com/users/elie');
  const joel = await $.getJSON('https://api.github.com/users/joelburton');
  const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt');

  return [elie, matt, joel];
}
```
