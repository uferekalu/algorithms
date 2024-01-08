// A phrase is a palindrome if, after converting all uppercase letters into
// lowercase letters and removing all non-alphanumeric characters, it
// reads the same forward and backward. Alphanumeric characters
// include letters and numbers.
// Given a string s return true if it is a palindrome, or false otherwise.

function isPalindrome(string) {
    // Convert to lowercase and remove non-alphanumeric characters
    const cleanedString = string.toLowerCase().replace(/[^a-z0-9]/g, '')
    // compare the cleaned string with its reverse
    return cleanedString === cleanedString.split('').reverse().join('')
}

// Example usage:
const inputString = "A man, a plan, a canal, Panama!";
const result = isPalindrome(inputString);
console.log(result)