# Week 2 TypeScript Projects

A comprehensive collection of TypeScript and JavaScript exercises covering modern JavaScript concepts, asynchronous programming, and TypeScript fundamentals. This repository contains practical examples and implementations of key programming concepts.

## 🌟 Overview

This repository showcases various JavaScript/TypeScript programming concepts including:
- Asynchronous programming patterns
- Promise handling and concurrent operations
- Modern JavaScript ES6+ features
- Callback patterns and best practices
- Timer and interval functions
- TypeScript type safety and compilation

## 📂 Project Structure

```
week2-Typescript-Projects/
├── src/                    # TypeScript source files
├── asyncawait.js          # Async/Await pattern examples
├── callbackhell.js        # Callback patterns and nested callbacks
├── countdown.js           # Timer and countdown implementations
├── modernjs.js            # Modern JavaScript (ES6+) features
├── promiseAll.js          # Promise.all() and concurrent operations
├── package.json           # Project dependencies and scripts
├── tsconfig.json          # TypeScript configuration
└── .gitignore            # Git ignore rules
```

## 📚 Modules Description

### 1. Async/Await (`asyncawait.js`)
Demonstrates modern asynchronous JavaScript using async/await syntax:
- Converting promises to async/await
- Error handling with try-catch
- Sequential vs parallel async operations
- Practical examples of async functions

**Key Concepts:**
- `async` function declarations
- `await` keyword usage
- Error handling in async functions
- Async function return values

### 2. Callback Hell (`callbackhell.js`)
Explores callback patterns and the infamous "callback hell" problem:
- Traditional callback patterns
- Nested callbacks (pyramid of doom)
- Solutions to callback hell
- Transitioning from callbacks to promises

**Key Concepts:**
- Callback functions
- Nested callbacks and their issues
- Error-first callbacks
- Callback alternatives

### 3. Countdown Timer (`countdown.js`)
Implementation of countdown timers and interval-based operations:
- `setTimeout()` usage
- `setInterval()` usage
- Creating countdown timers
- Clearing timers and intervals

**Key Concepts:**
- Timer functions
- Interval management
- Clearing timers
- Time-based operations

### 4. Modern JavaScript (`modernjs.js`)
Showcases ES6+ JavaScript features:
- Arrow functions
- Template literals
- Destructuring assignment
- Spread/rest operators
- Array methods (map, filter, reduce)
- Object enhancements
- Class syntax

**Key Concepts:**
- ES6+ syntax
- Functional programming patterns
- Modern JavaScript best practices
- Code readability improvements

### 5. Promise.all (`promiseAll.js`)
Demonstrates concurrent promise operations:
- `Promise.all()` usage
- `Promise.race()`
- `Promise.allSettled()`
- Handling multiple async operations
- Error handling with Promise.all

**Key Concepts:**
- Concurrent promise execution
- Promise combinators
- Batch processing
- Error handling strategies

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/sujitbarnawal/week2-Typescript-Projects.git
   ```

2. **Navigate to the project directory**
   ```bash
   cd week2-Typescript-Projects
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Compile TypeScript files**
   ```bash
   npx tsc
   ```

## 💻 Usage

### Running Individual Files

Execute any JavaScript file using Node.js:

```bash
# Run async/await examples
node asyncawait.js

# Run callback examples
node callbackhell.js

# Run countdown timer
node countdown.js

# Run modern JavaScript examples
node modernjs.js

# Run Promise.all examples
node promiseAll.js
```

### Running TypeScript Files

Compile and run TypeScript files:

```bash
# Compile a TypeScript file
npx tsc src/filename.ts

# Run the compiled JavaScript
node src/filename.js
```

## 🎓 Learning Objectives

This repository helps you learn:

1. **Asynchronous Programming**
   - Understanding callbacks, promises, and async/await
   - Managing asynchronous operations effectively
   - Handling errors in async code

2. **Modern JavaScript**
   - ES6+ syntax and features
   - Functional programming concepts
   - Code organization and best practices

3. **TypeScript Fundamentals**
   - Type annotations and inference
   - Compiling TypeScript to JavaScript
   - TypeScript configuration

4. **Promise Patterns**
   - Creating and chaining promises
   - Concurrent operations
   - Error handling strategies

5. **Timers and Intervals**
   - setTimeout and setInterval
   - Creating countdown timers
   - Managing timer cleanup


## 🎨 Technologies Used

- **TypeScript**: Superset of JavaScript with static typing
- **JavaScript (ES6+)**: Modern JavaScript features
- **Node.js**: JavaScript runtime environment
- **npm**: Package manager


## 📖 Code Examples

### Async/Await Example
```typescript
async function fetchData() {
  try {
    const result = await someAsyncOperation();
    console.log(result);
  } catch (error) {
    console.error('Error:', error);
  }
}
```

### Promise.all Example
```javascript
Promise.all([promise1, promise2, promise3])
  .then(results => console.log(results))
  .catch(error => console.error(error));
```

### Modern JavaScript Example
```javascript
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(n => n * 2);
const sum = numbers.reduce((acc, n) => acc + n, 0);
```
