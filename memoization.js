// Memoization is a programming technique which attempts to increase a function’s performance by caching its previously 
// computed results. Each time a memoized function is called, its parameters are used to index the cache. 
// If the data is present, then it can be returned, without executing the entire function. Otherwise the function 
// is executed and then the result is added tothe cache. Let's take an example of adding function with memoization,

function memoizeAddition() {
    let cache = {};
    return (value) => {
        if (value in cache) {
            // Reading from cache
            console.log(`Result for ${value} is ${cache[value]} (Cached)`);
        } else {
            // Perform calculation
            const start = new Date();
            let result = value + 80;
            const end = new Date();
            const timeTaken = end - start;

            cache[value] = result;
            console.log(`Result for ${value} is ${result} (Calculated in ${timeTaken} ms)`);
            return result;
        }
    };
}

const addition = memoizeAddition();
console.log(addition(20)); // Output: Result for 20 is 100 (Calculated in X ms)
console.log(addition(20)); // Output: Result for 20 is 100 (Cached)
