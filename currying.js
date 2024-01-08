// Currying is the process of taking a function with multiple arguments and turning it into a
// sequence of functions each with only a single argument. Currying is named after a mathematician
// Haskell Curry. By applying currying, a n-ary function turns it into a unary function.

const multiArgFunction = (a, b, c) => a + b + c 
// console.log(multiArgFunction(1, 2, 3)) // 6

const curryUnaryFunction = a => b => c => a + b + c
console.log(curryUnaryFunction (1))
console.log(curryUnaryFunction (1) (2))
console.log(curryUnaryFunction (1) (2) (3))
